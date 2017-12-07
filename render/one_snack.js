function renderOneSnack(id) {
  return RequestSnacks.oneWithReviews(id)
    .then(snackAndReviews => {
      const snack = snackAndReviews[0].data
      console.log(snack)

      const reviewsArray = snackAndReviews[1].data
      const content = singleSnackTemplate(snack, reviewsArray)
      document.querySelector("#popup").innerHTML = content
      document.querySelector('#close-modal').addEventListener('click', () => {
        document.querySelector('.modal').classList.remove('is-active')
      })
      document.querySelector('.action-btn').addEventListener('click',
    (event) => {
      if(event.target.id === "addReview"){
        const user = Token.check()
        document.querySelector('#popup').innerHTML = reviewForm(user.userId);
      };
    })
  })
}
