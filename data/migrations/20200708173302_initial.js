
exports.up = async function(knex) {
    await knex.schema.debug().createTable('users', table => {
        table.increments()
        table.string('username').notNull().unique()
        table.string('password').notNull()
    })
}

exports.down = async function(knex) {
    await knex.schema.debug().dropTableIfExists('users')
}
