const User = require('../models/User');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');
//e.g. ("-friends") would exclude the friends column
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const UserData = await User.create(req.body);
      res.json(UserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateUser(req, res) {
    try {
      const useful = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
  
      if (!useful) {
        return res.status(404).json({ message: 'No users found with this id!' });
      }
  
      res.json(useful);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async deleteUser(req, res) {
    try {
      const forgetMe = await User.findOne({ _id: req.params.userId });
  
      if (!forgetMe) {
        return res.status(404).json({ message: 'No thoughts originally logged with this id!' });
      }
  
      const users = await User.findOneAndDelete(
        { forgetMe: req.params.userId },
        { $pull: { forgetMe: req.params.userId } },
        { new: true }
      );
  
      if (!users) {
        return res
          .status(404)
          .json({ message: 'delete request created but no user with this id to delete from db' });
      }
  
      res.json({ message: 'User (and content?) successfully deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Add a video response
  async addFriend(req, res) {
    try {//friend is an existing user
      const friend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { userSchema: req.body } },
        { runValidators: true, new: true }
      );
  
      if (!friend) {
        return res.status(404).json({ message: 'No friends found with this id!' });
      }
  
      res.json(friend);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Remove video response
  async removeFriend(req, res) {
    try {
      const forgetThem = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { userSchema: { userId: req.params.userId } } },
        { runValidators: true, new: true }
      )
  
      if (!forgetThem) {
        return res.status(404).json({ message: 'No friends found with this id!' });
      }
  
      res.json(forgetThem);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};
