import { useState } from "react";
import FormMovimiento from "./components/FormMovimiento";
import ListaMovimientos from "./components/ListaMovimientos";

function App() {
  const [movimientos, setMovimientos] = useState([
    {
      id: 1,
      categoria: "Comida",
      tipo: "gasto",
      monto: 35.5,
      descripcion: "Almuerzo en la universidad",
      fecha: "2024-12-05",
    },
    {
      id: 2,
      categoria: "Salario",
      tipo: "ingreso",
      monto: 1200,
      descripcion: "Pago quincenal",
      fecha: "2024-12-01",
    },
  ]);

  const agregarMovimiento = (nuevoMovimiento) => {
    setMovimientos((prev) => [
      ...prev,
      { id: prev.length + 1, ...nuevoMovimiento },
    ]);
  };

  return (
    <div className="app-container">
      <header>
        <h1>FinTrack Estudiantil</h1>
        <p>Control simple de tus ingresos y gastos.</p>
      </header>

      <main className="layout">
        <section className="panel">
          <h2>Registrar movimiento</h2>
          <FormMovimiento onAgregar={agregarMovimiento} />
        </section>

        <section className="panel">
          <h2>Movimientos recientes</h2>
          <ListaMovimientos movimientos={movimientos} />
        </section>
      </main>
    </div>
  );
}

export default App;
