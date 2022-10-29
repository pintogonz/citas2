import React from 'react'

const Cita = ({cita, eliminarCita}) => {
  return (
    <div className='cita'>
      <p>Fecha: <span> {cita.fecha} </span></p>
      <p>Paciente: <span> {cita.paciente} </span></p>
      <p>Cedula: <span> {cita.cedula} </span></p>
      <p>Teléfono: <span> {cita.telefono} </span></p>
      <p>Tipo de cita: <span> {cita.tipo} </span></p>
      <p>Forma de pago: <span> {cita.pago} </span></p>      

          
      <button
        className='button eliminar u-full-width'
        onClick={ () => eliminarCita(cita.id)}
      >Eliminar </button>
    </div>
  );
}

export default Cita;
