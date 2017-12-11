// const url = 'http://localhost:3000/api'
// const authURL = 'http://localhost:3000'
const herokuURL = 'https://grumble-api.herokuapp.com/api'
const herokuAuth = 'https://grumble-api.herokuapp.com'

window.RequestSnacks = {
  all(){
    return axios.get(`${herokuURL}/snacks`)
  },
  one(id){
    return axios.get(`${herokuURL}/snacks/${id}`)
  },
  oneWithReviews(id){
    return axios.all([axios.get(`${herokuURL}/snacks/${id}`), axios.get(`${herokuURL}/snacks/${id}/reviews`)])
  }
}

window.SnackReviews = {
  post(data){
    let token = Token.check()
    return axios.post(`${herokuURL}/reviews`, data, {headers: { Authorization : token.token}})
      .then(response => {
        Review.success()
        window.setTimeout(Review.close, 1000)
      })
  },
  update(data){
    let token = Token.check()
    return axios.put(`${herokuURL}/reviews/${data.snack_id}`, data, {headers: { Authorization : token.token}})
      .then(response => {
        Review.success()
        window.setTimeout(Review.close, 1000)
      })
  },
  delete(review){
    let token = Token.check()
    return axios.delete(`${herokuURL}/reviews/${review.id}`, {headers: { Authorization : token.token}})
      .then(response => {
        Review.success()
        window.setTimeout(Review.close, 1000)
      })
  }
}

window.Auth = {
  login(data){
    return axios.post(`${herokuAuth}/auth/login`, data)
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
    return axios.post(`${herokuAuth}/auth/signup`, data)
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
    return axios.get(`${herokuAuth}/auth/validate`, {headers: {authorization: token}})
      .then(res => console.log(res.data))
  }
}

window.Admin = {
  postSnack(data){
    let token = window.Auth.getToken()

    return axios.post(`${herokuURL}/snacks` , data,
      {headers: { Authorization : token}})
    .then(message=>{
      return alert(`Added Snack:${data.name}`)
    })
  },
  editSnack(snack){
    let token = window.Auth.getToken()
    return axios.put(`${herokuURL}/snacks/${snack.id}`, snack, {headers: { Authorization : token}})
  },
  delSnack(snackID){
    return axios.delete(`${herokuURL}/snacks/${snackID}`).then(message=>{
      return alert(`Deleted Snack`)
    })
  },
  getUsers(){
    let token = window.Auth.getToken()
    return axios.get(`${herokuAuth}/users/`,{headers: { Authorization : token}}).then(data=>{
      return data
    })
  },
  delUserWreviews(id){
    let token = Auth.getToken()
    return axios.delete(`${herokuAuth}/users/${id}`, {headers: { Authorization: token}})
  },
  renderUsers(data){

  }
}

window.Reviews = {
  create(data){
    return axios.post(`${herokuURL}/reviews`)
  }
}
