function adminSingleSnackTemplate(item){
return `
  <div id="${item.id}" class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <section class="modal-card-body">
        <div class="columns">
          <div class="column">
            <div class="card-image">
              <img src=${item.img} alt="snack image">
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Snack Name</label>
          <div class="control">
            <input class="input" id="title" type="text" placeholder="${item.name}">
          </div>
        </div>
        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea class="textarea" id="text">${item.description}</textarea>
          </div>
        </div>
        <div class="field">
          <label class="label">Snack Price $</label>
          <div class="control">
            <input class="input" id="price" type="text" placeholder="${item.price}">
          </div>
        </div>
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
