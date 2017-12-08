function snackOptions(snacks){
  snacks.forEach(snack=>{
    return `<option value="${snack.id}">${snack.name}</option>`
  })
}


function delSnackTemp(snacks){
  return `
      <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Delete Snack</p>
            <button class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body">
            <div class="field">
            <label class="label">Subject</label>
              <div class="control">
                <div class="select">
                  <select>
                    <option>Select Snack To Delete</option>
                    <option value="${snack.id}">${snack.name}
                    <!---axios list of snacks to delete ---->


                    <option></option>
                  </select>
                </div>
              </div>
            </div>
          </section>
          <footer class="modal-card-foot">
            <button id="removeSnack" class="button is-success">Save changes</button>
          </footer>
        </div>
      </div>`
}
