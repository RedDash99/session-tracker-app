import { metrikaId } from '../lib/data/shared.json'

async function sendData(data) {
  const url = '/api/'
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  })
  const result = await response.json()
  return result
}

const getNoun = (number, one, two, five) => {
  let n = Math.abs(number)
  n %= 100
  if (n >= 5 && n <= 20) {
    return five
  }
  n %= 10
  if (n === 1) {
    return one
  }
  if (n >= 2 && n <= 4) {
    return two
  }
  return five
}

const debounce = (func, delay) => {
  let timeoutId
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args)
    }, delay)
  }
}

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
  const promoHeight = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue('--header-promo-height').trim()
  )
  const yOffset = -85 - promoHeight - (promoHeight ? 15 : 0)
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const canDeviceCall = () => {
  // Check for touch capability
  const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0

  // Check for telephony capability
  const isMobileUA = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )

  // Check for actual telephone capability
  const isTelSupported =
    typeof document.createElement('a').href === 'string' &&
    document.createElement('a').href.indexOf('tel:') === 0

  return (hasTouch && isMobileUA) || isTelSupported
}

const callYMGoal = () => {
  if (typeof ym === 'undefined') return true
  ym(metrikaId, 'reachGoal', 'общая')
}

const formatPhoneNumberLink = (phoneNumber, phoneCode = '+375') => {
  const digitsOnly = phoneNumber.replace(/\D/g, '')

  let cleanNumber = digitsOnly
  if (digitsOnly.startsWith('8') && phoneCode === '+375') {
    cleanNumber = digitsOnly.substring(1)
  }

  if (cleanNumber.startsWith('0')) {
    cleanNumber = cleanNumber.substring(1)
  }

  return `${phoneCode}${cleanNumber}`
}

const formatDateToISO = (dateString) => {
  const parts = dateString.split('.')

  if (parts.length !== 3) {
    throw new Error('Invalid date format. Expected "DD.MM.YYYY".')
  }

  const day = parts[0].padStart(2, '0')
  const month = parts[1].padStart(2, '0')
  const year = parts[2]

  return `${year}-${month}-${day}`
}

const splitArrayInHalf = (array) => {
  const middleIndex = Math.ceil(array.length / 2)
  return [array.slice(0, middleIndex), array.slice(middleIndex)]
}

const createSlug = (title) =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^a-zа-яё0-9\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')

export {
  sendData,
  getNoun,
  debounce,
  scrollWithOffset,
  scrollToTop,
  canDeviceCall,
  callYMGoal,
  formatPhoneNumberLink,
  formatDateToISO,
  splitArrayInHalf,
  createSlug,
}
