const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  message: String,
});

contactSchema.method("toJSON", function(){
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
})

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
