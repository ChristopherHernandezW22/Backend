exports.up = function(knex) {
    return knex.schema.createTable('employees', tbl => {
      tbl.increments();
  
      tbl
        .string('username', 25)
        .notNullable()
        .unique();
      tbl.string('password', 50).notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('employees');
  };
  
