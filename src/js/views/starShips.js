import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const StarShips = () => {
    const { store, actions } = useContext(Context);


    return (
        <div className="container mt-3 mb-3" >
            <h1>Star Ships</h1>
            <div className="d-flex scroll-container overflow-auto">

                {
                    store.starShips.map((starShip, index) => {
                        return (


                            <div className="col m-2" key={index}>

                                <div className="card" style={{ width: "18rem" }}>
                                    {/* <img src={`https://starwars-visualguide.com/assets/img/starships/${starShip.uid}.jpg`} className="card-img-top" alt="..." /> */}
                                    <img
                                        src={`https://starwars-visualguide.com/assets/img/starships/${starShip.uid > 1 ? starShip.uid : 'placeholder'}.jpg`}
                                        onError={(e) => { e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg' }}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{starShip.name} </h5>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </p>
                                        <div className="d-flex">
                                            <Link to={`/learnMore/starShips/${starShip.uid}`} className="btn btn-primary">
                                                Learn More
                                            </Link>
                                            <button type="button" className="ms-auto btn btn-outline-warning"><i className="fa-regular fa-heart"></i> </button>
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
