Social Network API using NoSQL
See the video of the walkthrough to see how it all functions together. 

## Overview of routes
It starts with the Models folder, User, Thought and Reaction. User contain both the Thought and User arrays as options in its model, although only the username and email are required. 
In the Thought model, the Reaction array is also included as an option in the model, although only the username and thoughtText are required. From there, Both the User and Thought models are routed in their index, given the url ID of "/users" and "/thoughts" respectively.
At the same time, the Thought and User models are being exported to the controller folder. Here, the functions and their coding to enable these routes to perform different functions, which are all contained within module.exports={}; so that these can be exported.
In the meantime, the variable "router" is used to send all of these to the index folder in the routes folder. With "/api" path preceding, This allows access to the userRoutes and thoughtRoutes files, with each route given a string name to be used in the URL.   
These are finally all sent to the server (root level index) file, to allow it to have a url to even be utilized.

## Models folder
Within the models, there are minimal requirements to fulfill the criteria for inputting all CRUD routes. User requires username and email, Thought requires username and thoughtText (which User put out that thought), and Reaction only requires the thoughtId in the URL, followed by "/reactions" with the reactionBody (reaction text to the thought posted) and username (who wrote it) in the req.body.

## Controllers
This is where the functions are created and defined. Each has a keyword method. For example, getUser requires find(), getSingleUser requires findOne(), createUser requires create(), updateUser and addFriend and removeFriend requires findOneAndUpdate(), deleteUser requires findOneAndDelete(). Within the paranthesis following the method(is the parameters required, and how to address those). For example, Some require specific id of either the User or Thought or Reaction, others require a req.body to be able to put the context (e.g. thoughtText, reactionBody, etc.) into the array. 

## Routes
The thoughtRoutes and userRoutes functions are exported here. These are then followed by the router.route("name of string for url"). the router.route establishes /api/thoughts or /api/users. The route that follows after, is given a "string name", then a CRUD method(with the specific function added here as a parameter).
