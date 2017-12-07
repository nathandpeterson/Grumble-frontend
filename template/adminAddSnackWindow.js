function addSnackTemp(item){
return `
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <h1 class="modal-card-title">${item.name}</h1>
          <button id="addSnackPost" class="button is-success is-pulled left">Add Snack</button>
      </header>
      <section class="modal-card-body">

      <form class="addSnack">
        Snack Name:<br>
        <input id="snackName" type="text" name="name" placeholder="Snack Name">
        <br>
        Description:<br>
        <textarea id="snackDescription" name="description" rows="8" cols="60" placeholder=""></textarea><br>
        Price:<br>
        <input id="snackPrice" type="number" name="price" value="" step="0.25"><br>
        Sorce of img:<br>
        <input id="imgURL" type="text" name="img" size="50" value="">

      </form>
      </section>
      <footer class="modal-card-foot">
        <button class="delete" id="close-modal" aria-label="close"></button>
      </footer>
    </div>
  </div>
`
}
