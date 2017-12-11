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
        <div class="field">
          <label for = "snackName" class="label">Snack name</label>
          <div class="control">
            <input class="input" id="snackName" type="text" name="name" placeholder="What is it called?">
          </div>
        </div>

        <div class="field">
          <label for="snackDescription" class="label">Description</label>
          <div class="control">
            <textarea id="snackDescription" class="textarea" placeholder="What is special about it?"></textarea>
          </div>
        </div>

        <div class="field">
          <label for="snackPrice" class= "label">Price</label>
          <div class="control">
            <input class="input" id="snackPrice"  placeholder="$" type="text">
          </div>
        </div>

        <div class="field">
          <label for="img_URL" class= "label">img Url</label>
          <div class="control">
            <input class="input" id="snackURL"  placeholder="http://" type="text">
          </div>
        </div>

        </section>
      </form>
        <footer class="modal-card-foot">
          <button class="delete" id="close-modal" aria-label="close"></button>
        </footer>
    </div>
  </div>
`
}
