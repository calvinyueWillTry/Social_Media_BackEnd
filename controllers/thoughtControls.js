const { Thought, User } = require('../models');

module.exports = {
  async getThoughts(req, res) {
    console.log(req, res);//not reaching here
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const think = await Thought.findOne({ _id: req.params.thoughtId })

      if (!think) {
        return res.status(404).json({ message: 'No thoughts logged with that ID' });
      }

      res.json(think);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new thought from a specific username in the req.body
  async createThought(req, res) {
    try {
      const thinker = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { username: req.body.username },
        { $addToSet: { thoughts:thinker._id } },//thoughtText in model?
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: 'thought created, but found no user with that ID',
        });
      }

      res.json('Rendered the thought! 🎉');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async updateThought(req, res) {
    try {
      const thinking = await Thought.findOneAndUpdate(
        { username: req.body.username },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      await User.findOneAndUpdate( //need to update the thought within the User profile too
        { username: req.body.username },
        {$addToSet: {thoughts: thinking._id}},
        { runValidators: true, new: true }
      )
      if (!thinking) {
        return res.status(404).json({ message: 'No thoughts logged with this id!' });
      }

      res.json(thinking);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async deleteThought(req, res) { //can't find the ids of thoughts
    try {
      console.log("deleteThought", req.params.thoughtId);
      const neverMind = await Thought.findOneAndDelete(
        { _id: req.params.thoughtId }
       
      );
      if (!neverMind) {
        return res.status(404).json({ message: 'No thoughts originally logged with this id!' });
      }
      const users = await User.findOneAndUpdate( 
        { thoughts: req.params.thoughtId },
        {$pull: {thoughts: req.params.thoughtId}}, 
        {new: true}
        )

      if (!users) {
        return res
          .status(404)
          .json({ message: 'delete request created but no user with this id to delete from' });
      }

      res.json({ message: 'Thought successfully deleted!' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Add a response
  async addReaction(req, res) {//comparable to addFriend post route 
    try {
      const thoughtful = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },//response or reactions ?
        { runValidators: true, new: true }
      );//reactionBody and username - NOT UPDATING

      if (!thoughtful) {
        return res.status(404).json({ message: 'No thoughts logged with this id!' });
      }

      res.json(thoughtful);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Remove response
  async removeReaction(req, res) {//comparable to removeFriend, except there's nothing to remove right now
    try {
      const forgetThatThought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      )

      if (!forgetThatThought) {
        return res.status(404).json({ message: 'No thoughts logged with this id!' });
      }

      res.json(forgetThatThought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
