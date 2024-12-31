import React from 'react'
import { useOutletContext } from 'react-router-dom';
import "./HostVanPhotos.css"
const HostVanPhotos = () => {
  const { hostVan } = useOutletContext();
  return (
    <div>
   <img src={hostVan.imageUrl} className="host-van-detail-image" />
  
    </div>
  )
}

export default HostVanPhotos
