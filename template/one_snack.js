function singleSnackTemplate(item, array){
return `
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <h1 class="modal-card-title">${item.name}</h1>
          <button class="button is-warning is-pulled left">Add review</button>
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
  <div class="box">
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
