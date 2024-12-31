import React from 'react'
import { useOutletContext } from 'react-router-dom';
import "./HostVanPricing.css"
const HostVanPricing = () => {
  const { hostVan } = useOutletContext();
  return (
    
     <h3 className="host-van-price">${hostVan.price}<span>/day</span></h3>
   
  )
}

export default HostVanPricing
