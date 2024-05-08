import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log("este es el store: ", store.urlImg);


	return (
		<div className="container mt-2" >
			<h1>Characters</h1>
			<div className="d-flex scroll-container overflow-auto">

				{
					store.characters.map((character, index) => {
						return (


							<div className="col m-2" key={index}>

								<div className="card" style={{ width: "18rem" }}>
									<img src={`${store.urlImg}/${character.uid}.jpg`} className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{character.name} </h5>
										<p className="card-text">
											Some quick example text to build on the card title and make up the bulk of
											the card's content.
										</p>
										<div className="d-flex">
											<Link to="/LearnMore">
												<a href="#" className="btn btn-primary">
													Learn More
												</a>
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
