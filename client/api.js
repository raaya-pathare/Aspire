import request from 'superagent'

export function addAUser (data, callback) {
  const url = 'http://localhost:3000/'
  request
    .post(url)
    .send(data)
    .end((err, res) => {
      callback(err, res.body)
    })
}

export function userLogin (data, callback) {
  const url = 'http://localhost:3000/'
  request
    .post(url)
    .send(data)
    .end((err, res) => {
      callback(err, res.body)
    })
}

export function addAGoal (data, callback) {
  const url = 'http://localhost:3000/user/:id/addgoal'
  request
    .post(url)
    .send(data)
    .end((err, res) => {
      callback(err, res.body)
    })
}

