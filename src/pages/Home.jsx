import React, { useContext, useEffect } from 'react';
import CardsHero from '@/components/Cards';
import CardHero from '@/components/CardSelected';
import { Box, Button, Container, Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import axios from 'axios';
import Navbar from '@/components/Navbar';
import { UserContext } from '../contexts/UserContext';

export default () => {
  const { state, dispatch: userDispatch } = useContext(UserContext);

  const filteredHeroes = (name) => {
    userDispatch({
      type: 'setSearch',
      payload: {
        search: name
      }
    });
  }

  useEffect(() => {
    getHeroes();
  }, []);

  const getHeroes = async () => {
    axios.get('http://homologacao3.azapfy.com.br/api/ps/metahumans')
      .then((res) => {
        userDispatch({
          type: 'setHeroes',
          payload: {
            heroes: res.data
          }
        });
      })
      .catch((err) => console.log(err));
  };

  const handleCardClick = (hero) => {
    const selectedCards = state.selectedCards;
    if (selectedCards.includes(hero)) {
      userDispatch({
        type: 'setSelectedCards',
        payload: {
          selectedCards: selectedCards.filter((card) => card !== hero)
        }
      });
    } else {
      if (selectedCards.length < 2) {
        userDispatch({
          type: 'setSelectedCards',
          payload: {
            selectedCards: [...selectedCards, hero]
          }
        });
      }
    }
  };

  const handleRemoveCard = (hero) => {
    userDispatch({
      type: 'setSelectedCards',
      payload: {
        selectedCards: state.selectedCards.filter((card) => card !== hero)
      }
    });
  }

  const handleFight = () => {
    const selectedCards = state.selectedCards;
    if (selectedCards.length === 2) {
      const totalPowerStats1 = selectedCards[0].powerstats.power + selectedCards[0].powerstats.combat;
      const totalPowerStats2 = selectedCards[1].powerstats.power + selectedCards[1].powerstats.combat;

      if (totalPowerStats1 > totalPowerStats2) {
        userDispatch({
          type: 'setWinner',
          payload: {
            winner: selectedCards[0]
          }
        });
        userDispatch({
          type: 'setWinnerName',
          payload: {
            winnerName: selectedCards[0].name
          }
        });
      } else {
        userDispatch({
          type: 'setWinner',
          payload: {
            winner: selectedCards[1]
          }
        });
        userDispatch({
          type: 'setWinnerName',
          payload: {
            winnerName: selectedCards[1].name
          }
        });
      }
      userDispatch({
        type: 'setModalOpen',
        payload: {
          modalOpen: true
        }
      });
    }
  };

  const handleCloseModal = () => {
    userDispatch({
      type: 'setModalOpen',
      payload: {
        modalOpen: false
      }
    });
  }

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Navbar filteredHeroes={filteredHeroes} />
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Container sx={{ maxHeight: '100vh', maxWidth: 'xl', overflowY: 'auto', maxHeight: '80vh', '&::-webkit-scrollbar': { width: '10px' } }}>
          <Grid container spacing={2}>
            {state.heroes.filter((hero) =>
              hero.name.toLowerCase().includes(state.search.toLowerCase())).map((hero, index) => (
                <Grid item xs={12} sm={4} md={2} key={index}>
                  <CardsHero hero={hero} onClick={handleCardClick} />
                </Grid>
              ))}
          </Grid>
        </Container>
        <Container maxWidth='xs' sx={{ overflow: 'hidden' }}>
          <Typography variant='h3' sx={{ fontWeight: 'bold', textAlign: 'center' }}>Cards</Typography>
          <Box sx={{ marginTop: '20%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', position: 'relative', height: '200px' }}>
            {state.selectedCards.map((selectedHero, index) => (
              <CardHero onClick={handleRemoveCard} key={index} hero={selectedHero} />
            ))}
          </Box>
          <Button onClick={handleFight} sx={{ borderRadius: '10px', backgroundColor: '#000000', color: '#FFFFFF', marginLeft: '40%', marginTop: '20%' }}>Combate</Button>
        </Container>
      </Box>
      <Dialog open={state.modalOpen} onClose={handleCloseModal}>
        <DialogTitle sx={{ textAlign: 'center' }}>{state.winnerName && `${state.winnerName} venceu!`}</DialogTitle>
        <DialogContent sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          {state.winner && <CardHero onClick={handleCloseModal} winner={state.winner} hero={state.winner} />}
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button onClick={handleCloseModal} sx={{ borderRadius: '10px', border: '1px solid inheit' }}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
