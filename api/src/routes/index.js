const {Router} = require("express")
const router = Router();
const characterRouter = require('./character')
const episodeRouter = require ('./episode')

// Configurar los routers
//GET /characters
// router.get('/characters', async (req, res) =>{

// })
router.use('/character', characterRouter);
router.use('/episode', episodeRouter);

module.exports = router;
