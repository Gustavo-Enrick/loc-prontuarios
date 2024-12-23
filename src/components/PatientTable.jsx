/* eslint react/prop-types: "off" */
export default function PatientTable({pacientes,checkReturn}){
    return(
        <>
            <div className="container-fluid d-flex justify-content-around">
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Número de pront:</th>
                    <th scope="col">Nome:</th>
                    <th scope="col">Quem está:</th>
                    <th scope="col">Status:</th>
                    </tr>
                </thead>
                <tbody>
                    {pacientes.map((paciente, index) => (
                    <tr key={index}>
                        <th scope="row">{paciente.numeroPront}</th>
                        <td>{paciente.nome}</td>
                        <td>{paciente.quemEsta}</td>
                        <td style={{color: checkReturn(paciente)  == "DEVOLVIDO" ? "green" : "red"}}>{checkReturn(paciente)}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </>
    )
}