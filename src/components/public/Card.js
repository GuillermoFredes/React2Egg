import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({mascota}) => {
  return (
    <div className="col">
    <div className="card shadow-sm">

        <img  width="100%" src={mascota.image} alt='imagen'/>

        <h3>{mascota.name}</h3>
        <div className=" card-body ">
            <p className="card-text">Esta es una tarjeta más amplia con texto de apoyo a continuación como una introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
            <div className="d-flex justify-content-between align-items-center">
            <button 
            type="button"
            className="btn btn-sm btn-outline-secondary">

              <Link to={`/details/${mascota.id}`} className="nav-link">
                Detalle
              </Link>
              
            </button>

            {/* <button type="button" className="btn btn-sm btn-outline-secondary"> Edit </button> */}
   
                   
                </div>
                <small className="text-body-secondary">9 mins</small>
            </div>
        </div>
    </div>

  )
}

