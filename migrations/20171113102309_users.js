
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
        table.increments();
        table.string('username').unique().notNullable();
        table.string('email').unique().notNullable();
        table.string('timezone').notNullable();
        table.string('password_digest').notNullable();
        table.timestamps();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
