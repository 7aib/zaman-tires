// Store hours configuration: 0=Sunday ... 6=Saturday
// Times are 24h in local browser time. Adjust as needed.
export const storeHours: { [day: number]: { open: number; close: number } | null } = {
  0: { open: 9, close: 21 }, // Sunday
  1: { open: 9, close: 21 }, // Monday
  2: { open: 9, close: 21 }, // Tuesday
  3: { open: 9, close: 21 }, // Wednesday
  4: { open: 9, close: 21 }, // Thursday
  5: { open: 9, close: 21 }, // Friday
  6: { open: 9, close: 21 }, // Saturday
}

export const formatHour = (hour24: number): string => {
  const period = hour24 >= 12 ? 'pm' : 'am'
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12
  return `${hour12} ${period}`
}

export const getNextOpenTime = (from: Date): { dayIndex: number; hour: number } | null => {
  for (let i = 0; i < 7; i++) {
    const dayIndex = (from.getDay() + i) % 7
    const hours = storeHours[dayIndex]
    if (!hours) continue
    if (i === 0) {
      // Same day: only consider if we haven't reached open time yet
      if (from.getHours() < hours.open) {
        return { dayIndex, hour: hours.open }
      }
    } else {
      return { dayIndex, hour: hours.open }
    }
  }
  return null
}

export const computeStoreStatus = (now: Date): string => {
  const todayIdx = now.getDay()
  const hours = storeHours[todayIdx]
  if (!hours) {
    const next = getNextOpenTime(now)
    if (!next) return 'Closed'
    const isTomorrow = next.dayIndex === (todayIdx + 1) % 7
    const when = isTomorrow ? 'tomorrow' : 'soon'
    return `Closed ⋅ Opens ${when} at ${formatHour(next.hour)}`
  }
  const currentHour = now.getHours() + now.getMinutes() / 60
  if (currentHour >= hours.open && currentHour < hours.close) {
    return `Open ⋅ Closes ${formatHour(hours.close)}`
  }
  // Not open now → find next opening
  const next = getNextOpenTime(now)
  if (!next) return 'Closed'
  const isToday = next.dayIndex === todayIdx
  const isTomorrow = next.dayIndex === (todayIdx + 1) % 7
  const when = isToday ? 'today' : isTomorrow ? 'tomorrow' : 'soon'
  return `Closed ⋅ Opens ${when} at ${formatHour(next.hour)}`
}

export const getCurrentStatus = (): string => {
  const now = new Date()
  const todayIdx = now.getDay()
  const hours = storeHours[todayIdx]
  if (!hours) return 'Closed'
  
  const currentHour = now.getHours() + now.getMinutes() / 60
  return (currentHour >= hours.open && currentHour < hours.close) ? 'Open Now' : 'Closed'
}

export const getCurrentStatusColor = (): string => {
  const now = new Date()
  const todayIdx = now.getDay()
  const hours = storeHours[todayIdx]
  if (!hours) return 'text-red-600'
  
  const currentHour = now.getHours() + now.getMinutes() / 60
  return (currentHour >= hours.open && currentHour < hours.close) ? 'text-green-600' : 'text-red-600'
}
