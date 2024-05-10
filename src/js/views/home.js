import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { People } from "./people";
import { Planets } from "./planets";
import { StarShips } from "./starShips";

export const Home = () => {
	const { store, actions } = useContext(Context);




	return (
		<>
			<People />
			<Planets />
			<StarShips />
		</>



	);
}
