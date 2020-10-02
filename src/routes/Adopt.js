import React, { Component } from 'react'
import PetService from '../services/pet-service'


export class Adopt extends Component {
  state = {
    cats:[],
    dogs:[],
    people:[]
  }

  componentDidMount (){
    // async call
    PetService.getAllCats()
    .then(cats => {
      this.setState({ cats: cats });
    }).then(
      PetService.getAllDogs()
      .then(dogs => {
        this.setState({dogs});
      })
    )
    .catch(e => console.log(e));
  }

  render() {

    let catCard = this.state.cats.map(cat => {
        return (
          <div className='landing-content'>
          <img src='hhttp://via.placeholder.com/300x300?text=Doggy&font=lobster' alt='Landing Cat'/>
          <h2>Name: {cat.name}</h2>
          <p>Gender: {cat.gender}</p>
          <p>Age: {cat.age}</p>
          <p>Breed: {cat.breed}</p>
          <p>Name's Story: {cat.story} </p>
        </div>
          )
           })
  
  
    return (
      <div>
        <h2>Cats</h2>
        <div className='landing-content'>
          <img src='http://via.placeholder.com/300x300?text=Doggy&font=lobster' alt='Coming Soon'/>
          <h2>Name</h2>
          <p>Gender:</p>
          <p>Age:</p>
          <p>Breed:</p>
          <p>Name's Story:</p>
        </div>
         {catCard}
        <h2>Dogs</h2>
        <div className='landing-content'>
          <img src='http://via.placeholder.com/300x300?text=Doggy&font=lobster' alt='Coming Soon'/>
          <h2>Name</h2>
          <p>Gender:</p>
          <p>Age:</p>
          <p>Breed:</p>
          <p>Name's Story:</p>
        </div>
      </div>
    )
  }
}

export default Adopt
