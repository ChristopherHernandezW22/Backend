exports.seed = function(knex, Promise) {
  return knex('departments').insert([
    { department : 'engineering' },  
    { department : 'marketing' },
    { department : 'hr' },
    { department : 'finance' },
    { department : 'research' },
    { department : 'operations' },
    { department : 'sales' },
    { department : 'product' }, 
    { department : 'legal' } 
  ]);
};
