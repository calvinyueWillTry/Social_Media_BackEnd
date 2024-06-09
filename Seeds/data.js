const userFirstName = [//20 people
    "Aaron", "Adam", "Alex", "Benjamin", "Caleb", 
    "Chris", "Dan", "David", "Eli", "Ethan", 
    "Evan", "Felix", "Gabriel", "Ian", "Isaac", 
    "Jacob", "James", "Jason", "Jeremy", "John"
];
const userLastName = [
    "Abel", "Abram", "Ananias", "Boaz", "Cyrus",
    "Eleazar", "Zeke", "Hiram", "Isaiah", "Job",
    "Joel", "Josh", "Levi", "Matthias", "Michael",
    "Nathanael", "Obed", "Paul", "Phillip", "Seth"
];
const initialPostsLife = ["What is the meaning of life?" ];
const initialPostRule = ["What is a guideline for your life?"];
const initialPostBDay = ["Today is my birthday!"]
const postingsLife = [//20 postings
    "Tom Lehrer: Life is like a sewer: what you get out of it depends on what you put into it.",
    "Forrest Gump: Life is like a box of chocolates. You never know what you're gonna get.",
    "From a poem: Life is like a river, it is always flowing, it can flow slowly or it can flow quickly, it can change courses but nothing can stop the river from flowing.",
    "Albert Einstein: Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "Confucius: Life is really simple, but we insist on making it complicated",
    "George Bernard Shaw: Life isn't about finding yourself. Life is about creating yourself."
];
const postingsRule = [
    "Golden Rule: Do to others as you would have them do to you",
    "We are incapable of loving another unless we love ourselves, just as we are incapable of teaching other self-discipline unless we ourselves are self-disciplined",
    "Leo Totsky: Happiness (fulfillment) is in your ability to love others",
    "Billy Graham: The greatest legacy one can pass onto one's descendants is not money or material things accumulated in one's life, but rather a legacy of character and faith.",
    "William Shakespeare: No legacy is so rich as honesty."
];
const postingsBDay = [
    "Happy birthday! I hope all your birthday wishes and dreams come true.",
    "Wishing you a very happy birthday!",
    "Forget the past; look forward to the future, for the best things are yet to come.",
    "Happy happy birthday!",
    "Congratulations for turning an year older!",
    "Congratulations for being an year closer to your death!",
    "You are older today than yesterday but younger than tomorrow, happy birthday!",
    "Wishing you a day filled with happiness and a year filled with joy. Happy birthday!",
    "You look younger than ever! Happy birthday!"
];
const randomItem_Arr = (array) => array[Math.floor(Math.random()*array.length)];
// Variable = (OBJECT to place value into) => OBJECT[rounds down to the nearest integer, ensure it's a valid index(generate 1 random floating-point number between 0 (inclusive) and 1 (exclusive(from the array))*the length of the array)]
const randomName = () => `${randomItem_Arr(userFirstName)} " " ${randomItem_Arr(userLastName)}`;
//concatenate the random first and last names with " " in between to add a space
const randomConverse_Life = (question, conversing) => {//first post line 13
    const resultsLife = [];
    //loop through the responses
    for (let i = 0; i < conversing; i++) {
        resultsLife.push({
            conversation: `${initialPostsLife[0]}: ${randomItem_Arr(postingsLife)}`//responses from lines 16-23
        })
    }
    return resultsLife;
};
const conversations = randomConverse_Life("What is the meaning of life?", 6);
console.log(conversations);
//repeat for the 2 other question and responses
const randomConverse_Rule = (questions, converse) => {

};
randomConverse_bday = (questioning, conversationing) => {
//not able to export? 

}

module.exports = {randomName, randomConverse_Life, randomConverse_Rule, randomConverse_bday}