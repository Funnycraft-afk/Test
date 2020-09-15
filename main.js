function createModal(info, img, title) {
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">
    <div class="modal-window">
      <h1 class="vmodal-title">${title}</h1>
      <img src="${img}" alt="image">
      <div class="vmodal-close">
       
      </div>
      
      <p class="modal-text">
      ${info} 
      </p>
    </div>
</div>
`)
    document.body.appendChild(modal)
    modal.classList.add('open')
    return modal
}

let moreLink = document.querySelectorAll('.projects-gallery-more')


for (let link of moreLink) {

    link.addEventListener('click', (event) => {
        let parent = event.target.parentElement
        let title = parent.querySelector('.projects-gallery-title').textContent
        let img = parent.querySelector('img').getAttribute('src')
        let info = parent.dataset.info
        createModal(info, img, title)
    })

}

let closeModal = document.querySelector('body').addEventListener('click', (event) => {
    console.log(event.target);
    if ((event.target.className === 'vmodal-close') || (event.target.className === 'modal-overlay')) {
        let modal = document.querySelector('.vmodal.open')
        modal.classList.remove('open')
        document.body.removeChild(modal)
    }
})
