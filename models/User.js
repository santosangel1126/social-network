const { Schema, model} =require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    { 
        userName: {
            type: String
        },
        createdAt: {
            type:String
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        reactions: [],
        reactionCount: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        //prevents virtuals from createing duplicate of _id as `id`
        id: false
    }
);

// get total count of comments and replies on retrieval
UserSchema.virtual('reaction').get(function() {
    return this.reactionCount.length;
});

const User = Model('User', UserSchema);

module.exports =User;