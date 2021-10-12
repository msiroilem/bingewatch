const router = require('express').Router()
const controller = require('../controllers/ShowController')
const middleware = require('../middleware')

router.get(
  '/',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.GetAllShows
)
router.get(
  '/findByTVDBId/:tvdb_id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.FindShowByTVDBId
)
router.get(
  '/:show_id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.FindShowById
)
router.post(
  '/',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.CreateShow
)
router.delete(
  '/:show_id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.DeleteShow
)
module.exports = router
