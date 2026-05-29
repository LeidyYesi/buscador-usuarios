const contenedor = document.querySelector("#usuarios") // Busca <div id="usuarios"></div>
const buscador = document.querySelector("#buscador")

let usuarios = [];


////// Función para mostrar usuarios
const mostrarUsuarios = (usuariosFiltrados) => {

  contenedor.innerHTML = ""  //Limpia pantalla antes de volver a renderizar.

  usuariosFiltrados.forEach(usuario => {

    const { name, email, address } = usuario

    contenedor.innerHTML += `
      <div class="card">
        <h2>${name}</h2>
        <p>${email}</p>
        <p>${address.city}</p>
      </div>
    `
  })

}

/////Función fetch

const obtenerUsuarios = async () => {

  try {

    const respuesta = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    )
    usuarios = await respuesta.json()

    mostrarUsuarios(usuarios)

  } catch(error) {

    console.log(error)

  }
}

obtenerUsuarios();


///Buscador

buscador.addEventListener("input", () => {

  const texto = buscador.value.toLowerCase()

  const usuariosFiltrados = usuarios.filter(usuario =>
    usuario.name.toLowerCase().includes(texto)
  )

  mostrarUsuarios(usuariosFiltrados)

})