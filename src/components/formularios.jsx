import React, {Fragment, useState} from 'react'
import shortid from "shortid";

const Formulario = ({crearCita}) => {
  
  // Crea un hook para el estado de los datos de la cita  
  const [cita, actualizarCita] = useState({
    paciente: "",
    cedula: "",
    telefono: "",
    fecha: "",
    tipo: "",
    pago: ""    
  });
  
  const [error,actualizarError] = useState(false);


  // funcion que se ejecuta mientras el usuario escribe en las opciones
  const actualizarState = e => {
    actualizarCita({
        ...cita,
        [e.target.name]: e.target.value
    })
  }

  // Extraer Datos de los valores
  const { paciente, cedula, telefono, fecha, tipo, pago} = cita;

  //Cuando el usuario presiona agregar cita
  const submitCita = e => {
    e.preventDefault(); // evita enviar el formulario por el metodo get por default

    // Validar que todos los campos esten llenos
    if (paciente.trim() === "" ||
        cedula.trim() === "" ||
        telefono.trim() === "" ||
        fecha.trim() === "" ||
        tipo.trim() === "" ||
        pago.trim() === "" )
    {
        actualizarError(true);
        return;
    }

    // Eliminar el mensaje de advertencia si se solventa el error
    actualizarError(false);

    // Asignar un ID
    cita.id=shortid.generate();  

    // Crear la Cita
    crearCita(cita);

    // Reiniciar el formulario
    actualizarCita({
        paciente: "",
        cedula: "",
        telefono: "",
        fecha: "",
        tipo: "",
        pago: ""
    })

  }


  return (
    <div>
      <Fragment>
        <h2>Crear Cita</h2>

        {error ? <p className='alerta-error'> Llene todos los campos</p> : null}


        <form
            onSubmit={submitCita}
        >
            <label>Datos del Paciente</label>
            <input
                type="text"
                name="paciente"
                className='u-full-width'
                placeholder='Nombre del paciente...'
                onChange={actualizarState}
                value={paciente}
            />
            <input
                type="number"
                name="cedula"                
                className='u-full-width'
                placeholder='Cedula de identidad...'
                onChange={actualizarState}
                value={cedula}
            />
            <input
                type="number"
                name="telefono"                
                className='u-full-width'
                placeholder='Numero de Telefóno...'
                onChange={actualizarState}
                value={telefono}
            />
            <label>Fecha de consulta</label>
            <input
                type="date"
                name="fecha"                               
                className='u-full-width'
                onChange={actualizarState}
                value={fecha}                
            />

            <label>Tipo de Cita: </label>
            <select className='u-full-width' name="tipo" onChange={actualizarState} value={tipo}>
                <option> -- Selecciona una opción -- </option>
                <option>Ecografía</option>
                <option>Consulta</option>
                <option>Citología</option>
                <option>Citología y consulta</option>
            </select>

            <label>Forma de Pago: </label>
            <select className='u-full-width' name="pago" onChange={actualizarState} value={pago}>
                <option> -- Selecciona una opción -- </option>
                <option>Bolívares</option>
                <option>Divisas</option>
                <option>Bolívares y Divisas</option>                
            </select>

            <button
                type="submit"
                className='u-full-width button-primary'
                
            >Agregar Cita</button>
                
        </form>
      </Fragment>      
    </div>
  )
}

export default Formulario;
