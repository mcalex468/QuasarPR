import axios from 'axios'

const API_URL = 'https://rickandmortyapi.com/api/location'

// Array local para almacenar los datos
let localData = []

// Obtener todos los elementos de la API y almacenarlos localmente
async function fetchItems() {
  try {
    const response = await axios.get(API_URL)
    localData = response.data.results
    return localData
  } catch (error) {
    console.error('Error fetching items:', error)
    return []
  }
}

// Obtener un elemento por ID desde el array local
function getItemById(id) {
  return localData.find(function (item) {
    return item.id === id
  })
}

// Crear un nuevo elemento en el array local
function createItem(item) {
  const newItem = { ...item, id: localData.length + 1 }
  localData.push(newItem)
  return newItem
}

// Actualizar un elemento en el array local
function updateItem(id, updatedItem) {
  for (let i = 0; i < localData.length; i++) {
    if (localData[i].id === id) {
      localData[i] = { ...localData[i], ...updatedItem }
      return localData[i]
    }
  }
  return null
}

// Eliminar un elemento del array local
function deleteItem(id) {
  for (let i = 0; i < localData.length; i++) {
    if (localData[i].id === id) {
      return localData.splice(i, 1)[0]
    }
  }
  return null
}

export { fetchItems, getItemById, createItem, updateItem, deleteItem }
