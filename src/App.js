import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './index.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import CardBack from './components/CardBack.js';
import { Box, Button, Container, Grid, Typography, Card, CardContent, CardActionArea, createTheme } from '@material-ui/core';


const App = () => {
  const [dealtCards, setDealtCards] = useState([])
  const theme = createTheme()

  const goBack = () => {
    //set set to dealt cards false
    setDealtCards([])
  }

  //Call 3rd party API for cards
  const handleDealtCards = () => {
    axios.get(
      "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3"
    ).then((response) => {
      setDealtCards(response.data.cards)
    })
  }

  const checkInverted = () => {
    let x = Math.floor(Math.random() * 2)
    console.log(x)
    if(x){
      return true
    }
  }

    return (
      <div className="App">
        <Header/>
        <main>
          <Container>
            <Box className="card-area">
            {
              dealtCards.length > 0 ?
              <Grid container direction="row" alignContent="flex-start">
                <Grid item direction="column">
                 <Button onClick={goBack}>
                    Back
                  </Button>
                </Grid>
               { 
                dealtCards.map((card)=> {
                  //randomly generates a number to determine inverted or not
                  const inverted = checkInverted()
                  return(
                    <Grid container item direction="column" spacing={2} alignItems="stretch">
                      <Grid item alignItems="left" xs={12} className="card-grid-item">
                        <Card sx={{minWidth: 275}}>
                          <CardActionArea>
                            <CardContent>
                              <Typography align="left" component="h3">{card.name}</Typography>
                              {
                                inverted ?
                                  <Typography component="h3" align="left">Inverted</Typography>
                                :
                                  ""
                              }
                              <Typography>
                                { inverted ? 
                                    card.meaning_rev
                                    :
                                    card.meaning_up
                                }
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
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
