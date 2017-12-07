function reviewForm(snack_id){
      return`
      <div class="modal is-active reviews">
        <div class="modal-background"></div>
          <div class="modal-card">
          <div id="error-message">
          </div>
          <form class="review">
          <div class="field">
          <div class="control">
          <label class="label" id="rating">Rating</label>
            <label class="radio">
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

            <button id="${snack_id}"class="button is-info review-submit">Submit</button>
            <button class="delete is-large" id="close-modal" aria-label="close"></button>
          </div>

          </form>
        </div>
      </div>`
}
