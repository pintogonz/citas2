import React, {Fragment, useState, useEffect} from "react";
import Cita from "./components/Cita";
import Formulario from "./components/formularios";

function App() {
  
  // Citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  }
  
  // Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  // Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));

    if(citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
}, [citas] );

  // funcion para que tome las citas actuales y agregue la nueva

  const crearCita = cita => {
    guardarCitas([ ...citas, cita ]);
  }

  // funcion que elimina una cita por su id
  
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id );
    guardarCitas(nuevasCitas);
 }

  // Mensajes que no haya citas
  const titulo = citas.length === 0 ? "No hay Citas" : "Citas Pendientes";

  return (
    
    <Fragment>
        <h1> Administrador de Pacientes</h1>

        <div className="container">
          <div className="row">
            <div className="one-half column" >
              <Formulario 
                  crearCita={crearCita}
              />
            </div>
            <div className="one-half column" >
                <h2>{titulo}</h2>
                {citas.map(cita =>(
                  <Cita
                    key={cita.id}  
                    cita={cita}
                    eliminarCita={eliminarCita}
                  />
                ))

                }
            </div>

          </div>
        </div>

    </Fragment>
  );
}

export default App;
