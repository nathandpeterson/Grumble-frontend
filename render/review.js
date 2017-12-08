const Review = {
  collectFormData(snackID){
    let buttonValues = document.querySelectorAll('.radio-input')
    let rating = Array.from(buttonValues).map((button,index) => {
      if(button.checked) return index + 1 }).filter(el => el)
    let data = { title: document.querySelector('#title').value,
                text : document.querySelector('#text').value,
                rating: rating[0],
                snack_id: snackID }
    return this.validateReview(data) ? data : null
  },
  activateButtons(id){
    document.querySelector('#close-modal').addEventListener('click', () => {
      document.querySelector('.modal').classList.remove('is-active')
    })
    document.querySelector('#review-submit').addEventListener('click', () => {
      const reviewData = this.collectFormData(id)
      SnackReviews.post(reviewData)
      //Needs success or failure message. Use the same logic as errorMessage
    })
  },
  validateReview(data){
    if(!data.rating) return this.errorMessage(`You must select a rating`)
    if(!data.title) return this.errorMessage(`You must enter a title.`)
    if(!data.text) return this.errorMessage(`You must enter some text.`)
    return true
  },
  errorMessage(error){
    // Needs error handling visible to the user.
    console.log(error)
  }
}
