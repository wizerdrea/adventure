const clear = function() {
    document.getElementById("output").innerHTML = "";
};

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
                result = "Suddenly, you find yourself confronted by a large spider.  It tenses preparing to spring, but you advance quickly closing the distance.  The struggle is brief but intense.  You find you way back out of the forest without incident.  You have survived!!!";
            }
            else if (choices[2] == 2) {
                result = "Suddenly, you find yourself confronted by a large spider.  It tenses preparing to spring.  You make a hasty retreat but are too slow.  In a few moments you are nothing more than spider food.  You have died!!!";
            }
            else {
                result = "You quicken your pace, whatever might be watching you it can't be faster than you.  You hear scuttering behind you.  It seems desperate, but it is falling behind.  You let out a laugh.  You've escaped!";
            }
        }
        else if (choices[1] == 2) {
            if (choices[2] == 1) {
                result = "You come out of your hiding spot and see a dragon on the path.  Now is your chance!  You have always wanted to fight a dragon!  You attack.  Unfortunately, you are not in a fairytale.  The fight is short, and you end as a cinder.  You have died!!!";
            }
            else if (choices[2] == 2) {
                result = "As you come out of your hiding spot, you see a dragon.  You know if you don't take this chance you will never again have the opportunity to fight one.  So never it is.  You carefully make you way back and exit the forest.  You have survived!!!";
            }
            else {
                result = "You slow your pace hoping to avoid any unwanted attention.  Then you hear them.  A thousand quiets squeaks.  You slow your pace even more then hide in a thicket.  A hoard of rats runs through where you had been but fail to notice you in the trees.";
            }
        }
        else {
            result = "You continue into the forest unsure of what you will find, but the lure of adventure is too strong.  As you continue into the gloom of the forest, you start to get the feeling something is watching you.";
        }
    }
    else if (choices[0] == 2) {
        if (choices[1] == 1) {
            if (choices[2] == 1) {
                result = "The creatures suddenly stop chasing you as a shadow blocks out the moon.  You dive for cover under a bush.  The moon returns and everything seems quiet so you start going home.  You don't even notice the dragon until it is too late.  You have died!!!";
            }
            else if (choices[2] == 2) {
                result = "The creatures suddenly stop chasing you as a shadow blocks out the moon.  You dive for cover under a bush.  The moon returns and everything seems quiet, but nonetheless, you wait silently until morning and make your way home.  You have Survived!!!";
            }
            else {
                result = "You feel a breath of air on the back of your neck.  You spin around to find three strange humanoid creatures blocking your path.  You attempt to surprise them by charging through their group.  You get through but hear them chasing you!";
            }
        }
        else if (choices[1] == 2) {
            if (choices[2] == 1) {
                result = "After losing your pursuers, you notice it seems too quiet.  Quickly you climb a tree to find safety.  Then with a loud thud, a dragon lands and tears your tree out of the ground.  You know this is the end of you.  You have died!!!";
            }
            else if (choices[2] == 2) {
                result = "You've lost your pursuers, but something seems wrong.  You lunge under a fallen tree in time to avoid a giant spider's grab for you.  The spider quickly begins constructing a web around the tree, and you realize you dodged the wrong way.  You have died!!!";
            }
            else {
                result = "In your slow retreat you bump into something.  Quickly turning you find several strange creatures.  Desperately, you try to run around them dodging their attempts to grab you.  Somehow in the confusion you find yourself in the forest.";
            }
        }
        else {
            result = "A sense of fear and foreboding fill you as you look down the overgrown path.  Slowly, you begin to back away hoping nothing will happen.";
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
            result = ["Through", "Around"];
        }
        else if (choices[1] == 1) {
            result = ["Go", "Wait"];
        }
        else {
            result = ["Up", "Down"];
        }
    
    }
    return result;
};
