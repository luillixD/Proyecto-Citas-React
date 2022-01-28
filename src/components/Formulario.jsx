import {useState, useEffect} from 'react';
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente}) => {
  /*hago los cambios el set */
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(()=> {
    /*Valida que un arreglo este vacio */
    if(Object.keys(paciente).length>0){
       setNombre(paciente.nombre);
       setPropietario(paciente.propietario);
       setEmail(paciente.email);
       setFecha(paciente.fecha);
       setSintomas(paciente.sintomas);
    }
  },[paciente]);


  const generarId = () => {
    const ramdom = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return ramdom + fecha;
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    //Validacion de formulario
    if([nombre,propietario,email,fecha,sintomas].includes('')){
      setError(true);
      return
    }

      setError(false);
      // Objeto de paciente
      const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas
      }
      if(paciente.id){
        //Editando el registro
        objetoPaciente.id = paciente.id;
        const pacienteActualizado = pacientes.map(pacienteState =>pacienteState.id === paciente.id ? objetoPaciente : pacienteState); 
        setPacientes(pacienteActualizado);
      }else{
        //Nuevo registro
        objetoPaciente.id = generarId()
        setPacientes([...pacientes, objetoPaciente]);
      }

      //reinica el form
      setNombre('');
      setPropietario('');
      setEmail('');
      setFecha('');
      setSintomas('');
  }

  return (

    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {''} <span className="text-indigo-600 font-bold">Administrarlos</span></p>
      <form onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          
        {/* //esto dice if(errro === true) */}
        {error && <Error><p>Todos los campos son obligatorios</p></Error>}
          <label htmlFor="nombre-mascota" className="block text-gray-700 uppercase font-bold">Nombre mascota</label>
          <input 
            id="nombre-mascota" 
            type="text" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="nombre-propietario" className="block text-gray-700 uppercase font-bold">Nombre propietario</label>
          <input 
            id="nombre-propietario" 
            type="text" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Nombre del propietario"
            value={propietario}
            onChange={(e)=> setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input 
            id="email" 
            type="email" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Email propietario"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}  
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
          <input 
            id="alta" 
            type="date" 
            className="border-2 w-full p-2 mt-2  rounded-md"
            value={fecha}
            onChange={(e)=> setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea 
          id="sintomas" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los Sintomas"
          value={sintomas}
          onChange={(e)=> setSintomas(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" className="border-2 border-indigo-700 w-full p-3 text-indigo-700 uppercase font-bold cursor-pointer transition-all hover:text-white hover:bg-indigo-700 " value={paciente.id?"Editar paciente":"Nuevo paciente"} />
      </form>
    </div>

  );

};

export default Formulario;
