import { ref, onMounted } from 'vue'
import axios from 'axios'

const API_URL = 'https://rickandmortyapi.com/api/location'

export function useCharacters() {
  const characters = ref([])
  const loading = ref(true)
  const error = ref(null)

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(API_URL)
      characters.value = response.data.results // API devuelve "results"
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchCharacters)

  return { characters, loading, error }
}

export function useCharacter(id) {
  const character = ref(null)
  const loading = ref(true)
  const error = ref(null)

  const fetchCharacter = async () => {
    try {
      const response = await axios.get(`${API_URL}/${id}`)
      character.value = response.data
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchCharacter)

  return { character, loading, error }
}
