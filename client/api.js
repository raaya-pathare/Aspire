import request from 'superagent'

export function addAUser (data, callback) {
  const url = 'http://localhost:3000/home'
  request
    .post(url)
    .send(data)
    .end((err, res) => {
      callback(err, res.body)
    })
}
