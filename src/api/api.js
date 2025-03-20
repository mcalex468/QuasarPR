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

// Obtener un elemento por ID
async function fetchItemsId(id) {
  try {
    const response = await axios.get(`${API_URL}/${id}`)
    return response.data // Aquí la API devuelve un objeto, no un array
  } catch (error) {
    console.error('Error fetching item by ID:', error)
    return null
  }
}

export { fetchItems, fetchItemsId }
