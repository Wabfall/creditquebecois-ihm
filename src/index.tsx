import React from 'react';
import ReactDOM from 'react-dom/client';
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from "./banque/BanqueHome";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ChakraProvider>
            <ColorModeScript initialColorMode="dark"/>
            <HomePage></HomePage>
        </ChakraProvider>,
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
