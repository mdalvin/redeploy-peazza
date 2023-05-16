import React from 'react'
import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero'
import Products from './components/Products'
import { productData, productDataTwo } from './components/Products/data';

function App() {
  return (
    <>
      <Hero/>
      <Products heading='Choose your favorite' data={productData}/>
      <Feature/>
      <Products heading='Crave for some sweetness?' data={productDataTwo}/>
      <Footer/>
    </>
  );
}

export default App;
