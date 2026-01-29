const crypto = require('crypto');

const JWT_SECRET = 'your-super-secret-jwt-key-change-this-in-production-12345';
const BASE_URL = 'http://localhost:3004/api/products';

function generateToken(username) {
    const tokenData = JSON.stringify({
        username,
        role: 'admin',
        iat: Date.now(),
        exp: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    });
    const hmac = crypto
        .createHmac('sha256', JWT_SECRET)
        .update(tokenData)
        .digest('hex');
    return Buffer.from(`${tokenData}.${hmac}`).toString('base64');
}

const token = generateToken('admin');
const headers = {
    'Content-Type': 'application/json',
    'Cookie': `adminToken=${token}`
};

async function verifyApi() {
    console.log('Starting API Verification...');

    // 1. Create Product
    console.log('\nTesting POST /api/products (Create)...');
    const newProduct = {
        name: 'Test Tyre',
        type: 'tyre',
        brand: 'Michelin',
        size: '205/55R16',
        price: 150,
        description: 'High performance tyre',
        quantity: 10,
        imageUrl: '/images/test.jpg'
    };

    let response = await fetch(BASE_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify(newProduct)
    });

    if (!response.ok) {
        console.error('Failed to create product:', await response.text());
        return;
    }

    const createdProduct = await response.json();
    console.log('Product created:', createdProduct.id);

    if (createdProduct.quantity !== 10) {
        console.error('Quantity was not saved correctly. Expected 10, got', createdProduct.quantity);
    }
    if (createdProduct.imageUrl !== '/images/test.jpg') {
        console.error('ImageUrl was not saved correctly. Expected /images/test.jpg, got', createdProduct.imageUrl);
    }

    const productId = createdProduct.id;

    // 2. Read Product
    console.log(`\nTesting GET /api/products/${productId} (Read)...`);
    response = await fetch(`${BASE_URL}/${productId}`);

    if (!response.ok) {
        console.error('Failed to fetch product:', await response.text());
        return;
    }

    const fetchedProduct = await response.json();
    console.log('Product fetched:', fetchedProduct.name);

    // 3. Update Product
    console.log(`\nTesting PUT /api/products/${productId} (Update)...`);
    const updateData = {
        ...newProduct,
        quantity: 5,
        price: 160
    };

    response = await fetch(`${BASE_URL}/${productId}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(updateData)
    });

    if (!response.ok) {
        console.error('Failed to update product:', await response.text());
        return;
    }

    const updatedProduct = await response.json();
    console.log('Product updated.');
    console.log('New Quantity:', updatedProduct.quantity);
    console.log('New Price:', updatedProduct.price);

    if (updatedProduct.quantity !== 5) {
        console.error('Update failed for quantity. Expected 5, got', updatedProduct.quantity);
    }

    // 4. Delete Product
    console.log(`\nTesting DELETE /api/products/${productId} (Delete)...`);
    response = await fetch(`${BASE_URL}/${productId}`, {
        method: 'DELETE',
        headers
    });

    if (!response.ok) {
        console.error('Failed to delete product:', await response.text());
        return;
    }

    console.log('Product deleted.');

    // 5. Verify Deletion
    console.log(`\nTesting GET /api/products/${productId} (Verify Deletion)...`);
    response = await fetch(`${BASE_URL}/${productId}`);

    if (response.status === 404) {
        console.log('Success: Product not found (as expected).');
    } else {
        console.error('Error: Product still exists or other error:', await response.status);
    }
}

verifyApi().catch(console.error);
