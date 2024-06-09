const connecting = require("../configuration/connection");
const Users = require("../models/User");
const Posters = require("../models/thoughts");
const {randomName, randomConverse_Life, randomConverse_Rule, randomConverse_bday} = require("./data");
console.log('connect');//connect!
connecting.on("error", (err) => err);//checks for error. Stuck here
connecting.once("open", async () => {
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
    const userData = await Users.create(accounts);
    await Posters.create({
        username, email: randomName,
        thoughts: randomConverse_Life,//how to randomly select from the accounts?
        friends: randomName
    });
    console.table(userData);
    process.exit(0);
})