function loginForm(){


      return`
    <div class="modal is-active">
      <div class="modal-background"></div>
        <div class="modal-card">
          <div class="field">
          <label class="label is-white">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="e.g Alex Smith">
            </div>
          </div>

          <div class="field">
            <label class="label is-white">Email</label>
            <div class="control">
              <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
            </div>
          </div>
          <button class="button is-warning is-pulled left">Log In</button>
          </div>
        </div>
      </div>`
}
