import renderMonth from "./renderMonth";
import { addMonths } from 'date-fns'

let selectedMonth = Date.now()

document.querySelector('[data-date-next-btn]').addEventListener('click', () => {
    selectedMonth = addMonths(selectedMonth, 1)
    renderMonth(selectedMonth)
})

document.querySelector('[data-date-prev-btn]').addEventListener('click', () => {
    selectedMonth = addMonths(selectedMonth, -1)
    renderMonth(selectedMonth)
})

document.querySelector('[data-date-today-btn]').addEventListener('click', () => {
    selectedMonth = Date.now()
    renderMonth(selectedMonth)
})

renderMonth(selectedMonth)