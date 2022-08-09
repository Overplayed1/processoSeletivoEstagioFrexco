import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PaymentsIcon from '@mui/icons-material/Payments';
import Box from '@mui/material/Box';
import { addCart, delCart } from "../redux/actions";
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActions } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const ShoppingCart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };

  const emptyCart = () => {
    return (
      <Box sx={{ position: 'relative' }}>
        <Card>
          <CardContent>
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3}>
              <Typography variant="h3" sx={{ paddingLeft: 5, paddingTop: 10 }}>Seu carrinho está vazio</Typography>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    );
  };
  const cartItems = (product) => {
    return (
      <>
        <Box sx={{ position: 'relative' }}>
          <Grid container direction="row" alignItems="center" spacing={3} sx={{ paddingLeft: 5, paddingTop: 10 }} style={{ background: 'FFFF80' }}>
            <Grid item xs={3}>
              <Card sx={{ maxWidth: 500 }}>

                <CardMedia component="img" src={"/img/" + product.name + ".jpg"} alt={product.name} height="200" width="180" />
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">{product.name}</Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.qty} X R${product.price}preço = R$
                    {product.qty * product.price}
                  </Typography>
                  <Button size="small" onClick={() => handleDel(product)}
                  >
                    <RemoveIcon sx={{ color: 'black' }} />
                  </Button>
                  <Button
                    size="small"
                    onClick={() => handleAdd(product)}
                  >
                    <AddIcon sx={{ color: 'black' }} />
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  };
  const buttons = () => {
    return (
      <>
        <Card>
          <CardContent>
            <Button size="small" component={Link}
              to="/Checkout"
            >
              <PaymentsIcon sx={{ color: 'black' }}>
                <Typography variant="h5">Prossiga para o pagamento</Typography>
              </PaymentsIcon>
            </Button>
          </CardContent>
        </Card>
      </>
    );
  };

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttons()}
    </div>
  );
};

export default ShoppingCart;