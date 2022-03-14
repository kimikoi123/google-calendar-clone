import { format } from "date-fns"
import { addEventModal } from './modal'

const dayTemplate = document.getElementById("day-template")
export default function createDayElement(date, options = {}) {
  const {
    isCurrentMonth = true,
    isCurrentDay = false,
    showWeekName = false,
  } = options
  const dayElement = dayTemplate.content
    .cloneNode(true)
    .querySelector("[data-day-wrapper]")

  const addEventBtn = dayElement.querySelector('[data-add-event-btn]')
  const dayNumber = dayElement.querySelector("[data-day-number]")
  const weekName = dayElement.querySelector("[data-week-name]")
  dayNumber.textContent = date.getDate()
  if (!isCurrentMonth) {
    dayElement.classList.add("non-month-day")
  }
  if (isCurrentDay) [dayNumber.classList.add("active")]
  if (showWeekName) {
    weekName.textContent = format(date, "E")
  }

  addEventBtn.addEventListener('click', () => {
      addEventModal(date)
  })

  return dayElement
}
