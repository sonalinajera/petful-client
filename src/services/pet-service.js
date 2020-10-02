import config from '../config'
const PetService = {
  getAllPets(){
  
  },
  getAllPets() {
    return fetch(`${config.REACT_APP_API_BASE}/pets`)
      .then(res => 
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  },
  getAllDogs() {
    return fetch(`${config.REACT_APP_API_BASE}/pets`)
      .then(res => 
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
        )
  },
  deleteCat() {
  },
  deleteDog() {
  }
}

export default PetService;