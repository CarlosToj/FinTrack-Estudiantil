import { useState } from "react";

function FormMovimiento({ onAgregar }) {
  const [tipo, setTipo] = useState("gasto");
  const [categoria, setCategoria] = useState("");
  const [monto, setMonto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!categoria || !monto || !fecha) {
      alert("Por favor completa categoría, monto y fecha.");
      return;
    }

    const nuevoMovimiento = {
      tipo,
      categoria,
      monto: parseFloat(monto),
      descripcion,
      fecha,
    };

    onAgregar(nuevoMovimiento);

    setCategoria("");
    setMonto("");
    setDescripcion("");
    setFecha("");
    setTipo("gasto");
  };

  return (
    <form className="form-movimiento" onSubmit={handleSubmit}>
      <div className="campo">
        <label>Tipo</label>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="gasto">Gasto</option>
          <option value="ingreso">Ingreso</option>
        </select>
      </div>

      <div className="campo">
        <label>Categoría</label>
        <input
          type="text"
          placeholder="Comida, Transporte, Salario..."
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Monto (Q)</label>
        <input
          type="number"
          step="0.01"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Descripción</label>
        <input
          type="text"
          placeholder="Detalle opcional"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Fecha</label>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>

      <button className="btn-guardar">Guardar movimiento</button>
    </form>
  );
}

export default FormMovimiento;
