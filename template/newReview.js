<<<<<<< HEAD
function reviewForm(snack_id){
      return`
      <div class="modal is-active reviews">
=======
function reviewForm(user_id){
      return `
      <div class="modal is-active">
>>>>>>> debc5ad96ac7371429da5991fbb3a338ca2487a9
        <div class="modal-background"></div>
          <div class="modal-card">
          <div id="error-message">
          </div>
          <form class="review">
          <div class="field">
          <div class="control">
          <label class="label" id="rating">Rating</label>
            <label class="radio">
<<<<<<< HEAD
              <input type="radio" name="question" class="rating" value="1">
              1
            </label>
            <label class="radio">
              <input type="radio" name="question" class="rating" value="2">
              2
            </label>
            <label class="radio">
              <input type="radio" name="question" class="rating" value="3" checked>
              3
            </label>
            <label class="radio">
              <input type="radio" name="question" class="rating" value="4">
              4
            </label>
            <label class="radio">
              <input type="radio" name="question" class="rating" value="5">
=======
              <input class="radio-input" type="radio" name="question">
              1
            </label>
            <label class="radio">
              <input class="radio-input" type="radio" name="question">
              2
            </label>
            <label class="radio">
              <input class="radio-input" type="radio" name="question">
              3
            </label>
            <label class="radio">
              <input class="radio-input" type="radio" name="question">
              4
            </label>
            <label class="radio">
              <input class="radio-input" type="radio" name="question">
>>>>>>> debc5ad96ac7371429da5991fbb3a338ca2487a9
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

<<<<<<< HEAD
            <button id="${snack_id}"class="button is-info review-submit">Submit</button>
=======
            <button id="review-submit"class="button is-info">Submit</button>
>>>>>>> debc5ad96ac7371429da5991fbb3a338ca2487a9
            <button class="delete is-large" id="close-modal" aria-label="close"></button>
          </div>

          </form>
        </div>
      </div>`
}
