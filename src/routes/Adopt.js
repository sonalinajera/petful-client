import React, { Component } from 'react'
import PetService from '../services/pet-service'
import PeopleService from '../services/person-service'
import config from '../config'


export class Adopt extends Component {

  constructor() {
    super();
    this.state = {
      cats: [],
      dogs: [],
      people: [],
      pets: {},
      OK: false,
      fullName: '',
      currentUser: ''
    }
  }



  componentDidMount() {
    // async call
    PetService.getAllPets()
      .then(pets => {
        this.setState({
          cats: [pets.cat],
          dogs: [pets.dog]
        });
      })
    PeopleService.getAllPeople()
      .then(people => {
        this.setState({ people: people.people });
      })
      .catch(e => console.error(e));
  }


  petCountdown = () => {
    var countdown = setInterval(() => {
      if(this.state.people.length < 2) {
        this.addToQueue();
       return clearInterval(countdown);
      }
        fetch(`${config.REACT_APP_API_BASE}/people`, {
          method: 'DELETE',
          header: {
            'content-type': 'application/json',
          }
        }).then(() => this.fetchData());
        this.adopted();
      }
      , 5000);
    
      // if(this.state.people.length < 2) {
      //   return clearInterval(countdown)
      // stopInterval()
    // }
  }

  addToQueue=() =>  {
    let randomPeople = [
      "Lisa NewCarr",
      'Karen From Finance',
      'Helen of Troy',
      'Jake from StateFarm',
      'Johnny Jon',
      'Tracy Wells'
    ];

    let index = Math.floor(Math.random() * randomPeople.length); 
    let person = randomPeople[index];
    setInterval(() => { 
      fetch(`${config.REACT_APP_API_BASE}/people`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ person })
      })
      .then(res => res.json()).then(() => this.fetchData());
    }, 5000) 
  }

  fetchData = () => {
    fetch(`${config.REACT_APP_API_BASE}/pets`)
      .then(res => res.json())
      .then(res => this.setState({ cats: [res.cat],
        dogs: [res.dog], pets: res, OK: true }));
    fetch(`${config.REACT_APP_API_BASE}/people`)
      .then(res => res.json())
      .then(res => {
      this.setState({ people: res.people })});
  }

  adopted = () => {
    let counter = this.state.people.length;
    if (counter === 0 ) {
      return;
    }
    if (counter % 2 === 0) {
      fetch(`${config.REACT_APP_API_BASE}/pets`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ type: 'cats' })
      }).then(() => this.fetchData());
    }
    else {
      fetch(`${config.REACT_APP_API_BASE}/pets`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ type: 'dogs' })
      }).then(() => this.fetchData());
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    let person = this.state.fullName;
    this.setState({ currentUser: person })
    fetch(`${config.REACT_APP_API_BASE}/people`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ person })
    })
    .then(res => res.json())
    .then(resJson => {
       this.setState({
         people: [...resJson.people]
       })
      })
    .then(() => this.fetchData());
    this.petCountdown();
  }

  render() {
    let cats = this.state.cats ? this.state.cats : [];
    let catCard = cats.map(cat => {
      return (
        <div key='1' className='landing-content'>
          <img src={cat.imageURL} alt='Landing Cat' />
          <h2>Name: {cat.name}</h2>
          <p>Gender: {cat.gender}</p>
          <p>Age: {cat.age}</p>
          <p>Breed: {cat.breed}</p>
          <p>{cat.name}'s Story: {cat.story} </p>
        </div>
      )
    })

    let dogs = this.state.dogs ? this.state.dogs : [];

    let dogCard = dogs.map(dog => {
      return (
        <div key='1' className='landing-content'>
          <img src={dog.imageURL} alt='Landing dog' />
          <h2>Name: {dog.name}</h2>
          <p>Gender: {dog.gender}</p>
          <p>Age: {dog.age}</p>
          <p>Breed: {dog.breed}</p>
          <p>{dog.name}'s Story: {dog.story}</p>
        </div>
      )
    })

    let people = this.state.people ? this.state.people : [];

    let nextInLine = people.map((people, i) => {
      return (
        <div key={i}>
        <li className='people-list'>{people}</li>
        </div>
      )
    })

    return (
      <div>
        <div>
          <h2>Look who's up!</h2>
          <h2>Cats</h2>

          {catCard}
        </div>
        <h2>Dogs</h2>
        {dogCard}

        <section>
          <h2>Who's in line to adopt?</h2>
          <ol className='landing-content'>
            {nextInLine}
          </ol>
        </section>
        <form onSubmit={this.onSubmit}>
          <h1>Get in Line</h1>
          <label htmlFor='full-name'>Enter Your Name</label>
          <input onChange={(event) => this.setState({ fullName: event.currentTarget.value })} type='text' id='full-name' />
          <br/>
          <button>Join Queue</button>
        </form>
      </div >
    )
  }
}



export default Adopt