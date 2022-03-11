import {
  endOfMonth,
  startOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameDay,
  isSameMonth,
  format
} from "date-fns"
import createDayElement from "./createDayElement"

const dayContainer = document.querySelector("[data-day-container]")
const dateTitle = document.querySelector('[data-date-title]')
export default function renderMonth(monthDate) {
  dayContainer.innerHTML = ""
  dateTitle.textContent = format(monthDate, 'MMMM yyyy')
  const dayElement = getCalendarDates(monthDate).map((date, index) => {
    return createDayElement(date, {
      isCurrentMonth: isSameMonth(monthDate, date),
      isCurrentDay: isSameDay(Date.now(), date),
      showWeekName: index < 7,
    })
  })

  dayElement.map((date) => dayContainer.append(date))
}

function getCalendarDates(date) {
  const firstWeekOfTheMonth = startOfWeek(startOfMonth(date), {
    weekStartsOn: 1,
  })
  const lastWeekOfTheMonth = endOfWeek(endOfMonth(date), { weekStartsOn: 1 })
  return eachDayOfInterval({
    start: firstWeekOfTheMonth,
    end: lastWeekOfTheMonth,
  })
}
