import React, { useContext } from "react";
import { Link, } from "react-router-dom";
import { Context } from "../store/appContext";



export const Navbar = () => {
	const { store, actions } = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light mb-3 container bg-black">
			<Link to="/">
				<img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" style={{ width: "120px", height: "60px" }} />
			</Link>
			<div className="ml-auto">

				<div className="nav-item dropdown">
					<a className="nav-link text-white dropdown-toggle btn btn-primary" href="#" id="navbarDropdown"
						role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos <span className="badge bg-secondary">{store.favoritos.length}</span>{/* Mostrar el contador de likes */}
					</a>
					<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
						{store.favoritos.map((item, index) => (
							<div key={index} className="d-flex justify-content-between align-items-center m-2">
								<li>{item}</li>
								<i class="fa-solid fa-trash" onClick={() => actions.removeFavorite(item)}></i>
							</div>
						))}
					</ul>
				</div>

			</div>
		</nav>
	);
};
