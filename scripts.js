// Clears any old output when a button is pressed.
const clear = function() {
    document.getElementById("output").innerHTML = "";
};

// Appends output to the #output div. More useful than printing to console. :-)
const output = function(str) {
    document.getElementById("output").innerHTML = str;
};

const restart = function() {
    clear();
    document.getElementById("restart").innerHTML = "<a id=\"reset\" href=\"/adventure/pages/play/index.html\">New Game?</a>";
};

const updateChoice1 = function(str) {
    document.getElementById("choice1").innerHTML = str;
};
const updateChoice2 = function(str) {
    document.getElementById("choice2").innerHTML = str;
};

var choices = [0, 0, 0];
var currentChoice = 0;
var gameOver = false;

document.getElementById("choice1").addEventListener("click", function(event) {
    choices[currentChoice] = 1;
    if (currentChoice < 2) {
        currentChoice++;
    }
    else
    {
        restart();
    }
    let newQuestions = getQestion(choices);
    updateChoice1(newQuestions[0]);
    updateChoice2(newQuestions[1]);
    output(getResult(choices));

});


document.getElementById("choice2").addEventListener("click", function(event) {
    choices[currentChoice] = 2;
    if (currentChoice < 2) {
        currentChoice++;
    }
    else
    {
        restart();
    }
    let newQuestions = getQestion(choices);
    updateChoice1(newQuestions[0]);
    updateChoice2(newQuestions[1]);
    output(getResult(choices));
});


const getResult = function(choices) {
    let result = "Are you Ready to begin?";
    if (choices[0] == 1) {
        if (choices[1] == 1) {
            if (choices[2] == 1) {
                result = "Suddenly you find yourself confronted by a large spider.  It tences preparing to spring but you advance, quickly closing the distance.  The struggle is brief but intense.  You find you way back out of the forest without incident.  You have survived!!!";
            }
            else if (choices[2] == 2) {
                result = "Suddenly you find yourself confronted by a large spider.  It tences preparing to spring.  You make a hasty retreat, but are too slow.  In a few moments you are nothing more than spider food.  You have died!!!";
            }
            else {
                result = "You quicken your pass, whatever might be watching you it can't be faster than you.  You hear scuttering behind you.  It seems desparite but it is falling behind.  You let out a laugh.  You've escaped!";
            }
        }
        else if (choices[1] == 2) {
            if (choices[2] == 1) {
                result = "You come out of your hiding spot and see the dragon on the path.  Now is your chance!  You have always wanted to fight a dragon!  You attack.  Unfortunately yoiu are not in a fairytale.  The fight is short, and you end as a cinder.  You have died!!!";
            }
            else if (choices[2] == 2) {
                result = "As you come out of your hiding spot you see the dragon.  You know if you don't take this chance you will never agian have the opportunity to fight one.  So never it is.  You carfully make you way back and exit the forest.  You have survived!!!";
            }
            else {
                result = "You slow your pace hoping to avoid any unwanted attention.  Then you here them.  A thousand quites squeeks.  You slow your pace even then hide in a thicket.  A hoard of rats runs through where you had been walking but fail to notice you in the trees.";
            }
        }
        else {
            result = "You continue into the forest unsure of what you will find but the lure of adventure is too strong.  As you continue into the gloom of the forest you start to get the feeling something is watching you.";
        }
    }
    else if (choices[0] == 2) {
        if (choices[1] == 1) {
            if (choices[2] == 1) {
                result = "211";
            }
            else if (choices[2] == 2) {
                result = "212";
            }
            else {
                result = "210";
            }
        }
        else if (choices[1] == 2) {
            if (choices[2] == 1) {
                restart();
            }
            else if (choices[2] == 2) {
                result = "222";
            }
            else {
                result = "220";
            }
        }
        else {
            result = "A sense of fear and foreboding fill you as you look down the over-grown path.  Slowly you begin to back away hoping nothing will happen.";
        }
    }
    return result;
};

const getQestion = function(choices) {
    let result = ["-", "-"];
    if (choices[2] != 0) {
        result = ["-", "-"];
    }
    else if (choices[0] == 0) {
        result = ["Continue", "Stop"];
    }
    else if (choices[0] == 1) {
        if (choices[1] == 0) {
            result = ["Faster", "Slower"];
        }
        else if (choices[1] == 1) {
            result = ["Advance", "Retreat"];
        }
        else {
            result = ["Now", "Never"];
        }
    }
    else if (choices[0] == 2) {
        if (choices[1] == 0) {
            result = ["200", "200"];
        }
        else if (choices[1] == 1) {
            result = ["210", "210"];
        }
        else {
            result = ["220", "220"];
        }
    
    }
    return result;
};
