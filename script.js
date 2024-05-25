function showModal(options) {
    const place = document.querySelector(`#${options.containerID}`)
    place.innerHTML =
        `<section id="modalWindow">
        <div class="modalContent">
            <div class="modalHeader">
                <h2 id="modalTitle">${options.title || ''}</h2>
            </div>
            <div class="modalBody">
                <p id="modalText">${options.text || ''}</p>
            </div>
            <div class="modalFooter">
                <button onclick=${options.actionOkButton.func || 'ok()'}>${options.actionOkButton.text || 'Ok'}</button>
                <button onclick="closeModal()">Close</button>
            </div>
        </div>
    </section>`
}

function closeModal() {
    place.innerHTML = '';
}

function ok() {
    alert('Тыкнул OK');
}

addEventListener("click", function (event) {
    if(event.target == document.querySelector('html')){
        closeModal()
    }
});