
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './components/SignIn/index';
import { Header } from './components/Header/index';
import PurchasesTable from './components/Purchases/index';
import { Summary } from './components/Summary/index';
import { PurchasesProvider } from './PurchasesContext';
import { Dashboard } from './components/Dashboard';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <PurchasesProvider>
        <ChakraProvider>
          <Routes />
        </ChakraProvider>
      </PurchasesProvider>
    </BrowserRouter>
  );
}

export default App;
