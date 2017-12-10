function adminSnackTemplate(item){

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
            $${item.price}
          </div>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item edit" id="edit${item.id}">Edit</a>
          <br>
        </footer>
        <footer class="card-footer">
          <a href="#" class="card-footer-item  del" id="del${item.id}">Delete</a>
          <br>
        </footer>
      </div>
    </div>
`
}
