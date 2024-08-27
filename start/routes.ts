/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { routeCollector } from './route_collector.js'
import { middleware } from './kernel.js'
const AuthController = () => import('#controllers/auth_controller')

routeCollector.map((route) => router.resource(route?.path, route?.controller))

router.post('/register', [AuthController, 'register']).as('auth.register')

router.post('/login', [AuthController, 'login']).as('auth.login')

router.delete('/logout', [AuthController, 'logout']).as('auth.logout').use(middleware.auth())
