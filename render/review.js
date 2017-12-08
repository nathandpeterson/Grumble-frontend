const Review = {
  collectFormData(snackID, review=null){
    let buttonValues = document.querySelectorAll('.radio-input')
    let rating = Array.from(buttonValues).map((button,index) => {
      if(button.checked) return index + 1 }).filter(el => el)
    let data = { title: document.querySelector('#title').value,
                text : document.querySelector('#text').value,
                rating: rating[0]}
      snackID ? data.snack_id = snackID : null
      review ? data.id = review.id : null
    if(this.validateReview(data)) return data
    return false
  },
  activateButtons(id){
    document.querySelector('#close-modal').addEventListener('click', () => {
      document.querySelector('.modal').classList.remove('is-active')
    })
    document.querySelector('#review-submit').addEventListener('click', () => {
      const reviewData = this.collectFormData(id)
      return reviewData ? SnackReviews.post(reviewData) : null
    })
  },
  validateReview(data){
    if(!data.rating) return this.errorMessage(`You must select a rating`)
    if(!data.title) return this.errorMessage(`You must enter a title.`)
    if(!data.text) return this.errorMessage(`You must enter some text.`)
    return true
  },
  updateForm(review){
    review = review[0]
    document.querySelector('#popup').innerHTML = reviewForm(review.user_id)
    document.querySelector('#title').value = review.title
    document.querySelector('#text').value = review.text
    let buttons = document.querySelectorAll('.radio-input')
    buttons[review.rating-1].checked = true
    this.activateUpdate(review)
  },
  activateUpdate(review){
    document.querySelector('#close-modal').addEventListener('click', () => {
      document.querySelector('.modal').classList.remove('is-active')
    })
    document.querySelector('#review-submit').addEventListener('click', () => {
      const reviewData = this.collectFormData(review.snack_id, review)
      reviewData ? SnackReviews.update(reviewData) : null
    })
  },
  errorMessage(message){
    document.querySelector('#error-message').innerHTML = `<div class="notification is-danger" id="error-notification">
    ${message}
    </div>`
  }
}
