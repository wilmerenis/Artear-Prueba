## Artear-Prueba
Para esta implementacion se utilizo el componente Nativo llamado ***FlatList*** el cual tiene la funcionalidad de disparar un evento cuando
los elementos dentro del viewport están llegando a su final; este evento se llama ***onEndReached***, el cual recibe un handle y este es ejecutado.
Dicho evento **onEndReached** esta escuchando al dispatch ***onEndReachedThreshold*** el cual recibe un parámetro 0.5, que define a que longitud de la lista se hará el dispatch para ejecutar el ***onEndReached***. En este caso el evento se dispara a la mitad del contenido de la lista.

El evento asociado al onEndReached es un simple handle que cambia el state.page del componente infinityScroll:
```
  function _handleLoadMore() {
    setState((prevState) => ({
      ...state,
      page: prevState.page + 1,
    }))
  }
 ```
dicho state esta asociado a un useEffect que realiza una request al endpoint el cual tiene una ruta dinámica según el estado actual del page:
```
useEffect(() => {

_fetchData()

}, [state.page])
``` 
éste al detectar un cambio de estado en page llama a la función ***_fetchData()*** , concatenando el contenido anterior con el nuevo.
```
function  _fetchData() {

let  path  =  `http://5e16456b22b5c600140cf9bf.mockapi.io/api/v1/questions?page=${state.page}&limit=10`

fetch(path)
	.then((res) =>  res.json())
	.then((data) => {
		setTimeout(() => {
			setState({
				...state,
				loading: false,
				dataSource: state.page  ===  1  
					?  data  
					: [...state.dataSource, ...data]
			})
		}, 2000)
	})
	.catch((err) => {
	setState({ ...state, loading: false })
	})
}
```
