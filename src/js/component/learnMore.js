import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";



const LearnMore = () => {
    const { store, actions } = useContext(Context)
    const { id, type } = useParams();
    const [descripcion, setDescripcion] = useState([]);
    const [propiedades, setPropiedades] = useState([]);
    console.log("estas son las propiedades: ", propiedades)
    const propertiesToExclude = ['created', 'edited', 'homeworld', 'name', 'url', 'pilots','max_atmosphering_speed','manufacturer','hyperdrive_rating'];
    const filteredProperties = Object.entries(propiedades).filter(([key, value]) => value !== null && value !== "");

    // const dataMap = {
    //     "peoples": store.peoples,
    //     "planets": store.planets,
    //     "starShips": store.starShips
    // };

    const item = store[type].find(item => item.uid === id);





    const getDetails = (endPoint, uid) => {
        fetch(`https://www.swapi.tech/api/${endPoint}/${uid}`)
            .then(response => response.json())
            .then(data => {
                console.log("Datos del endpoint properties", data.result);
                const { description, properties } = data.result;
                setDescripcion(description);
                setPropiedades(properties)
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        getDetails(type, id)
    }, [])

    return (
        <div>
            {item && (
                <div key={item.uid} className="container mb-5">
                    <div className="d-flex ">
                        <img src={`https://starwars-visualguide.com/assets/img/${type == "people" ? ("characters") : type == "starShips" ? ("starships") : type}/${id}.jpg`} className="card-img-top" style={{ "width": "600px", "height": "550px" }} />
                        <div className="d-flex flex-column">
                            <h1 className="ps-5 pt-5">{item.name}</h1>
                            <p className="p-5">
                                {descripcion}<br></br>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 d-flex justify-content-around border-top border-bottom border-danger border-2 p-3">
                        {filteredProperties.filter(([key, _]) => !propertiesToExclude.includes(key)).map(([key, value]) => (
                            <div key={key} className="text-danger d-flex flex-column">
                                <span className="mb-2">{key}</span>
                                <span>{value}</span>
                            </div>
                        ))}
                    </div>
                </div>

            )}
        </div>


    )

}

export default LearnMore;