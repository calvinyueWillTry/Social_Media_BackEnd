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
const userEmails = [
    "abc123@yahoo.com", "222def@hotmail.com", "345ghi@gmail.com", "444hij@comcast.net", "klm543@uoregon.edu",
    "aaa111@yahoo.com", "nop567@hotmail.com", "hip789@gmail.com", "432pqr@comcast.net", "stu890@uoregon.edu",
    "uvw001@yahoo.com", "012wxy@hotmail.com", "yza321@gmail.com", "135bdf@comcast.net", "246ceg@uoregon.edu",
    "3a5c7b@yahoo.com", "4d5e6f@hotmail.com", "dent15@gmail.com", "mongo@comcast.net", "mongoDB@uoregon.edu"
];
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
const randomName = () => {
    `${randomItem_Arr(userFirstName)} ${userLastName}`
};
const randomEmail = () => { `${randomItem_Arr(userEmails)}` };
const 
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`