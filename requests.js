const url = 'http://localhost:3000/api'
const authURL = 'http://localhost:3000'
window.RequestSnacks = {
  all(){
    return axios.get(`${url}/snacks`)
  },
  one(id){
    return axios.get(`${url}/snacks/${id}`)
  },
  oneWithReviews(id){
    return axios.all([axios.get(`${url}/snacks/${id}`), axios.get(`${url}/snacks/${id}/reviews`)])
  }
}

window.SnackReviews = {
  post(data){
    let token = Token.check()
    return axios.post(`${url}/reviews`, data, {headers: { Authorization : token.token}})
      .then(response => {
        Review.success()
        window.setTimeout(Review.close, 1000)
      })
  },
  update(data){
    let token = Token.check()
    return axios.put(`${url}/reviews/${data.snack_id}`, data, {headers: { Authorization : token.token}})
      .then(response => {
        Review.success()
        window.setTimeout(Review.close, 1000)
      })
  }
}

window.Auth = {
  login(data){
    return axios.post(`${authURL}/auth/login`, data)
      .then(newToken => {
        this.setToken(newToken.data.token)
        Login.success()
        renderSnacks()
      })
      .catch(err => {
        Login.errorMessage(err)
      })
  },
  signUp(data){
    return axios.post(`${authURL}/auth/signup`, data)
      .then(res => {
        SignUp.success(res.data)
        window.setTimeout(render, 500)
        window.setTimeout(SignUp.closeModal, 1000)
      })
      .catch(err => {
        SignUp.errorMessage('That email has been taken')
      })
  },
  setToken(token){
    localStorage.setItem('token', token.token)
    localStorage.setItem('userId', token.userInfo.id)
    localStorage.setItem('userName', token.userInfo.firstname)
    localStorage.setItem('admin', token.userInfo.admin)
  },
  getToken(){
    let token = localStorage.getItem('token')
    return token
  },
  testValidation(token){
    return axios.get(`${authURL}/auth/validate`, {headers: {authorization: token}})
      .then(res => console.log(res.data))
  }
}

window.Admin = {
  postSnack(data){
    let token = window.Auth.getToken()

    return axios.post(`${url}/snacks` , data,
      {headers: { Authorization : token}})
    .then(message=>{
      return alert(`added Snack:${data.name}`)
    })
  },
  delSnack(data){

  },
  getUsers(){
    return axios.get(`${authURL}/users/`).then(data=>{
      return data
    })
  },
  delUserWreviews(id){
    let token = Auth.getToken()
    return axios.delete(`${authURL}/users/${id}`, {headers: { Authorization: token}})
  },
  renderUsers(data){

  }
}

window.Reviews = {
  create(data){
    return axios.post(`${url}/reviews`)
  }
}
