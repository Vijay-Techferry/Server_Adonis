import FnfLoginUser from '#models/fnf_login_user'
import { loginValidator, registerValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async register({ request, response }: HttpContext) {
    try {
      const data = await request.validateUsing(registerValidator)
      const user = await FnfLoginUser.create(data)
      const token = await FnfLoginUser.accessTokens.create(user, ['*'])
      return {
        type: 'bearer',
        value: token.value!.release(),
      }
    } catch (e) {
      console.log(e)
      return response.badRequest(e)
    }
  }

  async login({ request }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)
    const user = await FnfLoginUser.verifyCredentials(email, password)
    return FnfLoginUser.accessTokens.create(user)
  }

  async logout({ auth }: HttpContext) {
    const user = auth.user!
    await FnfLoginUser.accessTokens.delete(user, user.currentAccessToken.identifier)
    return { message: 'success' }
  }

  async me({}: HttpContext) {}
}
