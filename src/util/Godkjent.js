import { baseURL } from './api'

const Godkjent = {
  async Get () {
    return fetch(`${baseURL}/godkjent`, {
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

export default Godkjent
