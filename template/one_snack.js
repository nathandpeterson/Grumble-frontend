function singleSnackTemplate(item, array){
return `
  <div id="${item.id}" class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <h1 class="modal-card-title">${item.name}</h1>
        ${isLoggedIn(item.id, array)}
      </header>
      <section class="modal-card-body">
        <div class="columns">
          <div class="column">
            <div class="card-image">
              <img src=${item.img} alt="snack image">
            </div>
          </div>
          <div class="column">
            ${item.description}
          </div>
        </div>
        <div class="reviews">${addReviews(array)}</div>
      </section>
      <footer class="modal-card-foot">
        <button class="delete" id="close-modal" aria-label="close"></button>
      </footer>
    </div>
  </div>
`
}

function addReviews(array){
  const content = array.map(el => oneReview(el))
  return content.join(" ")
}

function oneReview(item){
return `
  ${alreadyReviewed(item.user_id)}
    <article class="media">
      <div class="media-content" id="${item.user_id}">
        <strong class='is-pulled-right'>Rating: ${item.rating}</strong>
        <p>
        <h3 class="title is-4">${item.title}</h3>
        <small>${item.text}</small>
        </p>
        <p class='is-pulled-right'>
        <small><strong>by: ${item.first_name} ${item.last_name}</strong></small>
        </p>
      </div>
    </article>
  </div>
`
}

function isLoggedIn(snack_id, array){
  const user = Token.check()
  //check if the user is logged in
  if (user.token === "" || !user.token) return `<span>Login or sign up to post a review</span>`
  //check if user has reviewed the item
    else  {
      let btnContent = 'Add review'
      let btnId  = `addReview`
      array.forEach(el => {
        if (el.user_id == user.userId) {
          btnContent = 'Edit Review'
          btnId = `editReview`
        }
      })
    return `<button class="button is-danger is-pulled left action-btn" id=${btnId}>${btnContent}</button>`
  }
}

function alreadyReviewed(id){
  const user = Token.check()
  if (user.userId == id){
    return `<div class="box has-review" id="id">`
  }
  return `<div class="box">`
}
