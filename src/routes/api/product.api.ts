import { Router } from 'express'
import * as controllers from '../../controllers/product.controllers'
import validateTokenMiddleware from '../../middleware/authentication.middleware'

const routes = Router()

routes
  .route('/')
  .get(controllers.getAllProducts)
  .post(validateTokenMiddleware, controllers.create)
routes
  .route('/:id')
  .get(validateTokenMiddleware, controllers.getOneProduct)
  .patch(validateTokenMiddleware, controllers.updateProduct)
  .delete(validateTokenMiddleware, controllers.deleteProduct)

export default routes
