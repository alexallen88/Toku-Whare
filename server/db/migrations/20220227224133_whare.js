/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('whare', (table) => {
    table.increments('id')
    table.string('description')
    table.string('questionPrompts')
    table.string('color')
    table.string('resourceLinks')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('whare')
}