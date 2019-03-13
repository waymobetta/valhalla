import { baseURL } from './api'

const Helse = {
  async Get () {
    return fetch(`${baseURL}/helse`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    }).then(res => {
      return res.json()
    }).then(jsonResponse => {
      return jsonResponse
    })
  }
}

export default Helse
