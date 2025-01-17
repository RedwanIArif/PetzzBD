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


// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('md')]: {
//             width: '20ch',
//         },
//     },
// }));
// const Shop = ({ cart, products, setProducts, handleAddToCart, displayProdcuts, setDisplayProducts }) => {
//     const handleSearch = e => {
//         const searchText = e.target.value;
//         const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
//         // console.log(matchedProducts.length);
//         setDisplayProducts(matchedProducts);

//     };

//     return (
//         <Box sx={{ mt: 4 }}>
//             <Box
//                 sx={{
//                     width: 800,
//                     maxWidth: '100%',
//                     marginLeft: '20px'
//                 }}
//                 display="flex"
//                 justifyContent="center"
//                 alignItems="center"
//             >
//                 <TextField
//                     fullWidth
//                     onChange={handleSearch}
//                     id="fullWidth" />
//             </Box>
//             {/* 
//             <Search>
//                 <SearchIconWrapper>
//                     <SearchIcon />
//                 </SearchIconWrapper>
//                 <StyledInputBase
//                     placeholder="Search…"
//                     inputProps={{ 'aria-label': 'search' }}
//                 />
//             </Search> */}
            

//             <div className='shop-container'>
//                 <Container sx={{ mt: 1 }}>
//                     <Grid container justify="center" spacing={1}>
//                         {
//                             displayProdcuts.map(product => (<Grid item key={product.id} xs={10} sm={6} md={4} lg={4}>
//                                 <Product product={product} key={product.key}
//                                     handleAddToCart={handleAddToCart}
//                                 ></Product>
//                             </Grid>))
//                         }
//                     </Grid>
//                 </Container>

//                 <Card>
//                 <div class="card w-96 bg-base-100 shadow-xl">
//                     <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
//                         <div class="card-body">
//                             <h2 class="card-title">
//                             Shoes!
//                             <div class="badge badge-secondary">NEW</div>
//                             </h2>
//                             <p>If a dog chews shoes whose shoes does he choose?</p>
//                             <div class="card-actions justify-end">
//                             <div class="badge badge-outline">Fashion</div> 
//                             <div class="badge badge-outline">Products</div>
//                             </div>
//                         </div>
//                 </div>
//                 </Card>;
//                 <Card>
//                 {/* <button class="btn btn-primary">Button</button> */}
//                 </Card>;

//                 <div className="cart-container">
//                     <Cart cart={cart}></Cart>
//                 </div>
//             </div>
//         </Box>
//     );
// };

// export default Shop;

const Medicine = () => {
    return (
      <div className="pl-5 grid grid-cols-12">
        <div className="col-span-10">
          <div className="py-11 grid gap-4 grid-cols-2">
            {/*-------------------------------/ card------------------- */}
            <div class="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://i0.wp.com/www.poshaprani.com/wp-content/uploads/2022/04/kiwof.jpg?fit=800%2C800&ssl=1"
                  alt="Album"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Kiwof</h2>
                <p>Kiwof Cat Dewormer Chewable Tablets 1pcs</p>
                <p>
                  Available: 8 <small>items</small>
                </p>
                <p>Price: ৳200</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-warning">View</button>
                  <button class="btn btn-primary"> Buy Now </button>
                </div>
              </div>
            </div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://i0.wp.com/www.poshaprani.com/wp-content/uploads/2021/12/erina.jpg?w=500&ssl=1"
                  alt="Album"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Himalaya</h2>
                <p>Himalaya Erina EP Tick and Flea Control Shampoo 200 ml</p>
                <p>
                  Available: 6 <small>items</small>
                </p>
                <p>Price: ৳100</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-warning">View</button>
                  <button class="btn btn-primary"> Buy Now </button>
                </div>
              </div>
            </div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://www.allivet.com/dw/image/v2/BFKL_PRD/on/demandware.static/-/Sites-allivet-master/default/dw27718e57/51631/51631.jpg?sw=800&q=65"
                  alt="Album"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Simparica Trio</h2>
                <p>Simparica Trio Chewable Tablets for Dogs</p>
                <p>
                  Available: 9 <small>items</small>
                </p>
                <p>Price: ৳200</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-warning">View</button>
                  <button class="btn btn-primary"> Buy Now</button>
                </div>
              </div>
            </div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://www.allivet.com/dw/image/v2/BFKL_PRD/on/demandware.static/-/Sites-allivet-master/default/dwfb783024/25639/25639.jpg?sw=800&q=65"
                  alt="Album"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Apoquel</h2>
                <p>Apoquel Tablet for pets</p>
                <p>
                  Available: 6 <small>items</small>
                </p>
                <p>Price: ৳200</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-warning">View</button>
                  <button class="btn btn-primary"> Buy Now</button>
                </div>
              </div>
            </div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://www.allivet.com/dw/image/v2/BFKL_PRD/on/demandware.static/-/Sites-allivet-master/default/dw537bf7c3/32100/32100.jpg?sw=800&q=65"
                  alt="Album"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">CVetoryl Capsules</h2>
                <p>CVetoryl Capsules 30 Ct for pets</p>
                <p>
                  Available: 1 <small>items</small>
                </p>
                <p>Price: ৳100</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-warning">View</button>
                  <button class="btn btn-primary"> Buy Now</button>
                </div>
              </div>
            </div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://www.allivet.com/dw/image/v2/BFKL_PRD/on/demandware.static/-/Sites-allivet-master/default/dwfa4be41a/25902/25902.jpg?sw=800&q=65"
                  alt="Album"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Ketoconazole</h2>
                <p>Ketoconazole 200 mg Tablet for pets</p>
                <p>
                  Available: 7 <small>items</small>
                </p>
                <p>Price: ৳100</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-warning">View</button>
                  <button class="btn btn-primary"> Buy Now </button>
                </div>
              </div>
            </div>

            {/*-------------------------------/ card------------------- */}
          </div>
        </div>
        <div className="pt-12 pl-5 col-span-2 ">
          <div>
            <h2 className="text-2xl">Medicine List</h2>
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

export default Medicine;
