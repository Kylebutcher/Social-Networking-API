const { Schema, model } = require('mongoose');
const reactionSchema = require('../models/Reaction');
const moment = require('moment');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: () => moment().format('MMMM Do YYYY, h:mm:ss a')
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: { getters: true }, 
    id: false, 
  },
);

thoughtSchema
.virtual('reactionCount')
// Getter 
.get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;