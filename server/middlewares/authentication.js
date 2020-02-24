const { verifyToken } = require('../helpers/jwt')
const { Teacher } = require('../models')

module.exports = function(req, res, next) {
  try {
    // console.log('masuk sini')

    const access_token = req.headers.access_token
    // console.log(access_token)

    req.teacher = verifyToken(access_token)
    // console.log('cek access token setelah di verify', req.teacher)

    Teacher.findOne({
      where: {
        id: req.teacher.id
      }
    })
      .then(response => {
        next()
        if (response) {
          // console.log(response, 'findOne nya berhasil')
          next()
        } else {
          console.log('error disini authentication')
          next({
            status: 401,
            message: 'Authentication failed'
          })
        }
      })
      .catch(err => next(err))
  } catch (err) {
    next(err)
  }
}
