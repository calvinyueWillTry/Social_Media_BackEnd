const connecting = require("../configuration/connection");
const users = require("../models/User");
const posters = require("../models/thoughts");
const {randomName, randomConverse_Life, randomConverse_Rule, randomConverse_bday} = require("./data");

connecting.on("error", (err) => err);//checks for error
connecting.once("openAccess", async () => {
    console.log('connected');
    let postCheck = await connecting.db.listCollections({name: "posts"}).toArray;
    //check if there have already been previous posts that currently exist
    if (postCheck.length > 0) {
        await connecting.dropCollection("names")
    };
    //check if there have already been previous users that currently exist
    let userCheck = await connecting.db.listCollections({name: "users"}).toArray;
    if (userCheck.length > 0) {
        await connecting.dropCollection("users");
    };

    const accounts = [];
    for (let i = 0; i < 20; i++) {
        const userPostings = randomConverse_Life(6);// generates random post about this for each user
        const totalName = randomName();
        const firstName = totalName.split("")[0];//binary of arrays?
        const lastName = totalName.split("")[1];
        accounts.push({
            firstName, lastName, userPostings
        });
    }
    const userData = await userModel.create(accounts);
})