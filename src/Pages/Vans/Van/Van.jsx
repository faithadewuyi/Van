import React, { useState, useEffect } from 'react'
import "./van.css"
import { Link, useSearchParams } from 'react-router-dom';
import { getVans } from '../../../APIs/api';

const Van = () => {
    const [vans, setVans] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const typeFilter = searchParams.get("type");

    useEffect(() => {
        async function loadVans() {
            setLoading(true);
            try {
                const data = await getVans();
                setVans(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        loadVans();
    }, []);

    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans;

    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link 
                to={van.id} 
                state={{ 
                    search: `?${searchParams.toString()}`, 
                    type: typeFilter 
                }}
            >
                <img src={van.imageUrl} alt={`${van.name}`} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ));

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            const newParams = new URLSearchParams(prevParams);
            if (value === null) {
                newParams.delete(key);
            } else {
                newParams.set(key, value);
            }
            return newParams;
        });
    }

    if (loading) {
        return <h1 aria-live="polite">Loading...</h1>;
    }

    if (error) {
        return <h1 aria-live="assertive">There was an error: {error.message}</h1>;
    }

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}
                >
                    Simple
                </button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}
                >
                    Luxury
                </button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}
                >
                    Rugged
                </button>

                {typeFilter && (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="van-type clear-filters"
                    >
                        Clear filter
                    </button>
                )}
            </div>

            <div className="van-list">
                {vanElements.length > 0 ? vanElements : <p>No vans available for the selected filter.</p>}
            </div>
        </div>
    );
};

export default Van;