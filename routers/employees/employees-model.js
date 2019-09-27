const db = require('../../database/db-config.js')

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}


function find() {
    return db('employees');
}

function findById() {
    
}

function add(employee) {
    return db('employees').insert(employee, 'id')
}

function update() {
    
}

function remove() {
    
}