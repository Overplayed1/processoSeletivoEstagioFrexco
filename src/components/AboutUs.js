import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const AboutUs = () => {
  return (

    <>
      <Card>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="979"
            image="/img/hortifruti.png" />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              bgcolor: 'rgba(0, 0, 0, 0.54)',
              color: 'white',
              padding: '10px',
            }}
          >
            <Typography variant="h2">Hortifruti Vitamina de Banana</Typography>
            <Typography variant="h5">Desde 2022 oferecendo as melhores frutas</Typography>
            <Typography variant="body2">Seja bem vindo ao site do melhor Hortifruti do Brasil. Aqui, temos a maior variedade de frutas que um Hortifruti pode oferecer, com a melhor qualidade também!!! Confira nossos produtos, pois se você acha nossas frutas deliciosas, é porquê você ainda não viu o preço!!</Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default AboutUs
