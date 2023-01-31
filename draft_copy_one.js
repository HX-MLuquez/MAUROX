function store_structure() {
  var state = {};
  return function (ide, state_or_action, cb) {
    if (ide === "initialState") {
      state = state_or_action;
    } else if (ide === "dispatch") {
      cb(state_or_action, state);
    } else if (ide === "viewState") {
      return state;
    }
  };
}
// Instancia del store
const store = store_structure();
// Reducer functions
function addPeli(peli, state) {
  const newState = { ...state };
  newState.pelis.push(peli);
  state = newState;
  return peli;
}

function removePeli(Idpeli, state) {
  const newState = { ...state };
  const catchIndex = newState.pelis.findIndex((e) => e.id === Idpeli);
  newState.pelis.splice(catchIndex, 1);
  state = newState;
  return "peli " + Idpeli + " remove";
}

// console.log(store);
store("initialState", { pelis: [], numPage: 0, categories: [] });

console.log(store("viewState"));

store("dispatch", { title: "superman", id: 1 }, addPeli);
console.log(store("viewState"));

store("dispatch", { title: "sonic", id: 2 }, addPeli);
console.log(store("viewState"));

store("dispatch", { title: "packman", id: 3 }, addPeli);
console.log(store("viewState"));

store("dispatch", 2, removePeli);
console.log(store("viewState"));

store("dispatch", { title: "boy", id: 4 }, addPeli);
console.log(store("viewState"));
