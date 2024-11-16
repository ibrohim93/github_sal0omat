let btnModalRegister = this.document.querySelectorAll('.modalRegister')
let modalContent = this.document.querySelector('.modal-register-content')
let btnClose = this.document.querySelector('.close')

function showModal() {
    modalContent.classList.add('activeModal')
    document.querySelector('body').style.overflowY = 'hidden'
}

function hideModal() {
    modalContent.classList.remove('activeModal')
    document.querySelector('body').style.overflowY = 'auto'
}

for (let i = 0; i < btnModalRegister.length; i++) {
    btnModalRegister[i].addEventListener('click', function () {
        showModal()
    })
}

btnClose.addEventListener('click', function () {
    hideModal()
})

modalContent.addEventListener('click', function (e) {
    if (e.target === modalContent) {
        hideModal()
    }
})
