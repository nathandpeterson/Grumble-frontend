function loginForm(){


      return`
    <div class="modal is-active">
      <div class="modal-background"></div>
        <div class="modal-card">


          <div class="field">
            <label class="label is-white">Email</label>
            <div class="control">
              <input required id="email-input" class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
            </div>
          </div>

          <div class="field">
          <label class="label is-white"></label>
            <div class="control">
              <input required id="password-input" class="input" type="text" placeholder="password">
            </div>
          </div>

          <button id="login-submit"class="button is-warning is-pulled left">Log In</button>
          </div>
        </div>
      </div>`
}