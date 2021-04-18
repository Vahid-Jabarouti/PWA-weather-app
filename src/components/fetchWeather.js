import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const KEY = '42e2df49992ba5c874ec7600de7d2c32'

export const fetchWeather = async (query) => {
  const response = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      appid: KEY
    }
  })

  return response.data
}