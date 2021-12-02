const router = require('express').Router()
const apiController = require('../controllers/apiController')
const {uploadSingle} = require('../middlewares/multer')

router.get('/landing-page', apiController.landingPage)
router.post('/detail-page/:id', apiController.detailPage)
router.get('/booking-page', uploadSingle, apiController.bookingPage)

module.exports = router