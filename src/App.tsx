import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataContextProvider } from "./Context/DataContext";
import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import Resumo from "./Pages/Resumo";
import Vendas from "./Pages/Vendas";
import Venda from "./Pages/Venda";
import "./Style.css";

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Resumo />}></Route>
              <Route path="/vendas" element={<Vendas />}></Route>
              <Route path="/vendas/:id" element={<Venda />}></Route>
            </Routes>
          </main>
        </div>
    </DataContextProvider>
  </BrowserRouter>
  );
}

export default App;
