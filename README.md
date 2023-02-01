# MAUROX

Es una pequeñita librería que simula el modelo de Redux

## La librería es:

```js
function maurox(state = {}) {
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
      store.reducer(root_reducer(state, type, payload));
    },
    getState: function () {
      return state;
    },
  };
}

```

### Los pasos a seguir para hacer uso de la librería son:

```
01. Crear carpeta MAUROX y dentro el archivo index.js importar Maurox
```

```js
import maurox from 'maurox'
// y crear la instancia de este exportando
export const store = maurox();
```

```
02. Armar la función reducer y exportarla. El nombre de esta función si es palabra reservada, y debe ser: root_reducer
```

```js
 export function root_reducer(state = initialState, type, payload) {
    console.log("in reducer");
    switch (type) {
      case "ADD_PELI":
        console.log("in reducer add peli, payload is ---> ", payload);
        const pelis = [...state.pelis, payload];
        console.log(".....", pelis)
        return {
          ...state,
          pelis: [...pelis],
        };
  
      default:
        return state;
    }
  }
```
03. Importar el store al archivo app (donde se definen las rutas) de nuestro proyecto react
IMPORTANTE: debe encontrarse antes y por fuera de nuestro componente app
```
```

```js
import { store } from './Maurox/index.js'
// crear Estado inicial
  const initialState = {
    pelis: [],
    numPage: 0,
    data: {
      admin: "Mau",
      id: 332,
    },
  };
// Y llamar desde nuestro store a nuestro reducer por primera vez
store.initialState(initialState)
// Para checkear el correcto funcionamiento podemos ver nuestro state inicial con:
console.log("init getState --> ",store.getState());

function App() { etc... }
```

```
04. Ahora como cierre, la manera de implementar es importando el store y usando
o su método dispatch para realizar cambios en el state o su método getState para
leer el state.
```
Ejemplo:

```js
import { store } from './Maurox/index.js'
// Function to dispatch
  function add_peli(peli) {
    return peli;
  }
  
  // Despachando acciones
  store.dispatch("ADD_PELI", add_peli(peli1));
  console.log(store.getState());
  
  store.dispatch("ADD_PELI", add_peli(peli2));
  console.log(store.getState());
```

## Modo de implementar con React
```
Es una pequeñita librería que simula el modelo de Redux

En tan solo 4 pasos ya se encuentra conectada y se puede utilizar desde
cualquier componente de nuestra app

Ahora para el manejo del renderizado, es decir de que react escuche los cambios
lo que se debe hacer es crear en el componente que se encuentra conectado a nuestro
store, que uno de sus states locales se encuentre enlazado a determinada props
de nuestro state global de nuestro store

Ejemplo:

const [ user, setUser ] = useState("")
const userStateGlobal = store.getState().user

useEffect(()=>{
    setUser(userStateGlobal)
},[ userStateGlobal ])

```