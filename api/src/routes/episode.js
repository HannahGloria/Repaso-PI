const {Router} = require("express")
const router = Router();

const { getEpisodes } = require('../controllers/controllers')

router.get('/', getEpisodes);

module.exports = router;