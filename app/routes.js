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

    let completed = req.session.data.completed
    // overwrite values in the session data
    req.session.data.prototypes[0].application[0].completed = completed

    // The content in the "" is the name of the radio button
    var option = req.session.data['management-control']

    // The content in the "" is the value of the radio button
    if (option === 'yes') {

        // Send user to this page
        res.redirect('apply-for-sfi')
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

    let levelplaceholder = req.session.data.levelplaceholder
    // overwrite values in the session data
    req.session.data.prototypes[0].application[0].sections[2].subtasks[0].show = levelplaceholder

    let levelsstatus = req.session.data.levelsstatus
    // overwrite values in the session data
    req.session.data.prototypes[0].application[0].sections[2].subtasks[0].status = levelsstatus

    let completed = req.session.data.completed
    // overwrite values in the session data
    req.session.data.prototypes[0].application[0].completed = completed

    // The content in the "" is the name of the radio button
    var option = req.session.data['standard']

    // Set arable standard active
    if (option.includes('arable')) {

        req.session.data['arable'] = "yes"
        req.session.data.prototypes[0].application[0].sections[2].subtasks[1].status = "Not started"
        req.session.data.prototypes[0].application[0].sections[2].subtasks[1].show = true

    } else {

        req.session.data['arable'] = "no"
    }

    // Set grassland standard active
    if (option.includes('grassland')) {

        req.session.data['grassland'] = "yes"
        req.session.data.prototypes[0].application[0].sections[2].subtasks[2].show = true

    } else {

        req.session.data['grassland'] = "no"
    }

    // Set moorland standard active
    if (option.includes('moorland')) {

        req.session.data['moorland'] = "yes"
        req.session.data.prototypes[0].application[0].sections[2].subtasks[3].show = true

    } else {

        req.session.data['moorland'] = "no"
    }

    res.redirect('apply-for-sfi')
})


// pid0 - Choose arable levels
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
        req.session.data['arableintroductorylevel'] = "yes"
        // Or send user to this page
        res.redirect('apply-levels-eligible')
    }
})

// pid0 - Choose arable levels - intermediate
router.post('/0/arable-levels-intermediate-form', function (req, res) {

    let levelsstatus = req.session.data.levelsstatus

    // overwrite values in the session data
    req.session.data.prototypes[0].application[0].sections[2].subtasks[0].status = levelsstatus

    // The content in the "" is the name of the radio button
    var option = req.session.data['arable-action-5']

    // The content in the "" is the value of the radio button
    if (option === 'no') {
        req.session.data['arableintermediatelevel'] = "no"
        // Send user to this page
        res.redirect('apply-levels-intermediate-not-eligible')
    } else {

        req.session.data['arableintermediatelevel'] = "yes"
        // Or send user to this page
        res.redirect('apply-levels-eligible-intermediate')
    }

})

// pid0 - select land parcels
router.post('/0/apply-land-parcels-form', function (req, res) {

    res.redirect('apply-payment-standard')

})

// pid0 - payment summary page
router.post('/0/apply-payment-standard-form', function (req, res) {

    let levelsstatus = req.session.data.levelsstatus

    // overwrite values in the session data
    req.session.data.prototypes[0].application[0].sections[2].subtasks[1].status = levelsstatus

    req.session.data.prototypes[0].application[0].sections[3].subtasks[0].status = "Not started yet"

    let completed = req.session.data.completed
    // overwrite values in the session data
    req.session.data.prototypes[0].application[0].completed = completed

    res.redirect('apply-for-sfi')

})

// pid0 - check your answers page
router.post('/0/apply-check-your-answers-form', function (req, res) {

    let levelsstatus = req.session.data.levelsstatus

    // overwrite values in the session data
    req.session.data.prototypes[0].application[0].sections[3].subtasks[0].status = levelsstatus

    let nextstatus = req.session.data.nextstatus

    // overwrite values in the session data
    req.session.data.prototypes[0].application[0].sections[3].subtasks[1].status = nextstatus


    let completed = req.session.data.completed
    // overwrite values in the session data
    req.session.data.prototypes[0].application[0].completed = completed

    res.redirect('apply-submit-your-application')

})

// pid0 - check your answers page
router.post('/0/apply-submit-your-application-form', function (req, res) {

    let levelsstatus = req.session.data.levelsstatus

    // overwrite values in the session data
    req.session.data.prototypes[0].application[0].sections[3].subtasks[1].status = levelsstatus

    let completed = req.session.data.completed
    // overwrite values in the session data
    req.session.data.prototypes[0].application[0].completed = completed

    let applicationstatus = req.session.data.applicationstatus
    // overwrite values in the session data
    req.session.data.prototypes[0].application[0].status = applicationstatus

    res.redirect('apply-submitted')

})

// pid0 - Land details form CYA
router.post('/0/land-details-form-cya', function (req, res) {


    // The content in the "" is the name of the radio button
    var option = req.session.data['land-details-update']

    // The content in the "" is the value of the radio button
    if (option === 'yes') {
        // Send user to this page
        res.redirect('apply-check-your-answers')
    } else {
        // Or send user to this page
        res.redirect('apply-update-land-details')
    }

})

// pid0 - CYA - Land management control form
router.post('/0/land-management-control-form-cya', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['management-control']

    // The content in the "" is the value of the radio button
    if (option === 'yes') {

        // Send user to this page
        res.redirect('apply-check-your-answers')
    } else {
        // Or send user to this page
        res.redirect('apply-land-not-eligible')
    }

})


// pid0 - Choose arable levels cya
router.post('/0/arable-levels-form-cya', function (req, res) {

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
        req.session.data['arableintroductorylevel'] = "yes"
        // Or send user to this page
        res.redirect('apply-check-your-answers')
    }
})

// pid0 - Choose arable levels - intermediate cya
router.post('/0/arable-levels-intermediate-form-cya', function (req, res) {

    let levelsstatus = req.session.data.levelsstatus

    // overwrite values in the session data
    req.session.data.prototypes[0].application[0].sections[2].subtasks[0].status = levelsstatus

    // The content in the "" is the name of the radio button
    var option = req.session.data['arable-action-5']

    // The content in the "" is the value of the radio button
    if (option === 'no') {
        req.session.data['arableintermediatelevel'] = "no"
        // Send user to this page
        res.redirect('apply-levels-intermediate-not-eligible')
    } else {

        req.session.data['arableintermediatelevel'] = "yes"
        // Or send user to this page
        res.redirect('apply-check-your-answers')
    }

})

module.exports = router
