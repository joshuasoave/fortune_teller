import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './main.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import CardBack from './components/CardBack.js';
import { Box, Button, Container, Grid, Typography } from '@material-ui/core';


const App = () => {
  const [dealtCards, setDealtCards] = useState([])

  const goBack = () => {
    //set set to dealt cards false
    setDealtCards([])
  }

  //Call 3rd party API for cards
  const handleDealtCards = () => {
    axios.get(
      "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3"
    ).then((response) => {
      console.log(response.data.cards);
      // let tarotCard = response.data[0];
      // //change the name of tarot card to remove -
      // let fixedTarotName = tarotCard.name.replace(/-/g, " ")
      // console.log(fixedTarotName);
      setDealtCards(response.data.cards)
    })
  }

  useEffect(()=>{

  },[dealtCards])

    return (
      <div className="App">
        <Header/>
        <main>
          <Container>
            <Box className="card-area">
            {
              dealtCards.length > 0 ?
              <Grid container direction="row" alignContent="right">
                <Grid item direction="column">
                 <Button onClick={goBack}>
                    Back
                  </Button>
                </Grid>
               { 
                dealtCards.map((card)=> {
                  const randomNumber = 0
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
              <CardBack onDeal={handleDealtCards}/>
            }
            </Box>
          </Container>
        </main>
        <Footer/>
      </div>
    )
  }

export default App;
