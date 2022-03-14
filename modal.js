import { format } from "date-fns"

const modalBody = document.querySelector('[data-modal-body]')
const modal = document.querySelector('[data-modal]')



const eventFormTemplate = document.getElementById('event-form-template')
const eventFormElement = eventFormTemplate.content.cloneNode(true)

export function addEventModal(date) {
    openModal(getEventFormModalBody ({ date }))
}

function getEventFormModalBody(event) {
    const form = eventFormElement.querySelector('[data-form]')
    const saveButton = form.querySelector('[data-save-btn]')
    const deleteButton = form.querySelector('[data-delete-btn]')
    const formName = form.querySelector('[data-name]')



    
    const isNewEvent = event.id == null
    saveButton.innerText = isNewEvent ? 'Add' : 'Update'
    if (isNewEvent) {
        deleteButton.remove()
    } else {
        deleteButton.addEventListener('click', () => {
            deleteCallback(event)
            closeModal()
        })
    }

    eventFormElement.querySelector('[data-event-title]').textContent = isNewEvent ? 'Add Event' : 'Edit Event'
    eventFormElement.querySelector('[data-date]').textContent = format(event, 'L    /d/yyyy')

    formName.value = event.name || ''

    return eventFormElement
}

function openModal(bodyContent) {
    modalBody.innerHTML = ''
    modalBody.append(bodyContent)
    modal.classList.add('show')
}

function closeModal() {
    modal.classList.remove('show')
}