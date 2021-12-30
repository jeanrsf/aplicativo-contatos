import Login from './paginas/login';
import Cadastro from './paginas/cadastro';
import Home from './paginas/home';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { AutenticacaoProvedor } from "./contextos/AutenticacaoContexto";
import { DadosProvedor } from "./contextos/DadosUsuarios";
import { useDadosAutenticacao } from "./hooks/useDadosAutenticacao";

const RotasProtegidas = (props) => {
  const { token } = useDadosAutenticacao();

  return <Route render={() => (token ? props.children : <Redirect to="/" />)}></Route>;
};

function App() {
  return (
    <div className="App">
      <AutenticacaoProvedor>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/cadastro" exact component={Cadastro} />
            <RotasProtegidas>
              <DadosProvedor>
                <Route path="/home" component={Home} />
              </DadosProvedor>
            </RotasProtegidas>
          </Switch>
        </BrowserRouter>
      </AutenticacaoProvedor>
    </div>
  );
}

export default App;
