import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planets = () => {
    const { store, actions } = useContext(Context);





    return (
        <div className="container mt-3 mb-3" >
            <h1>Planets</h1>
            <div className="d-flex scroll-container overflow-auto">

                {
                    store.planets.map((planet, index) => {
                        return (


                            <div className="col m-2" key={index}>

                                <div className="card" style={{ width: "18rem" }}>
                                    {/* <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid>1?planet.uid}.jpg`} className="card-img-top" alt="..." /> */}
                                    <img
                                        src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid > 1 ? planet.uid : 'placeholder'}.jpg`}
                                        onError={(e) => { e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg' }}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{planet.name} </h5>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </p>
                                        <div className="d-flex">
                                            <Link to={`/learnMore/planets/${planet.uid}`} className="btn btn-primary">
                                                    Learn More
                                            </Link>
                                            <button type="button" className="ms-auto btn btn-outline-warning" onClick={()=>{actions.getFavoritos(planet.name)}}><i className={`fa-regular fa-heart ${store.favoritos.find(favorito => favorito == planet.name) ? 'fa-solid' : 'fa-regular'}`}></i> </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>


    );
}
