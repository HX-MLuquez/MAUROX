//-----------------------------------------------------------------------------------------------------------------
// --------------------- MAUROX mi mini librería modelo redux ------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------

function store_structure(state = {}) {
  return {
    initialState: function (initState) {
      state = { ...initState };
    },
    reducer: function (cb) {
      console.log("in reducer core, cb is --> ", cb);
      state = {...cb};
    },
    dispatch: function (type, payload) {
      console.log("in dispatch");
      store.reducer(reducer(state, type, payload));
    },
    getState: function () {
      return state;
    },
  };
}


//-----------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
