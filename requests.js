const url = 'http://localhost:3000/api'
window.RequestSnacks = {
  all(){
    return axios.get(`${url}/snacks`)
  },
  one(id){
    return axios.get(`${url}/snacks/${id}`)
  },
  addSnack(){
    return axios.post(`${url}/snacks`)
  },
  delSnack(id){
    return axios.delete(`${url}/snacks/${id}`)
  }

}
