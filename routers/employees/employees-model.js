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

function add() {
    
}

function update() {
    
}

function remove() {
    
}