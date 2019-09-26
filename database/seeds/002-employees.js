
exports.seed = function(knex, Promise) {
  return knex('employees').insert([
    { 
      name: 'Mario Speedwagon',
      job_title: 'help desk',
      department_id: '6',
     },
     { 
      name: 'Rick O Shea',
      job_title: 'writer',
      department_id: '2',
     },
     { 
      name: 'Al Dente',
      job_title: 'accountant',
      department_id: '4',
     },
     { 
      name: 'Phil Harmonic',
      job_title: 'lead researcher',
      department_id: '5',
     },
     { 
      name: 'Gene Poole',
      job_title: 'frontend developer',
      department_id: '1',
     },
     { 
      name: 'Barry Cuda',
      job_title: 'sale engineer',
      department_id: '7',
     },
     { 
      name: 'RMary Goround',
      job_title: 'ux researcher',
      department_id: '8',
     },
     { 
      name: 'Bobby Pin',
      job_title: 'ip attorney',
      department_id: '9',
     },
        
  ]);
};
