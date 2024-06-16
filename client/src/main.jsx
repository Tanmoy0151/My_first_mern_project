import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from "./store.js"
import { SocketProvider } from './context/SocketContext.jsx'; // Use .jsx if you renamed the file

ReactDOM.render(
  <Provider store={store}>
    <SocketProvider>
      <App />
    </SocketProvider>
  </Provider>,
  document.getElementById('root')
);