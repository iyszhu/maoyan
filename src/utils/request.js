import axios from 'axios'

class request {
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:8080',
      timeout: 30000
    })
  }

  get({ url, params = {} }) {
    return new Promise((resolve, reject) => {
      this.instance.get(url, { params })
          .then(res => {
            setTimeout(()=>{
              resolve(res.data)
            }, 1000)
          })
          .catch(err => {
            reject(err)
          })
    })
  }
}

export default request

