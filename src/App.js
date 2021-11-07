import Login from './paginas/login';
import Cadastro from './paginas/cadastro';
import Home from './paginas/home';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { AutenticacaoProvedor } from './contextos/AutenticacaoContexto';
import { DadosProvedor } from './contextos/DadosUsuarios'


function App() {

  return (
    <div className="App">
      <AutenticacaoProvedor>
        <Router>
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/login" component={Login} />
          <DadosProvedor>
            <Route path="/home" component={Home} />
          </DadosProvedor>
        </Router>
      </AutenticacaoProvedor>
    </div>
  );
}

export default App;
