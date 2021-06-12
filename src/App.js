import {useState, useEffect} from 'react'
import Formulario from './components/Formulario'; 
import Cita from './components/Cita'; 

function App() {
  const[citas, setCitas] = useState([])
  // Citas en el LOcalStorage
  //EStado de todas las citas
  

  console.log(citas)

  useEffect(()=>{
      localStorage.setItem('citas',JSON.stringify(citas))
    },[citas]);

  //Funcion que tome todas las citas actuales y agregue las nuevas

  const crearCita = cita =>{
    setCitas([
      ...citas,
      cita
    ])
  };

  //Funcion encargada de eliminar las citas
  const eliminarCita = id =>{
    const nuevasCitas = citas.filter(cita=> cita.id !== id)
    setCitas(nuevasCitas)
  }

  const titulo = citas.length === 0 ?'No hay citas': 'Administrar citas'
  return (
    <div>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
            crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita=>(
              <Cita
                cita={cita}
                key={cita.id}
                eliminarCita ={eliminarCita}
                >
              </Cita>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
