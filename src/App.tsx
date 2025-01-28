import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import Resumo from "./Pages/Resumo";
import Vendas from "./Pages/Vendas";
import { DataContextProvider } from "./Context/DataContext";
import "./Style.css";

function App() {
  return (
    <DataContextProvider>
    <div className="container">
      <Sidenav />
      <main>
        <Header />
        <Resumo />
        <Vendas />
      </main>
    </div>
  </DataContextProvider>
  );
}

export default App;
