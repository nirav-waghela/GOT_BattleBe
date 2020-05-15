const {
    getAllLocation,
    getBattleCount,
    getSearchResult,
    getDataById
} = require('../controllers/battleControllers')
const router = require('express').Router();


router.get('/list', getAllLocation)
router.get('/counts', getBattleCount)
router.get('/search',getSearchResult)
router.get('/details', getDataById)

module.exports = router