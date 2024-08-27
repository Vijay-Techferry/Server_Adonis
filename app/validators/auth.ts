import vine from '@vinejs/vine'

const password = vine.string().minLength(8)

export const registerValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .email()
      .normalizeEmail()
      .unique(async function (db, value) {
        const match = await db.from('fnf_login_users').select('id').where('email', value).first()
        return !match
      }),
    password,
    full_name: vine.string(),
    role_id: vine.number(),
  })
)

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email().normalizeEmail(),
    password,
  })
)
