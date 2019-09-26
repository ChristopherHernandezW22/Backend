exports.up = function(knex) {
    return knex.schema
    .createTable('login', tbl => {
      tbl.increments();
      tbl
        .string('username', 25)
        .notNullable()
        .unique();
      tbl.string('password', 50).notNullable();
    })
    .createTable('departments', tbl => {
      tbl.increments();
      tbl.string('department', 25)
    })
    .createTable('employees', tbl => {
      tbl.increments();
      tbl.string('name')
        .notNullable();
      tbl.string('job_title', 25)
        .notNullable();
      tbl.integer('department_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('departments')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
    .createTable('team_builder', tbl => {
      tbl.increments();
      tbl.integer('employee_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('employees')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      tbl.integer('department_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('departments')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('team_builder')
      .dropTableIfExists('empoyees')
      .dropTableIfExists('departments')
      .dropTableIfExists('login');
  };
  
