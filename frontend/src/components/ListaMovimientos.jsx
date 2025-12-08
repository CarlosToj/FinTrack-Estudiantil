function ListaMovimientos({ movimientos }) {
  if (!movimientos || movimientos.length === 0) {
    return <p>No hay movimientos registrados.</p>;
  }

  const totalIngresos = movimientos
    .filter((m) => m.tipo === "ingreso")
    .reduce((acc, m) => acc + m.monto, 0);

  const totalGastos = movimientos
    .filter((m) => m.tipo === "gasto")
    .reduce((acc, m) => acc + m.monto, 0);

  const balance = totalIngresos - totalGastos;

  return (
    <div className="lista-movimientos">
      <div className="resumen">
        <p><strong>Total ingresos:</strong> Q {totalIngresos.toFixed(2)}</p>
        <p><strong>Total gastos:</strong> Q {totalGastos.toFixed(2)}</p>
        <p><strong>Balance:</strong> Q {balance.toFixed(2)}</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Tipo</th>
            <th>Categoría</th>
            <th>Descripción</th>
            <th>Monto (Q)</th>
          </tr>
        </thead>
        <tbody>
          {movimientos.map((m) => (
            <tr key={m.id}>
              <td>{m.fecha}</td>
              <td className={m.tipo}>{m.tipo}</td>
              <td>{m.categoria}</td>
              <td>{m.descripcion || "-"}</td>
              <td>Q {m.monto.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaMovimientos;
