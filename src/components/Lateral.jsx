/* eslint react/prop-types: "off" */
import '../Style/Lateral.sass'
export default function Lateral({closeSideBar,patiente,orderByName,orderByNumber}) {
    return(
        <>
            <div className='lateral-menu'>
                <div className='container-flex d-flex'>
                    <h4>Filtrar Prontuários</h4>
                    <i className="ms-5 mb-2 closeIcon" onClick={closeSideBar}>x</i>
                </div>
                <button type="button" className="btn btn-success mb-2" onClick={() => {orderByNumber(patiente);closeSideBar();}} >Número do Prontuário</button>
                <button type="button" className="btn btn-primary" onClick={() => {orderByName(patiente);closeSideBar();}} >Nome do paciente</button>
            </div>
        </>
    )
}