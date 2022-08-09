import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { Grid } from '@mui/material/';
import {Link} from 'react-router-dom';

const Home = () => {
  return (

    <>
      <Card>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="600"
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
            <Typography variant="h5">Hortifruti Vitamina de Banana</Typography>
            <Typography variant="body2">Seja bem vindo ao site do melhor Hortifruti do Brasil. Aqui, temos a maior variedade de frutas que um Hortifruti pode oferecer, com a melhor qualidade também!!! Confira nossos produtos, pois se você acha nossas frutas deliciosas, é porquê você ainda não viu o preço!!</Typography>
          </Box>
        </Box>
      </Card>
      <Grid container direction="row"
        justifyContent="center"
        alignItems="center" spacing={3} sx={{ paddingLeft: 5, paddingTop: 2, paddingBottom: 0.5 }} style={{background: 'linear-gradient(to bottom, #FFFFFF, #FFFF80)' }}>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Maçã"
              height="140"
              image="https://conteudo.imguol.com.br/c/entretenimento/32/2018/01/18/maca-1516308281068_v2_900x506.jpg.webp" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Maçã
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A maçã é uma fruta de origem asiática e há mais de sete mil espécies diferentes, cada uma com características específicas, mas com propriedades nutricionais semelhantes. Saborosa e ...
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={Link} to={`/Products/6`} size="small">Saiba Mais</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Pera"
              height="140"
              image="https://conteudo.imguol.com.br/c/entretenimento/4e/2020/03/23/pera-1584989626321_v2_900x506.jpg.webp" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pera
              </Typography>
              <Typography variant="body2" color="text.secondary">
              As peras são frutas que se destacam pelo sabor doce e suave. Bastante fáceis de serem encontradas nos supermercados e feiras, elas normalmente possuem cascas que variam entre as tonalidades verde e ...
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={Link} to={`/Products/4`} size="small">Saiba Mais</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Banana"
              height="140"
              image="https://static.tuasaude.com/media/article/k3/zz/beneficios-da-banana_13513.webp" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Banana
              </Typography>
              <Typography variant="body2" color="text.secondary">
              A banana é uma fruta que traz diversos benefícios para a saúde, como fornecer energia para o corpo, reduzir a pressão arterial, evitar cãibras musculares e favorecer o aumento da serotonina, combatendo a ...
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={Link} to={`/Products/1`} size="small">Saiba Mais</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Laranja"
              height="140"
              image="https://conteudo.imguol.com.br/c/entretenimento/ac/2017/12/11/laranja-1513012240348_v2_900x506.jpg.webp" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Laranja
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Seu sabor costuma ser doce ou levemente ácido (mais azedo), de acordo com o tipo da laranja. Além de ser rica em vitamina C, a fruta possui flavonoides e diversos nutrientes importantes para ...
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={Link} to={`/Products/2`} size="small">Saiba Mais</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>

  );
};

export default Home
