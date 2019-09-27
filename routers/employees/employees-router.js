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


// Add employee

router.post('/', async (req, res) => {
    const employeeData = req.body;

    try{
        const [id] = await employeeModel.add(employeeData)
        res.status(201).json({ created: id })
    } catch (err){
        res.status(500).json({message: 'Failed to create new employee.'})
    }
})





module.exports = router;