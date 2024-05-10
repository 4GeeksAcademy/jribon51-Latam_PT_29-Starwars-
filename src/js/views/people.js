import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const People = () => {
    const { store, actions } = useContext(Context);



    return (
        <div className="container mt-3 mb-3" >
            <h1>Peoples</h1>
            <div className="d-flex scroll-container overflow-auto">

                {
                    store.peoples.map((people, index) => {
                        return (


                            <div className="col m-2" key={index}>

                                <div className="card" style={{ width: "18rem" }}>
                                    <img src={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{people.name} </h5>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </p>
                                        <div className="d-flex">
                                            <Link to={`/learnMore/peoples/${people.uid}`} className="btn btn-primary">
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
