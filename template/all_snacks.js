function snackTemplate(item){
  if(isNaN(item.averageRating) || item.averageRating === null) item.averageRating = 5.00
return `
    <div class="column is-3">
      <div class="card">
        <div class="card-image">
           <figure class="image is-1by1" style="background: url(${item.img}); background-repeat: no-repeat; background-size: cover">
           </figure>
         </div>
        <header class="card-header">
          <p class="card-header-title">
            ${item.name}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            $${item.price} <br> Rating: ${item.averageRating} / 5.00
          </div>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item  more" id="more${item.id}">More</a>
          <br>
        </footer>
      </div>
    </div>
`
}
