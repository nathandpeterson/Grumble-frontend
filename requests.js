const url = 'http://localhost:3000/api'
const authURL = 'http://localhost:3000'
window.RequestSnacks = {
  all(){
    return axios.get(`${url}/snacks`)
  },
  one(id){
    return axios.get(`${url}/snacks/${id}`)
  }
}

window.Auth = {
  login(data){
    return axios.post(`${authURL}/auth/login`, data)
      .then(newToken => {
        this.setToken(newToken.data.message)
      })
      .catch(err => console.log(err))
  },
  setToken(token){
    localStorage.setItem('token', token)
  },
  getToken(){
    return localStorage.getItem(token)
  }
}
