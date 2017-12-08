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
  updateForm(review){
    review = review[0]
<<<<<<< HEAD
    console.log(review)
=======
>>>>>>> a15048cebb627c878eb3fd697ec75351551229d0
    document.querySelector('#popup').innerHTML = reviewForm(review.user_id)
    document.querySelector('#title').value = review.title
    document.querySelector('#text').value = review.text
    let buttons = document.querySelectorAll('.radio-input')
    buttons[review.rating-1].checked = true
    this.activateUpdate(review.user_id)
  },
  activateUpdate(id){
    document.querySelector('#close-modal').addEventListener('click', () => {
      document.querySelector('.modal').classList.remove('is-active')
    })
    document.querySelector('#review-submit').addEventListener('click', () => {
      const reviewData = this.collectFormData(id)
      SnackReviews.update(reviewData)
      //Needs success or failure message. Use the same logic as errorMessage
    })
  },
  errorMessage(error){
    // Needs error handling visible to the user.
    console.log(error)
  }
}
