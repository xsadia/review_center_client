import { Suspense } from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import { BrowserRouter } from 'react-router-dom';
import RelayEnviroment from './relay/RelayEnviroment';
import { Routes } from './routes/Routes';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnviroment}>
      <BrowserRouter>
        <Suspense fallback={'...loading'}>
          <Routes />
        </Suspense>
        <GlobalStyle />
      </BrowserRouter>
    </RelayEnvironmentProvider>
  );
}

export default App;
