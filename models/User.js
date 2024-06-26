const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        //match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/],
        //email matching validation
    },
    thoughts: [//name of array
        {
            type: Schema.Types.ObjectId,
            ref: 'thought',//Thought is preferred
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user',//all friends are users
        },
    ],
},
    {
        // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
            virtuals: true,
        },
        id: false,
    });
userSchema
    .virtual('friendCount')
    // Getter
    .get(function () {
        return `${this.friends.length}`;
    });
const User = model('user', userSchema);

module.exports = User;