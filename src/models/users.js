const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require('bcryptjs')

const Users = new Schema({
    name:       { type: String, require: true },
    password:   { type: String, require: true },
    cellphone:  { type: String, require: true},
    date:       { type: Date, default: Date.now },
    type:       { type: String, default: "user"},
})

Users.methods.setPassword = async function(password) {
    const salt = await bcrypt.genSalt(10)
    const hash = bcrypt.hash(password, salt)
    this.password = hash
}

Users.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('User', Users)