import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log("este es el store: ", store)
	return (
		<div className="container">
			<div className="row">
				{
					store.characters.map((character, index) => {
						return (

							<div className="col mb-3">

								<div key={index} className="card" style={{ width: "18rem" }}>
									<img src={character.image} className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{character.name} </h5>
										<p className="card-text">
											Some quick example text to build on the card title and make up the bulk of
											the card's content.
										</p>
										<a href="#" className="btn btn-primary">
											Go somewhere
										</a>
									</div>
								</div>
							</div>

						)

					})
				}

			</div>
		</div>
	)

}


