import React from 'react';
import axios from 'axios';
import './main.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import CardBack from './components/CardBack.js';
import { Box, Button, Container, Grid, Typography } from '@material-ui/core';


class App extends React.Component {
  state = {
  }


  goBack = () => {
    //set set to dealt cards false
    this.setState({
      dealtCards: false
    })
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
          <Container>
            <Box className="card-area">
            {
              this.state.dealtCards ?
              <Grid container direction="row" alignContent="right">
                <Grid item direction="column">
                 <Button onClick={this.goBack}>
                    Back
                  </Button>
                </Grid>
               { 
              this.state.dealtCards.map((card)=> {
                return(
                  <Grid container item direction="column" alignItems="left">
                    <Grid item alignItems="left">
                      <Typography component="h3">{card.name}</Typography>
                    </Grid>
                    <br/>
                    <Grid item>
                      <Typography>{card.meaning_up}</Typography>
                    </Grid>
                  </Grid>
                )
              })
              }
              </Grid>
            :
              <CardBack onDeal={this.handleDealtCards}/>
            }
            </Box>
          </Container>
        </main>
        <Footer/>
      </div>
    )
  }
}


export default App;
