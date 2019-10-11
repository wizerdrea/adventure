/* global fetch */

const adjList = ["Destroyer", "Inevitable", "Consumer", "Hungry", "Enraged", 
                 "Defeated", "Obliterator", "Undaunted", "Undone", "Believer",
                 "Undefeated", "Unbearable", "Champion", "Unfathomable", "Horrible",
                 "Terrible", "Imprissoned", "Honorable", "Noble", "Brave",
                 "Courageous", "Empowered", "Horrific", "Abomination", "Unforgettable",
                 "Forgettable", "Unfortunate", "Irate", "Infuriated", "Angered",
                 "Helpful", "Wrathful", "Annoyed", "Distressed", "Displeased",
                 "Anxious", "Agitated", "Raging", "Fierce", "Turbulent",
                 "Maddened", "Hateful", "Capable", "Steady", "Energetic",
                 "Able", "Unyeilding", "Stalwart", "Muscular", "Mighty",
                 "Unforgiven", "Alert", "Astute", "Imaginative", "Resourceful",
                 "Wise", "Calculating", "Dicerning", "Exceptional", "Keen",
                 "Profound", "Old", "Dark", "Masterful", "Clever",
                 "Experienced", "Masterful", "Careful", "Gifted", "Studious",
                 "Scholarly", "Egotistic", "Intellegent", "Thoughtful", "Enlightened",
                 "Perceptive"];


const getAdjactive = function() {
 let i = Math.floor((Math.random() * 76));
 return adjList[i];
};


 document.getElementById("inputForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var animaltype = "shibes";
  if (document.getElementById("dog?").checked) {
   animaltype = "shibes";
  }
  else if (document.getElementById("cat?").checked) {
   animaltype = "cats";
  }
  else if (document.getElementById("bird?").checked) {
   animaltype = "birds";
  }
  var url = "https://cors-anywhere.herokuapp.com" + "/shibe.online/api/" + animaltype + "?count=1&urls=true&httpsUrls=false";
  console.log(url, { mode: 'cors' });
  fetch(url)
   .then(function(response) {
    return response.json();
   }).then(function(json) {
    //var inner = "<div class=\"col-12 col-md-6 textbox\"><img src=\"" + json[0] + "\" height=\"200px\">";
    document.getElementById("animalOutput").innerHTML = "<img src=\"" + json[0] + "\" height=\"200px\">";
    var nameURL = "https://cors-anywhere.herokuapp.com/" + "namey.muffinlabs.com/name.json?";
    fetch(nameURL, { mode: 'cors' })
     .then(function(response) {
      return response.json();
     }).then(function(json) {
       document.getElementById("animalOutput").innerHTML += "<p class=\"animalName\">" + json[0] + " the " + getAdjactive() + "</p>";
     });
   });

 });
 