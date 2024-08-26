import FnfUser from '#models/fnf_user'
import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class FnfUsersController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const fnfUsers = await db.from('fnf_users').leftJoin('image', 'imageId', 'image_id')
    return fnfUsers
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const fnfUser = new FnfUser()
    fnfUser.fill(request.all())
    await fnfUser.save()
    return fnfUser
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

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
  async destroy({ params }: HttpContext) {}
}
