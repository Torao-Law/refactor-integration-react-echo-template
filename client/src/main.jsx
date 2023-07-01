import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContextProvider } from './context/userContext';
import { QueryClient, QueryClientProvider } from 'react-query'

// favicon
import Favicon from './assets/DumbMerch.png';
const favicon = document.getElementById('idFavicon');
favicon.setAttribute('href', Favicon);

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </UserContextProvider>
  </React.StrictMode>,
)

