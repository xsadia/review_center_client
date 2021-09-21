import { RelayEnvironmentProvider } from 'react-relay';
import { BrowserRouter } from 'react-router-dom';
import RelayEnviroment from './relay/RelayEnviroment';
import { Routes } from './routes/Routes';
import { GlobalStyle } from './styles/global';

function App() {

  return (
    <RelayEnvironmentProvider environment={RelayEnviroment}>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </RelayEnvironmentProvider>
  );
}

export default App;
