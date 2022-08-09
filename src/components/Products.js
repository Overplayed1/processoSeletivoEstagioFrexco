import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { addCart } from "../redux/actions";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Grid } from '@mui/material/';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { useDispatch } from "react-redux";

const Products = () => {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://safe-bastion-38016.herokuapp.com/https://www.fruityvice.com/api/fruit/all");

      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      }
    }

    getProducts();
  }, [])

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    )
  }

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.genus === cat);
    setFilter(updatedList);
  }

  const ShowProducts = () => {
    return (
      <>
      <Box sx={{ position: 'relative' }}>
        <Card sx={{ maxWidth: 200, marginTop: 5 }}>
          <Typography variant="body1">Filtre por gênero
            <CardActions>
              <Button sx={{color:'black'}} size="small" onClick={() => setFilter(data)}>All</Button>
              <Button sx={{color:'black'}} size="small" onClick={() => filterProduct("Citrus")}>Cítrico</Button>
            </CardActions>
          </Typography>
        </Card>
        </Box>
        {filter.map((product) => {
          const datas = [product.nutritions];
          console.log(datas)
          const dataImage = "/img/" + product.name + ".jpg";
          const listCarbohydrates = datas.map((d) => <li key={d.carbohydrates}>Carboidratos: {d.carbohydrates}</li>);
          const listProtein = datas.map((d) => <li key={d.protein}>Proteínas: {d.protein}</li>);
          const listFat = datas.map((d) => <li key={d.fat}> Gorduras: {d.fat}</li>);
          const listCalories = datas.map((d) => <li key={d.calories}>Calorias: {d.calories}</li>);
          const listSugar = datas.map((d) => <li key={d.sugar}>Açúcares: {d.sugar}</li>);
          return (
            <>
            
              <Grid container direction="row" alignItems="center" spacing={3} sx={{ paddingLeft: 5, paddingTop: 2 }} style={{background: 'FFFF80'}}>
                <Grid item xs={3}>
                  <Card sx={{ maxWidth: 500 }}>
                    {/* <div class="card h-100 text-center p-4" key={product.id}> */}
                    <CardMedia component="img" alt={product.name} src={dataImage} height="140" />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">{product.name}</Typography>
                      <Typography variant="body1" sx={{paddingRight: 8}} component="div">Informações Nutricionais: </Typography>

                      <Typography variant="body2" component="div"> {listCarbohydrates}</Typography>
                      <Typography variant="body2" component="div"> {listProtein}</Typography>
                      <Typography variant="body2" component="div"> {listFat}</Typography>
                      <Typography variant="body2" component="div"> {listCalories}</Typography>
                      <Typography variant="body2" component="div"> {listSugar}</Typography>
                    </CardContent>
                    <Button sx={{color:'black'}} component={Link} to={`/Products/${product.id}`} size="small">Veja mais!</Button>
                    <Button size="small" onClick={() => addProduct(product)}>
                      <AddShoppingCartIcon sx={{ color: 'black' }}>
                        </AddShoppingCartIcon>
                    </Button>
                    
                    <Button size="small" component={Link} to={`/ShoppingCart`}>
                      <ShoppingCartCheckoutIcon sx={{ color: 'black' }}>
                        </ShoppingCartCheckoutIcon>
                    </Button>                  
                  </Card>
                </Grid>
              </Grid>
            </>
          )
        })
        }
      </>
    )
  }

  return (
    <Card>
            <Typography variant="h2" sx={{ paddingTop: 10}} >Produtos</Typography>
        <div className="row justify-content-center"></div>
        {loading ? <Loading /> : <ShowProducts />}
    </Card>
  )
}

export default Products