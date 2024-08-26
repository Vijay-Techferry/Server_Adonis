import FnfLoginUsersController from '#controllers/fnf_login_users_controller'
import FnfUsersController from '#controllers/fnf_users_controller'

export const routeCollector = [
  { path: '/createUser', controller: FnfLoginUsersController },
  { path: '/users', controller: FnfUsersController },
]
