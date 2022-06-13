const express = require('express')
const router = express.Router()


// test form
router.post('/0/test-form', function (req, res) {

    let newName = req.session.data.newName

    // overwrite values in the session data
    req.session.data.team[1].name = newName

    res.redirect('../index')

})

// pid0 - Land details form
router.post('/0/land-details-form', function (req, res) {

    let landstatus = req.session.data.landstatus
    // overwrite values in the session data
    req.session.data.prototypes[0].application[0].sections[0].subtasks[0].status = landstatus

    let applicationstatus = req.session.data.applicationstatus
    // overwrite values in the session data
    req.session.data.prototypes[0].application[0].status = applicationstatus

    // The content in the "" is the name of the radio button
    var option = req.session.data['land-details-update']

    // The content in the "" is the value of the radio button
    if (option === 'yes') {
        // Send user to this page
        res.redirect('apply-management-control')
    } else {
        // Or send user to this page
        res.redirect('apply-update-land-details')
    }

})

// pid0 - Land details form
router.post('/0/withdraw-application-form', function (req, res) {

    let applicationstatus = req.session.data.applicationstatus
    // overwrite values in the session data
    req.session.data.prototypes[0].application[0].status = applicationstatus

    res.redirect('sfi-applications-agreements')

})

// pid0 - Land management control form
router.post('/0/land-management-control-form', function (req, res) {

    let landdetailsstatus = req.session.data.landdetailsstatus
    // overwrite values in the session data
    req.session.data.prototypes[0].application[0].sections[0].subtasks[0].status = landdetailsstatus

    let standardstatus = req.session.data.standardstatus
    // overwrite values in the session data
    req.session.data.prototypes[0].application[0].sections[1].subtasks[0].status = standardstatus

    // The content in the "" is the name of the radio button
    var option = req.session.data['management-control']

    // The content in the "" is the value of the radio button
    if (option === 'yes') {
        // Send user to this page
        res.redirect('apply-standards')
    } else {
        // Or send user to this page
        res.redirect('apply-land-not-eligible')
    }

})

// pid0 - Choose standard
router.post('/0/choose-standard-form', function (req, res) {

    let standardstatus = req.session.data.standardstatus

    // overwrite values in the session data
    req.session.data.prototypes[0].application[0].sections[1].subtasks[0].status = standardstatus

    let levelsstatus = req.session.data.levelsstatus

    // overwrite values in the session data
    req.session.data.prototypes[0].application[0].sections[2].subtasks[0].status = levelsstatus

    // The content in the "" is the name of the radio button
    var option = req.session.data['standard']

    // The content in the "" is the value of the radio button
    if (option === 'arable') {
        // Send user to this page
        res.redirect('apply-for-sfi')
    } else {
        // Or send user to this page
        res.redirect('apply-for-sfi')
    }

})

// pid0 - Choose levels
router.post('/0/arable-levels-form', function (req, res) {

    let levelsstatus = req.session.data.levelsstatus

    // overwrite values in the session data
    req.session.data.prototypes[0].application[0].sections[2].subtasks[0].status = levelsstatus

    // The content in the "" is the name of the radio button
    var option = req.session.data['arable-action-1']
    var option2 = req.session.data['arable-action-2']
    var option3 = req.session.data['arable-action-3']
    var option4 = req.session.data['arable-action-4']

    // The content in the "" is the value of the radio button
    if (option === 'no') {
        // Send user to this page
        res.redirect('apply-levels-not-eligible')
    } else if (option2 === 'no') {
        // Or send user to this page
        res.redirect('apply-levels-not-eligible')
    } else if (option3 === 'no') {
        // Or send user to this page
        res.redirect('apply-levels-not-eligible')
    } else if (option4 === 'no') {
        // Or send user to this page
        res.redirect('apply-levels-not-eligible')
    } else {
        // Or send user to this page
        res.redirect('apply-arable-levels-intermediate')
    }
})

// pid0 - Choose levels - intermediate
router.post('/0/arable-levels-intermediate-form', function (req, res) {

    let levelsstatus = req.session.data.levelsstatus

    // overwrite values in the session data
    req.session.data.prototypes[0].application[0].sections[2].subtasks[0].status = levelsstatus

    // The content in the "" is the name of the radio button
    var option = req.session.data['arable-action-5']

    // The content in the "" is the value of the radio button
    if (option === 'no') {
        // Send user to this page
        res.redirect('apply-levels-eligible')
    } else {
        // Or send user to this page
        res.redirect('apply-levels-eligible-intermediate')
    }
})
module.exports = router
