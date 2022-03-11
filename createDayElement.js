import { getDay } from 'date-fns'


const dayTemplate = document.getElementById('day-template')
export default function createDayElement(date) {
    const dayElement = dayTemplate.content
        .cloneNode(true)
        .querySelector('[data-day-wrapper]')

    const dayNumber = dayElement.querySelector('[data-day-number]')
    dayNumber.textContent = getDay(date)

    return dayElement
}   