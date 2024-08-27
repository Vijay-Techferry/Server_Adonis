import FnfLoginUser from '#models/fnf_login_user'
import type { HttpContext } from '@adonisjs/core/http'

export default class FnfLoginUsersController {
  /**
   * Display a list of resource
   */
  async index({ request }: HttpContext) {
    const fnfLoginUsers = await FnfLoginUser.all()
    return fnfLoginUsers
  }

  /**
   * Display form to create a new record
   */
  async create({request,response}: HttpContext) {
    // try {
    //   const user = new FnfLoginUser()
    //   user.full_name = request.input('fullName')
    //   user.email = request.input('email')
    //   user.password = request.input('password')
    //   user.role_Id = request.input('roleId')
    //   await user.save()
    //   return user
    // } catch (e) {
    //   return response.badRequest(e)
    // }
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    try {
      const user = new FnfLoginUser()
      user.full_name = request.input('full_name')
      user.email = request.input('email')
      user.password = request.input('password')
      user.role_Id = request.input('role_Id')
      await user.save()
      return user
    } catch (e) {
      return response.badRequest(e)
    }
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const fnfLoginUser = await FnfLoginUser.find(params?.id)
    return fnfLoginUser
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const user: any = await FnfLoginUser.find(params?.id)
    console.log(params, 'iii')
    if (!user) {
      return response.notFound({ message: 'User not found' })
    }

    await user.delete()

    return response.ok({ message: 'User deleted successfully.' })
  }
}
