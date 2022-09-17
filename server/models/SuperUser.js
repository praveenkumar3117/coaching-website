const mongoose = require("mongoose")

const SuperUserSchema = mongoose.Schema(
    {
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true },
    },
    { timestaps: true }
)

SuperUserSchema.methods.matchPassword = async function (enteredPassword) {
    return await (enteredPassword === this.password)
}

const SuperUser = mongoose.model("SuperUser", SuperUserSchema)

module.exports = SuperUser