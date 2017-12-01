const url = 'http://localhost:3000/api'
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
    return axios.post(`${url}/auth/login`, data)
  }
}
