const express = require('express');

const employeeModel = require('./employees-model.js');

const router = express.Router();


// Get employees

router.get('/', (req, res) => {
    employeeModel.find()
    .then(employees => {
        res.status(200).json(employees);
      })
      .catch(error => {
        res.status(500);
      });
})





module.exports = router;