import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './cart-item.css'

const CartItem = ({ product }) => {
    return (
        <Card className='cart-item' sx={{ maxWidth: 345, height:500 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                sx={{ objectFit: 'contain'}}
                image={product.images[0]}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
export default React.memo(CartItem)