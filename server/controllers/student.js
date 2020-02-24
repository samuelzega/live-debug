const { Student } = require('../models/index')
class StudentController {
  static submit(req, res, next) {
    const { name, score } = req.body
    const submitScore = Number(score)
    const TeacherId = req.teacher.id
    if (typeof submitScore !== 'number') {
      res.status(400).json({
        message: 'Score only accept number'
      })
    } else {
      // console.log('masuk sini ga', name, 'req')

      Student.create({
        name: name,
        score: submitScore,
        TeacherId: TeacherId
      })
        .then(response => {
          // console.log('responsenya', response)

          res.status(201).json({
            message: 'Successfully submit score',
            student: response
          })
        })
        .catch(next(err))
    }
  }
}

module.exports = StudentController
