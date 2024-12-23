import Header from '../components/Header';
import NavigationButtons from '../components/NavigatioButtons';
import PatientTable from '../components/PatientTable';
import {checkReturn} from '../service/bussinesService';
import { useState } from 'react';

export default function Home(){
    // Array de pacientes
  const [pacientes, setPacientes] = useState([
    {
      numeroPront: 123,
      nome: "Gustavo Enrick",
      quemEsta: "Rafaela",
      status: true,
    },
    {
      numeroPront: 456,
      nome: "Maicon",
      quemEsta: "Ivete",
      status: false,
    },
    {
      numeroPront: 789,
      nome: "Ana",
      quemEsta: "Dr. Pedro",
      status: true,
    },
    {
      numeroPront: 1234,
      nome: "Rafaela",
      quemEsta: "Milton",
      status: false

    }
  ]);

  const orderByName = () => {
    const pacientesOrdenados = [...pacientes].sort((a, b) => a.nome.localeCompare(b.nome));
    setPacientes(pacientesOrdenados);
  };

  const orderByNumber = () => {
    const pacientesOrdenados = [...pacientes].sort((a, b) => a.numeroPront - b.numeroPront);
    setPacientes(pacientesOrdenados);
  };

    return (
        <>
            <Header patientes={pacientes} orderByName={orderByName} orderByNumber={orderByNumber}/>
            <NavigationButtons />
            <PatientTable pacientes={pacientes} checkReturn={checkReturn}></PatientTable>
        </>
    )
}