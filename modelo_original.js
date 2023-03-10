// Data Back para testear
const peli1 = {
  id: 1,
  title: "Superman",
};
const peli2 = {
  id: 2,
  title: "Sonic",
};
const peli3 = {
  id: 3,
  title: "Matrix",
};

//-----------------------------------------------------------------------------------------------------------------
// --------------------- MAURUX mi mini librería modelo redux ------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------

function maurox(state = {}) {
  return {
    initialState: function (initState) {
      state = { ...initState };
    },
    reducer: function (cb) {
      // console.log("in reducer core, cb is --> ", cb);
      state = { ...cb };
    },
    dispatch: function (type, payload) {
      // console.log("in dispatch");
      store.reducer(root_reducer(state, type, payload));
    },
    getState: function () {
      return state;
    },
  };
}

const store = maurox();

//-----------------------------------------------------------------------------------------------------------------
// --------------------- CODE ------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------

// Estado inicial
const initialState = {
  pelis: [],
  numPage: 0,
  data: {
    admin: "Mau",
    id: 332,
  },
};

// Reducer estructura
function root_reducer(state = initialState, type, payload) {
  // console.log("in reducer");
  switch (type) {
    case "ADD_PELI":
      // console.log("in reducer add peli, payload is ---> ", payload);
      const pelis = [...state.pelis, payload];
      // console.log(".....", pelis);
      return {
        ...state,
        pelis: [...pelis],
      };
    case "DELETE_PELI":
      // console.log("in reducer add peli, payload is ---> ", payload);
      const pelisFilter = state.pelis.filter((e) => e.id !== payload);
      // console.log(".....", pelis)
      return {
        ...state,
        pelis: [...pelisFilter],
      };

    default:
      return state;
  }
}
// Inicializar el reducer para que tome un estado inicial
store.reducer(root_reducer());
console.log("init getState --> ", store.getState());

// Function to dispatch
function add_peli(peli) {
  return peli;
}
function delete_peli(id) {
  return id;
}

// Despachando acciones
store.dispatch("ADD_PELI", add_peli(peli1));
console.log(store.getState());

store.dispatch("ADD_PELI", add_peli(peli2));
console.log(store.getState());

store.dispatch("ADD_PELI", add_peli(peli3));
console.log(store.getState());

store.dispatch("DELETE_PELI", delete_peli(2));
console.log(store.getState());
