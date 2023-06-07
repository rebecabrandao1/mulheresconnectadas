import React from "react";
import { Link } from "react-router-dom";
import { Card, Typography, Button, CardMedia, CardContent, CardActions, Grid } from "@mui/material";
import site from '../assets/site.PNG';
import programacao from '../assets/programacao.jpg';

const Game = ({ text }) => {
  const handleLinkClick = () => {
    window.open("https://mulheresconectadasgame.web.app/", "_blank");
  };
  const handleLinkClick1 = () => {
    window.open("https://mulheresconectadas.com.br/", "_blank");
  }

  return (
    <div>
      <Grid container spacing={2} sx={{justifyContent: 'flex-start'} }>
        <Grid item xs={12} sm={6}>
          <Card sx={{ maxWidth: 400, margin: '0 auto' }}>
            <CardMedia
              component="img"
              sx={{ width: '50%', objectFit: 'cover', mb: -2 }}
              src={site} 
              alt="Mulheres Conectadas"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Programação básica
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="secondary"
                onClick={handleLinkClick}
                style={{ textDecoration: 'underline', cursor: 'pointer', color: '#ab4f9d' }}
              >
                Aprendendo programação básica com o jogo Mulheres Conectadas
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ maxWidth: 400, margin: '0 auto' }}>
            <CardMedia
              component="img"
              sx={{ width: '50%', objectFit: 'cover', mb: -2 }}
              src={site} // Substitua pelo URL ou caminho para a imagem desejada
              alt="Mulheres Conectadas"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                  Nosso site
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="secondary"
                onClick={handleLinkClick1}
                style={{ textDecoration: 'underline', cursor: 'pointer', color: '#ab4f9d' }}
              >
                Conheça o nosso site
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Game;

