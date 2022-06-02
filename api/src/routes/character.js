const {Router} = require("express")
const router = Router();
//const { router } = require("../app");

const { getCharacters, postCharacters } = require('../controllers/controllers')


router.get('/getCharacter', getCharacters);
router.post('/create', postCharacters)

module.exports = router;