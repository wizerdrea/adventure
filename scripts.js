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
    let newQuestions = getQestion(choices);
    updateChoice1(newQuestions[0]);
    updateChoice2(newQuestions[1]);
    output(getResult(choices));
});


const getResult = function(choices) {
    let result = "000";
    if (choices[0] == 1) {
        if (choices[1] == 1) {
            if (choices[2] == 1) {
                result = "111";
            }
            else if (choices[2] == 2) {
                result = "112";
            }
            else {
                result = "110";
            }
        }
        else if (choices[1] == 2) {
            if (choices[2] == 1) {
                result = "121";
            }
            else if (choices[2] == 2) {
                result = "122";
            }
            else {
                result = "120";
            }
        }
        else {
            result = "100";
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
                result = "221";
            }
            else if (choices[2] == 2) {
                result = "222";
            }
            else {
                result = "220";
            }
        }
        else {
            result = "200 A sense of fear and foreboding fill you as you look down the over-grown path.  Slowly you begin to back away hoping nothing will happen.";
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
        result = ["Continue", "Retreat"];
    }
    else if (choices[0] == 1) {
        if (choices[1] == 0) {
            result = ["100", "100"];
        }
        else if (choices[1] == 1) {
            result = ["110", "110"];
        }
        else {
            result = ["120", "120"];
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
