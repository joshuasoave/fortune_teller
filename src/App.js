import React from 'react';
import axios from 'axios';
import './main.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import CardBack from './components/CardBack.js';


class App extends React.Component {
  state = {
  }



  //Call 3rd party API for cards
  handleDealtCards = () => {
    axios.get(
      "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3"
    ).then((response) => {
      console.log(response.data.cards);
      // let tarotCard = response.data[0];
      // //change the name of tarot card to remove -
      // let fixedTarotName = tarotCard.name.replace(/-/g, " ")
      // console.log(fixedTarotName);
      this.setState(
        {
          dealtCards: response.data.cards
        }
      )
    })
  }

  render() {

    return (
      <div className="App">
        <Header/>
        <main>
          <div className="container">
            <div className="card-area">
            {
              this.state.dealtCards ?
              <div>
               { 
              this.state.dealtCards.map((card)=> {
                return(
                  <div>
                    <h3>{card.name}</h3>
                    <p>{card.meaning_up}</p>
                  </div>
                )
              })
              }
              </div>
            :
              <CardBack onDeal={this.handleDealtCards}/>
            }
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    )
  }
}



export default App;
