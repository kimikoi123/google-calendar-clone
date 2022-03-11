import { endOfMonth, startOfMonth, startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns'
import createDayElement from './createDayElement'




const dayContainer = document.querySelector('[data-day-container]')
export default function renderMonth(monthDate) {
    const date = getCalenderDates(monthDate).map(item => createDayElement(item))
    dayContainer.innerHTML = ''
    date.map(item => dayContainer.append(item))
}

function getCalenderDates(date) {
    const firstWeekOfTheMonth = startOfWeek(startOfMonth(date))
    const lastWeekOfTheMonth = endOfWeek(endOfMonth(date))
    return eachDayOfInterval(
        { start: firstWeekOfTheMonth, end: lastWeekOfTheMonth }
    )
}