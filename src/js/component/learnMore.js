import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";



const LearnMore = () => {
    const { store, actions } = useContext(Context)
    const { id, type } = useParams();
    console.log("revisar name:", store.peoples.name)


    const getDetails = (endPoint, uid) => {
        fetch(`https://www.swapi.tech/api/${endPoint}/${uid}`)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch(error => console.log(error))
    }
    useEffect(() => {
        getDetails(type, id)
    }, [])

    return (
        <div className="container">
            <div className="d-flex" >
                <img src={`https://starwars-visualguide.com/assets/img/${type == "peoples" ? "characters" : type}/${id}.jpg`} className="card-img-top" style={{ "width": "800px", "height": "600px" }} />
                <div className="d-flex flex-column">
                    <h1 className="ps-5 pt-5">{""}</h1>
                    <p className="p-5">
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LearnMore;