import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
//import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
//import ProductsProvider from './context/products-context';
import './index.css';
import App from './App';
//import productReducer from './store/reducers/products';
import configureStore from './hooks-store/products-store';

configureStore();

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);


/* POMOCI REDUXU
const rootReducer = combineReducers({
  shop: productReducer
});
const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
*/

/*
POMOCI CONTEXTU
ReactDOM.render(
  <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsProvider>,
  document.getElementById('root')
);

*/