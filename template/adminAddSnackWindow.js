function addSnackTemp(item){
return `
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <h1 class="modal-card-title">${item.name}</h1>
          <button class="button is-warning is-pulled left">Add review</button>
      </header>
      <section class="modal-card-body">

        <------form goes here----->


      </section>
      <footer class="modal-card-foot">
        <button class="delete" id="close-modal" aria-label="close"></button>
      </footer>
    </div>
  </div>
`
}
