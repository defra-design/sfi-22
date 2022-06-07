const express = require('express')
const router = express.Router()


// test form
router.post('/0/test-form', function (req, res) {

    let newName = req.session.data.newName

    // overwrite values in the session data
    req.session.data.team[1].name = newName

    res.redirect('../index')

})
module.exports = router
