const getState = ({ getStore, getActions, setStore }) => {
	const BASE_URLPOEPLE = "https://www.swapi.tech/api/people/"
	const BASE_URLPLANETS = "https://www.swapi.tech/api/planets"
	const BASE_STARSHIPS = "https://www.swapi.tech/api/starships"


	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
			,
			starShips: [],
			planets: [],
			people: [],
			favoritos: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getPeoples: () => {
				fetch(`${BASE_URLPOEPLE}`)
					.then((response) => {
						return response.json();
					})
					.then((data) => {
						console.log("data: ", data);
						setStore({ people: data.results })


					})
					.catch((error) => {
						return console.log("error: ", error)
					});
			},
			getPlanets: () => {
				fetch(`${BASE_URLPLANETS}`)
					.then((response) => {
						return response.json();
					})
					.then((data) => {
						console.log("data: ", data);
						setStore({ planets: data.results })


					})
					.catch((error) => {
						return console.log("error: ", error)
					});
			},
			getStarShips: () => {
				fetch(`${BASE_STARSHIPS}`)
					.then((response) => {
						return response.json();
					})
					.then((data) => {
						console.log("data: ", data);
						setStore({ starShips: data.results })


					})
					.catch((error) => {
						return console.log("error: ", error)
					});
			},
			getFavoritos: (nombre) => {
				const store = getStore();
				if (!store.favoritos.includes(nombre)) {
					setStore({ favoritos: [...store.favoritos, nombre] })
					console.log("esta es la impresion de favoritos", getStore().favoritos);
				}

			},
			removeFavorite: item => {
				const store = getStore();
				// Encontrar el índice del item en la lista de favoritos
				const index = store.favoritos.indexOf(item);
				if (index > -1) {
					// Si el item está en la lista de favoritos, eliminarlo
					const updatedFavorites = [
						...store.favoritos.slice(0, index), // Elementos antes del elemento a eliminar
						...store.favoritos.slice(index + 1) // Elementos después del elemento a eliminar
					];
					// Actualizar el estado global con la nueva lista de favoritos
					setStore({ favoritos: updatedFavorites });

				}
			}

		}
	};
};

export default getState;
