import React from 'react'
import Appbar from "../../Appbar/Appbar";
const Admin = ({tipoUsuario}) => {
  return (
    <div className='div-general'>
    <Appbar tipoUsuario={tipoUsuario}/>
        Aqui va la interfaz del admin
    </div>
  )
}

export default Admin