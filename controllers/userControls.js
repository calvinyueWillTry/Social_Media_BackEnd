const User = require('../models/User');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find().populate("friends").populate("thoughts");
      res.json(users);//needs response otherwise nowhere to send to
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    console.log(req.params);
    try { 
      const user = await User.findOne({ _id: req.params.userId })
      .populate("friends").populate("thoughts").then((user)=>res.json( user));

    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    console.log(req.body)
    try {
      const UserData = await User.create(req.body);//username and email
      res.json(UserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateUser(req, res) {
    try {
      const useful = await User.findOneAndUpdate(
        { _id: req.params.userId },//username and email, id in url
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
      
  
      const users = await User.findOneAndDelete(
        { _id: req.params.userId },
        //id in url
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
        { $addToSet: { friends : req.params.friendId } },//userSchema is the parent, friends chid
        { runValidators: true, new: true }
      );
  
      if (!friend) {
        return res.status(404).json({ message: 'No friend found with this id!' });
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
        { $pull: { friends: req.params.friendId } },//removes from friends array
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
