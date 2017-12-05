function signUpForm(){
  return `
  <div class="modal is-active">
    <div class="modal-background"></div>
      <div class="modal-card">
      <div id="error-message">
      </div>

        <div class="field">
          <label class="label is-white">First Name</label>
          <div class="control">
            <input required id="first-name-input" class="input" type="text" placeholder="Samwise">
          </div>
        </div>
        <div class="field">
          <label class="label is-white">Last Name</label>
          <div class="control">
            <input required id="last-name-input" class="input" type="text" placeholder="Gangee">
          </div>
        </div>

        <div class="field">
          <label class="label is-white">Email</label>
          <div class="control">
            <input required id="email-input" class="input" type="email" placeholder="e.g. samwise@hobbit.com">
          </div>
        </div>

        <div class="field">
        <label class="label is-white"></label>
          <div class="control">
            <input required id="password-input" class="input" type="password" placeholder="password">
          </div>
        </div>

        <div class="field">
        <label class="label is-white"></label>
          <div class="control">
            <input required id="password-verify" class="input" type="password" placeholder="confirm password">
          </div>
        </div>


        <br>
        <button id="submit-sign-up-data"class="button is-primary is-pulled left">Submit</button>

        <button class="delete is-large" id="close-modal" aria-label="close"></button>
        </div>
      </div>
    </div>`
}
