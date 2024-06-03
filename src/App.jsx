import { useEffect, useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import Footer from './components/Footer'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import { calculateBasket, setDrawer, deleteToBasket } from './redux/slices/basketSlice'

function App() {

  const { products, drawer, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(deleteToBasket({ id }));
  };


  useEffect(() => {
    dispatch(calculateBasket());
  }, [])

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer onClose={() => dispatch(setDrawer())} anchor='right' open={drawer}>
          {
            products && products.map((product) => {
              return (
                <div key={product.id}>
                  <div className='flex-row' style={{ padding: '20px' }}>
                    <img style={{ marginRight: '5px' }} src={product.image} width={50} height={50} />
                    <p style={{ width: '350px', marginRight: '5px' }}>{product.title}({product.count})</p>
                    <p style={{ fontWeight: 'bold', marginRight: '10px', width: '60 px' }}>{product.price}$</p>
                    <button onClick={() => handleRemove(product.id)} style={{ padding: '5px', borderRadius: '10px', backgroundColor: 'red', border: 'none', color: '#fff', width: '50px' }} className='delete-button'>Delete</button>
                  </div>
                </div>
              )
            })
          }
          <div>
            <p style={{ textAlign: 'center' }}>Total Amount: {totalAmount}</p>
          </div>
        </Drawer>
        <Footer />
      </PageContainer>
    </div>
  )
}

export default App
