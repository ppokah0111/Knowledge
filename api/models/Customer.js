const mongoose = require('mongoose')
const customerSchema = new mongoose.Schema({

    name:{ type: String, required: true},
    email:{ type: String, required: true},
    phoneNumber:{ type: Number, required: true},
    location:{ type: String, required: true},
    subscribedToPackage:{ type: String, required: true},
    subscribedToDate:{ type: Date, required: true}
})

module.exports = mongoose.model('Customer', customerSchema)