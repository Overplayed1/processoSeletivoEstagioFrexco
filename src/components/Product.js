import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/actions";
import { Link, useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import Skeleton from "react-loading-skeleton";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);


  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://safe-bastion-38016.herokuapp.com/https://www.fruityvice.com/api/fruit/${id}`);
      setProduct(await response.json());
      setLoading(false);


    };
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const dataImage = "/img/" + product.name + ".jpg"


  const ShowProduct = () => {
    return (
      <>
        <Card>
          <Box sx={{ }}>
            <CardMedia
              component="img"
              alt={product.name}
              height="500"
              image={dataImage}
            />
          </Box>
          <CardContent >
            <Typography gutterBottom variant="body2" component="div"> Família: {product.family} </Typography>
            <Typography gutterBottom variant="h3" component="div"> {product.name} </Typography>
            <Typography gutterBottom variant="body1" component="div"> $PREÇO {product.price} </Typography>
          </CardContent>
          <CardActions>
          <Button size="small" onClick={() => addProduct(product)}>
                      <AddShoppingCartIcon sx={{ color: 'black' }}>
                        </AddShoppingCartIcon>
                    </Button>
                    
                    <Button size="small" component={Link} to={`/ShoppingCart`}>
                      <ShoppingCartCheckoutIcon sx={{ color: 'black' }}>
                        </ShoppingCartCheckoutIcon>
                        </Button> 
          </CardActions>
        </Card>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
}