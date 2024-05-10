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
			peoples: [],
			urlImg:[]
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
						setStore({ peoples: data.results })


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
			}

		}
	};
};

export default getState;
