function reviewForm(user_id){
      return`
      <div class="modal is-active">
        <div class="modal-background"></div>
          <div class="modal-card">
          <div id="error-message">
          </div>
          <div class="field">
          <div class="control">
          <label class="label">Rating</label>
            <label class="radio">
              <input type="radio" name="question">
              1
            </label>
            <label class="radio">
              <input type="radio" name="question">
              2
            </label>
            <label class="radio">
              <input type="radio" name="question">
              3
            </label>
            <label class="radio">
              <input type="radio" name="question">
              4
            </label>
            <label class="radio">
              <input type="radio" name="question">
              5
            </label>
          </div>
        </div>
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input class="input" id="title" type="text" placeholder="Review title">
            </div>
          </div>
          <div class="field">
            <label class="label">Review</label>
            <div class="control">
              <textarea class="textarea" id="text" placeholder="What did you think about this snack?"></textarea>
            </div>
          </div>

            <button id="login-submit"class="button is-info">Submit</button>
            <button class="delete is-large" id="close-modal" aria-label="close"></button>
          </div>
        </div>
      </div>`
}
