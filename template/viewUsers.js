function viewActiveUsers(data){
  //console.log(data)
  let code = data.map(data=>{
    //console.log(data)
    return `<tr>
          <td>${data.id}</td>
          <td>${data.first_name}</td>
          <td>${data.last_name}</td>
          <td>${data.email}</td>
          <td><button class="delete delUserButton" value="${data.id}"type="button" >Delete</button></td>
        </tr>`
  })
  return code.join('')
}
