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

routeCollector.map((route) => router.resource(route?.path, route?.controller))
