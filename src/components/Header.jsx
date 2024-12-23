/* eslint react/prop-types: "off" */
import logoPrefeitura from '../assets/prefeituraLogo.png'
import logoFiltro from '../assets/filtro.png'
import { useState } from 'react'
import '../Style/Header.sass'
import Lateral from './lateral';
export default function Header({patientes, orderByName,orderByNumber}){

    const [showSideBar,setShowSideBar] = useState(false);

    const toggleSidebar = () => {
        setShowSideBar(!showSideBar);
    };

    return (
        <>
        <div className='container-fluid d-flex align-items-center justify-content-between mt-2 header'>
            <img src={logoPrefeitura} className='img-fluid logo-prefeitura' alt="Logo prefeitura de Itanhaém" />
            <h3>Localização de Prontuário</h3>
            <img 
                src={logoFiltro} 
                className='img-fluid logo-filtro' 
                alt="filtro"
                onClick={toggleSidebar}
            />
        </div>
        {showSideBar && <Lateral closeSideBar = {() => setShowSideBar(false)} patiente={patientes} orderByName = {orderByName} orderByNumber={orderByNumber} />}
    </>
    )
}