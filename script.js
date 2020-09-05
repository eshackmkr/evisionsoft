var database =[ {
	username: "andrei1",
	password: "supersecret"}];

var newsFeed = [
	{ username:"Bobby",
	  timeline:"So tired from all that learning"

},
{ username:"julie",
	  timeline:"java script is too interesting"
}

];

var userNamePrompt = prompt("what is your user name?");
var passwordPrompt = prompt("what is your passoword?");

function singIn(user,pass){
	if (user === database[0].username &&
		pass=== database[0].password) {
		console.log(newsFeed);
	} else {
		alert("sorry, wrong username and password")
	}

}sin