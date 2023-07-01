import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContextProvider } from './context/userContext';
// import QueryClient, QueryClientProvider here 

// favicon
import Favicon from './assets/DumbMerch.png';
const favicon = document.getElementById('idFavicon');
favicon.setAttribute('href', Favicon);

// code here to create new initialization QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
        {/* wrap the app component inside the QueryClientProvider component which has the client attribute here  */}
        <App />
    </UserContextProvider>
  </React.StrictMode>,
)

