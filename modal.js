const modalBody = document.querySelector('[data-modal-body]')
const modal = document.querySelector('[data-modal]')



const eventFormTemplate = document.getElementById('event-form-template')
export function openModal(date) {
    const eventFormElement = eventFormTemplate.content.cloneNode(true)
    modalBody.append(eventFormElement)
    modal.classList.add('show')
}

function closeModal() {
    modal.classList.remove('show')
}