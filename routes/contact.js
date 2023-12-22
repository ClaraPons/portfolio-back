const express = require('express')
const router = express.Router()
const Contact = require('../models/contact')

router.get('/contact', async (req, res) => {
    try{
        const contacts = await Contact.find()
        res.json(contacts)
    }catch(error){
        console.log(error)
        res.status(500).json("Internal Server Error")
    }
})

router.post('/contact', async (req, res) => {
    try{
        const { firstName, lastName, email, message } = req.body

        const contact = new Contact({
            firstName,
            lastName,
            email, 
            message,
        })

        contact
            .save(contact)
            .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.status(500).send({
                message:
                  error.message || "Some error occurred while creating the Tutorial."
              });
        })

    } catch (error) {
        console.log(error)
        res.status(500).json("Internal Server Error")
    }
})

module.exports = router