const bodyParse = require('body-parser')
const cors = require('cors')

module.exports = app => {
    // app.use(bodyParser.urlencoded())
    app.use(bodyParse.json())
    app.use(cors())
}
