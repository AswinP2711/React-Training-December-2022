import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Product from './components/products';
import MyForm from './components/addProduct';
import Validation from './components/validation';
import ForProps from './components/forProps';
import Refs from './components/refs';
import ListTable from './components/prodTable';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MyForm /> */}
    <Product />
    {/* <Validation/> */}
    {/* <ForProps/> */}
    {/* <Refs/> */}
    {/* <ListTable/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
