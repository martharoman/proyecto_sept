import React from 'react';

const Fechita = () => {
  const hoy = new Date();
  const fecha = hoy.toLocaleDateString();

  return (
    <div>
      <p>{fecha}</p>
    </div>
  );
};

export default Fechita;