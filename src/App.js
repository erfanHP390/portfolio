import logo from './logo.svg';
import './App.css';
import { useRoutes } from 'react-router-dom';
import ContextProvider from "./Context/ContextProvider";
import routes from './routes';

function App() {

  const router = useRoutes(routes)

  return (
    <ContextProvider>
    {
      router
    }
    </ContextProvider>
  );
}

export default App;
