import { useState } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
function App() {
  const [pacientes, setPacientes] = useState([]);

  const [paciente,setPaciente] = useState([]);
  // es necesario el reurn si nos nos da un error
  return (
    //aqui lo que se ve en pan talla
    // se retorna solo un elemento
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={pacientes}
        /> 
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
        />
      </div>
    </div>
  )
}

export default App
