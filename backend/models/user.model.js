const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {  // 유저네임 유효성 검사
        type: String,
        required: true,
        unique: true,
        trim: true, 
        minlength: 3
    },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;