import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class FnfUser extends BaseModel {
  @column({ isPrimary: true })
  declare userId: number

  @column({ columnName: 'imageId' })
  declare imageId: string
  @column({ columnName: 'phoneNum' })
  declare phoneNum: string
  @column({ columnName: 'mobileNum' })
  declare mobileNum: string
  @column({ columnName: 'license' })
  declare license: string
  @column({ columnName: 'operationId' })
  declare operationId: string
  @column({ columnName: 'message' })
  declare message: string
  @column({ columnName: 'firstName' })
  declare firstName: string
  @column({ columnName: 'lastName' })
  declare lastName: string
}
