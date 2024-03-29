import React from 'react';
import Header from '../src/components/header';
import { Route, Routes } from 'react-router-dom';

import ProductItem from './pages/ProductItem/ProductItem';
import ProductItems from './pages/ProductItems/ProductItems';
import Container from '../src/components/container';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<ProductItems />} />
        <Route path='/:category/:item' element={<ProductItem />} />
      </Routes>
    </Container>
  );
}

export default App;
