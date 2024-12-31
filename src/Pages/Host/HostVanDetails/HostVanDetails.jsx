import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useParams } from 'react-router-dom'
import "./hostVanDetails.css"
import { getHostVans } from '../../../APIs/api'

const HostVanDetails = () => {
  const [hostVan, setHostVan] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try {
        const data = await getHostVans(id)
        setHostVan(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadVans()
  }, [id])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>
  }

  if (!hostVan) {
    return <h1>No van data available</h1>
  }

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  return (
    <section>
      <Link
        to=".."
        relative="path"
        className="back-button"
      >&larr; <span>Back to all vans</span></Link>

   { hostVan &&   <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={hostVan.imageUrl} alt={hostVan.name} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${hostVan.type}`}>
              {hostVan.type}
            </i>
            <h3>{hostVan.name}</h3>
            <h4>${hostVan.price}/day</h4>
          </div>
        </div>

        <nav className="host-van-detail-nav">
          <NavLink
            to="."
            end
            style={({ isActive }) => isActive ? activeStyle : null}
          >Details</NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => isActive ? activeStyle : null}
          >Pricing</NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => isActive ? activeStyle : null}
          >Photos</NavLink>
        </nav>

        <Outlet context={{ hostVan }} />
      </div>}
    </section>
  )
}

export default HostVanDetails
