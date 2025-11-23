const getCurrentMonthName = () => {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ]
  return months[new Date().getMonth()]
}

export const event = {
  text: `Счастливые часы каждый день до конца ${getCurrentMonthName()}!`,
}