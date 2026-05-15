import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // You can add basic styling here
import { WalletConnectionProvider } from './components/WalletConnectionProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WalletConnectionProvider>
      <App />
    </WalletConnectionProvider>
  </React.StrictMode>,
);