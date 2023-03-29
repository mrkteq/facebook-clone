let database = [
    {
        username: "Mark",
        password: "abc"
    }
];

let newsFeed = [
    {
        username: "Mike",
        timeline: "Something really coooool happened!"
    },
    {
        username: "Joan",
        timeline: "I'm so tired from all that learning!"
    },
    {
        username: "Mark",
        timeline: "JavaScript is sooooo coool!"
    }
];

let userNamePrompt = prompt("What's your name?");
let userPassPrompt =  prompt("What's your password?");

let isUserValid = function(user, pass) {
    for(let i = 0; i < database.length; i++) {
        if(user === database[i].username && pass === database[i].password) {
            return true;
        } 
    }
    return false;
};

let signIn = function(user, pass) {
    if(isUserValid(user, pass)) {
        // get h1 and replace it with the user's name
        let h1 = document.querySelector("h1");
        h1.textContent = "Welcome " + user + "! Here's your news feed: "
         // get main section
        let main = document.querySelector("main");
        // display the news feed in the main section
        for(let i = 0; i < newsFeed.length; i++) {
            let p = document.createElement("p");
            p.textContent = newsFeed[i].timeline + " - " + newsFeed[i].username;
            main.appendChild(p);
        }

    } else {    
        alert("Sorry, wrong username and password!");
    }
};

signIn(userNamePrompt, userPassPrompt);