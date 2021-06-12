import {useState} from 'react';
import {v4 as uuidv4} from 'uuid'


const Formulario = ({crearCita}) => {

    //Crear el estado de las citas
    const [cita, setCita] = useState({
        mascota: '',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:'',
    })

    //Creando el estado del error
    const [error, setError] = useState(false)

    //Nuevo Estado para dar msj al usuario de que sus datos se guardaron bien

    const[mensajeEnviado, setMensajeEnviado] = useState(false)

    const handlerState = e =>{
        setCita({
            //Nos traemos una copia con los puntos
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    //Extraer valores de la citas
    const {mascota, propietario, fecha, hora, sintomas} = cita;
    
    //Cuando el usuario presione agregar cita
    const submitCita = e =>{
        e.preventDefault();
        //Validar

        if(mascota.trim()==='' || propietario.trim()==='' || fecha.trim()==='' ||hora.trim()==='' ||sintomas.trim()==='' )
        {
            setError(true);
            return;
        }
        setError(false);
        //Agregar id
        cita.id = uuidv4(); 


        //Crear una cita
        crearCita(cita)

        //Mostramos msj exito
        setMensajeEnviado(true)

        //Mostramos msj sin  exito
        setMensajeEnviado(true)

        //LImpiar Formulario
        setCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })


        console.log('enviando formulario')
    }
    
    return(
      <>
        <h2>Crear Cita</h2>  
        {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
        <form
            onSubmit={submitCita}
        >
            <label>
                Nombre de Mascota
            </label>
            <input
                type="text"
                name="mascota"
                placeholder="Nombre Mascota"
                className="u-full-width"
                value={mascota}
                onChange={handlerState}
            />
            <label>
                Nombre del Dueño
            </label>
            <input
                type="text"
                name="propietario"
                placeholder="Nombre del dueño de la mascota"
                className="u-full-width"
                value={propietario}
                onChange={handlerState}
            />
            <label>
                Fecha
            </label>
            <input
                type="date"
                name="fecha"
                className="u-full-width"
                value={fecha}
                onChange={handlerState}
            />
            <label>Hora Ingreso</label>
            <input 
                 type="time" 
                 name="hora"
                 className="u-full-width"
                 value={hora}
                 onChange={handlerState}
            />
            <label>Síntomas</label>
            <textarea 
                name="sintomas"
                className="u-full-width"
                value={sintomas}
                placeholder="¿Cuales son los síntomas?"
                onChange={handlerState}
            ></textarea>
            <button
                type="submit"
                className="u-full-width button-primary"
            >
                Agregar Cita
            </button>
        </form>
    </>
  );
};

export default Formulario;

  