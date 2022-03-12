import { format } from "date-fns"

const modalBody = document.querySelector('[data-modal-body]')
const modal = document.querySelector('[data-modal]')



const eventFormTemplate = document.getElementById('event-form-template')
export function openModal(event) {
    const eventFormElement = eventFormTemplate.content.cloneNode(true)
    const isNewEvent = event.id == null
    eventFormElement.querySelector('[data-event-title]').textContent = isNewEvent ? 'Add Event' : 'Edit Event'
    eventFormElement.querySelector('[data-date]').textContent = format(event, 'L    /d/yyyy')
    modalBody.append(eventFormElement)
    modal.classList.add('show')
}

function closeModal() {
    modal.classList.remove('show')
}