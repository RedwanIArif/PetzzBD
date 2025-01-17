import { Search } from '@mui/icons-material';
import { Container, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakeDb';
import Product from '../Product/Product';
import Cart from './Cart/Cart';
import './shop.css';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


import Card from 'react-card-component';


const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
const Shop = ({ cart, products, setProducts, handleAddToCart, displayProdcuts, setDisplayProducts }) => {
    const handleSearch = e => {
        const searchText = e.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        // console.log(matchedProducts.length);
        setDisplayProducts(matchedProducts);

    };

    return (
        <Box sx={{ mt: 4 }}>
            <Box
                sx={{
                    width: 800,
                    maxWidth: '100%',
                    marginLeft: '20px'
                }}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <TextField
                    fullWidth
                    onChange={handleSearch}
                    id="fullWidth" />
            </Box>
            {/* 
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search> */}
            

            <div className='shop-container'>
                <Container sx={{ mt: 1 }}>
                    <Grid container justify="center" spacing={1}>
                        {
                            displayProdcuts.map(product => (<Grid item key={product.id} xs={10} sm={6} md={4} lg={4}>
                                <Product product={product} key={product.key}
                                    handleAddToCart={handleAddToCart}
                                ></Product>
                            </Grid>))
                        }
                    </Grid>
                </Container>

                <Card>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">
                            Shoes!
                            <div class="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                            <div class="badge badge-outline">Fashion</div> 
                            <div class="badge badge-outline">Products</div>
                            </div>
                        </div>
                </div>
                </Card>;
                <Card>
                {/* <button class="btn btn-primary">Button</button> */}
                </Card>;

                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </Box>
    );
};

export default Shop;
/*
const Shop = ({ cart, products, setProducts, handleAddToCart, displayProdcuts, setDisplayProducts }) => {
        const handleSearch = e => {
        const searchText = e.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        // console.log(matchedProducts.length);
        setDisplayProducts(matchedProducts);

    };
    return (
        <div className='pl-5 grid grid-cols-12'>
                <div className='col-span-10'>
                   <div className='py-11 grid gap-4 grid-cols-3'>
                     {/*-------------------------------/ card------------------- *}
                        <div class="card lg:card-side 	base-500 shadow-xl">
                            <figure><img src="https://www.saffron.com.bd/images/detailed/200/5_5s41-8f.png" alt="Album"/></figure>
                            <div class="card-body">
                                <h2 class="card-title">Lara Cat Food Junior</h2>
                                <p>Lara Cat Food is a delicious treat for your cat</p>
                                <p>Price: ৳200</p>
                                <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="card lg:card-side base-500 shadow-xl">
                            <figure><img src="https://i0.wp.com/www.poshaprani.com/wp-content/uploads/2019/08/dreamies-cat-treats-tantalising-turkey-60gm.png?fit=1280%2C1500&ssl=1" alt="Album"/></figure>
                            <div class="card-body">
                                <h2 class="card-title">Dreamies</h2>
                                <p>Made from natural material and safe for you and your pets</p>
                                <p>Price: ৳300</p>
                                <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="card lg:card-side bg-base-100 shadow-xl">
                            <figure><img src="https://i0.wp.com/www.poshaprani.com/wp-content/uploads/2019/09/whiskas-junior-pouch-mackerel-kitten-85gm.png?fit=1280%2C1500&ssl=1" alt="Album"/></figure>
                            <div class="card-body">
                                <h2 class="card-title">Whiskas Junior</h2>
                                <p>WHISKAS Junior 2-12 months cat food is specially formulated for kittens 2-12 months old.</p>
                                <p>Price: ৳400</p>
                                <div class="card-actions justify-end">
                                <button onClick={Cart()} class="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="card lg:card-side bg-base-100 shadow-xl">
                            <figure><img src="https://i0.wp.com/www.poshaprani.com/wp-content/uploads/2019/09/drools-adult-chicken-and-egg-1.2.png?w=1280&ssl=1" alt="Album"/></figure>
                            <div class="card-body">
                                <h2 class="card-title">Drools</h2>
                                <p>Drools Adult Dog Food Chicken And Egg.</p>
                                <p>Price: ৳250</p>
                                <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="card lg:card-side bg-base-100 shadow-xl">
                            <figure><img src="https://i0.wp.com/www.poshaprani.com/wp-content/uploads/2019/06/pedigree-adult-dog-food-chicken-vegetables-10-kg.png?fit=1280%2C1500&ssl=1" alt="Album"/></figure>
                            <div class="card-body">
                                <h2 class="card-title">Pedigree</h2>
                                <p>Pedigree Adult Dog Food Chicken & Vegetables (10 Kg)</p>
                                <p>Price: ৳500</p>
                                <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="card lg:card-side bg-base-100 shadow-xl">
                            <figure><img src="https://i0.wp.com/www.poshaprani.com/wp-content/uploads/2019/06/cp-classic-adult-dog-food-chicken-flavour-2-kg.png?fit=1280%2C1500&ssl=1" alt="Album"/></figure>
                            <div class="card-body">
                                <h2 class="card-title">CP Classic</h2>
                                <p>CP Classic Adult Dog Food Chicken Flavour (2 Kg)</p>
                                <p>Price: ৳200</p>
                                <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="card lg:card-side bg-base-100 shadow-xl">
                            <figure><img src="https://i0.wp.com/www.poshaprani.com/wp-content/uploads/2019/08/nova-mini-pallet-fish-food-100gm.png?fit=1280%2C1500&ssl=1" alt="Album"/></figure>
                            <div class="card-body">
                                <h2 class="card-title">Nova</h2>
                                <p>Nova Mini Pallet Fish Food (100gm)</p>
                                <p>Price: ৳100</p>
                                <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="card lg:card-side bg-base-100 shadow-xl">
                            <figure><img src="https://i0.wp.com/www.poshaprani.com/wp-content/uploads/2019/08/osaka-green-1-fish-food-100gm.png?fit=1280%2C1500&ssl=1" alt="Album"/></figure>
                            <div class="card-body">
                                <h2 class="card-title">Osaka</h2>
                                <p>Osaka Green-1 Fish Food (100gm).</p>
                                <p>Price: ৳100</p>
                                <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="card lg:card-side bg-base-100 shadow-xl">
                            <figure><img src="https://i0.wp.com/www.poshaprani.com/wp-content/uploads/2019/08/optimum-aquarium-fish-food-100gm.png?fit=1280%2C1500&ssl=1" alt="Album"/></figure>
                            <div class="card-body">
                                <h2 class="card-title">Optimum</h2>
                                <p>Optimum Aquarium Fish Food (100gm)</p>
                                <p>Price: ৳150</p>
                                <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>

                        {/*-------------------------------/ card------------------- *}
                   </div>
                </div>
            <div className='pt-12 pl-5 col-span-2 '>
                <div >
                    <h2 className='text-2xl'>Order List</h2>
                    <p>Items Ordered : 0</p>
                    <p>Total: 0.00</p>
                    <p>Shipping: 0</p>
                    <p>Tax: 0.00</p>
                    <p>Grand Total: 0.00</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;
*/