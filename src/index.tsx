import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createServer, Model } from 'miragejs';
import { GlobalStyle } from './styles/global';

createServer({
  models: {
    purchase: Model,
  },

  routes() {
    this.namespace = 'api';

    this.get('/purchases', () => {
      return this.schema.all('purchase')
    })

    this.post('/purchases', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('purchase', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);