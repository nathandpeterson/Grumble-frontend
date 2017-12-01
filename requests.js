const url = 'http://localhost:3000/api'
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
