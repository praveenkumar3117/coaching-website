const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const teacherSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, unique: true, required: true },
        DOB : {type: Date, required: true},
        subject: { type: String, required: true },
        password: { type: String, required: true },
        phone: { type: Number, required: true },
        tCode: { type: String, required: true, unique: true },
        pic: {
            type: "String",
            default:
                "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
    },
    { timestaps: true }
)

teacherSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

teacherSchema.pre("save", async function (next) {
    if (!this.isModified) {
        next()
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

const Teaacher = mongoose.model("Teacher", teacherSchema)

module.exports = Teaacher