# Prepare

Before doing the integration, we make some preparations, including:

- Store front-end (client) & back-end (server) in one folder

## Server Side

- Install [echo/middleware]

  ```bash
  go get -u github.com/labstack/echo/v4/middleware
  ```

- Import and Setup the echo/middleware package for CORS

  > File: `main.go`

  - Import package

    ```go
    import (
      "dumbmerch/database"
      "dumbmerch/pkg/mysql"
      "dumbmerch/routes"
      "fmt"

      "github.com/joho/godotenv"
      "github.com/labstack/echo/v4"
      "github.com/labstack/echo/v4/middleware"
    )
    ```

  - Setup for CORS

    ```go

    e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
      AllowOrigins: []string{"*"},
      AllowMethods: []string{echo.GET, echo.POST, echo.PATCH, echo.DELETE},
      AllowHeaders: []string{"X-Requested-With", "Content-Type", "Authorization"},
    }))

    ```

## Client Side

### Axios

- Install Package Axios
  <br>
  A promise based HTTP client for the browser and Node.js

  ```javascript
  npm install axios
  ```

- Create API config in client side `client/src/config/api.jsx`

  ```javascript
  import axios from 'axios';

  // Create base URL API
  export const API = axios.create({
    baseURL: 'http://localhost:5000/api/v1/',
  });

  // Set Authorization Token Header
  export const setAuthToken = (token) => {
    if (token) {
      API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete API.defaults.headers.common['Authorization'];
    }
  };
  ```

### React Query

- Install Package react-query

  ```bash
  npm i react-query
  ```

- Init QueryCLient and QueryClientProvider `client/src/main.jsx`

  - Import QueryClient and QueryClientProvider :

    ```javascript
    import { QueryClient, QueryClientProvider } from "react-query";
    ```

  - Init Client :

    ```javascript
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
    ```
