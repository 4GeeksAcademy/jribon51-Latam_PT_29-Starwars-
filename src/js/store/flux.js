const getState = ({ getStore, getActions, setStore }) => {
	const BASE_URL = "https://rickandmortyapi.com/api"
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
			characters:[]
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
			getCharacters: () => {
				fetch(`${BASE_URL}/character`)
					.then((response) => {
						return response.json();
					})
					.then((data) => {
						console.log("data: ", data);
						setStore({characters:data.results})


					})
					.catch((error) => {
						return console.log("error: ", error)
					});
			},
		},
	};
};

export default getState;
