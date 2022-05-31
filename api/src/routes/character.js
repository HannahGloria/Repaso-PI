const {Router} = require("express")
const router = Router();
//const { router } = require("../app");

const { getCharacters, postCharacters } = require('../controllers/controllers')


router.get('/', getCharacters);
router.post('/', postCharacters)

module.exports = router;