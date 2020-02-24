const bcrypt = require('bcryptjs')
function hashPassword(password) {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(password, salt)
}

function comparePassword(password, dbPassword) {
  return bcrypt.compareSync(password, dbPassword)
}

module.exports = {
  comparePassword,
  hashPassword
}
