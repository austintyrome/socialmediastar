const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const thoughtSchema = require('./Thought');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 20,
    },
    email: {
      type: String,
      required: true,
      max_length: 30,
    },
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    reactions: [reactionSchema],
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', UserSchema);

module.exports = User;