const { Router } = require("express")
const router = Router()

const { getFavorites, postFavorite, deleteFavorite } = require("../controllers/favorites")

router.get('/', getFavorites)

router.post('/:id', postFavorite)

router.delete('/:id', deleteFavorite)

module.exports = router