//-----------------------------------------------------------------------------------------------------------------
// --------------------- MAUROX mi mini librería modelo redux ------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------


function maurox(state = {}) {
  return {
    initialState: function (initState, root_reducer) {
      root_reducer = root_reducer 
      state = { ...initState, root_reducer: root_reducer };
    },
    reducer: function (cb) {
      // console.log("in reducer core, cb is --> ", cb);
      state = {...cb};
    }, 
    dispatch: function (type, payload) {
      // console.log("in dispatch");
      this.reducer(state.root_reducer(state, type, payload))
    },
    getState: function () {
      return state;
    },
  };
}

module.exports = maurox

//-----------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
