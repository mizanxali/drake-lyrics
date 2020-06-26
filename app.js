const app = require('genius-lyrics-api');
const express = require('express');
const router = express();

router.set("view engine", "ejs");
router.use(express.static(__dirname + "/public"));

const songNames = ["Omertà", "Money in the Grave", "Diplomatic Immunity", "Deep Pockets", "When To Say When", "Chicago Freestyle", "Not You Too", "Toosie Slide", "Desires", "Time Flies", "Landed", "Pain 1993", "Losses", "From Florida With Love", "Demons", "War", "Survival", "Nonstop", "Elevate", "Emotionless", "God's Plan", "I'm Upset", "8 Out of 10", "Mob Ties", "Can't Take A Joke", "Sandra's Rose", "Talk Up", "Is There More", "Peak", "Summer Games", "Jaded", "Nice For What", "Finesse", "Ratchet Happy Birthday", "That's How You Feel", "Blue Tint", "In My Feelings", "Don't Matter To Me", "After Dark", "Final Fantasy", "March 14", "Free Smoke", "No Long Talk", "Passionfruit", "Jorja Interlude", "Get It Together", "Madiba Riddim", "Blem", "4422", "Gyalchester", "Skepta Interlude", "Portland", "Sacrifices", "Nothings Into Somethings", "Teenage Fever", "KMT", "Lose You", "Can't Have Everything", "Glow", "Since Way Back", "Fake Love", "Ice Melts", "Do Not Disturb", "Keep the Family Close", "9", "U With Me?", "Feel No Ways", "Hype", "Weston Road Flow", "Redemption", "With You", "Faithful", "Still Here", "Controlla", "One Dance", "Grammys", "Child's Play", "Pop Style", "Too Good", "Summers Over Interlude", "Fire & Desire", "Views", "Hotline Bling", "Legend", "Energy", "10 Bands", "Know Yourself", "No Tellin'", "Madonna", "6 God", "Star67", "Preach", "Wednesday Night Interlude", "Used To", "6 Man", "Now & Forever", "Company", "You & The 6", "Jungle", "6PM in New York", "How Bout Now", "My Side", "Tuscan Leather", "Furthest Thing", "Started from the Bottom", "Wu-Tang Forever", "Own It", "Worst Behavior", "From Time", "Hold On, We're Going Home", "Connect", "The Language", "305 to My City", "Too Much", "Pound Cake / Paris Morton Music 2", "Come Thru", "All Me", "The Motion", "Over My Dead Body", "Shot for Me", "Headlines", "Crew Love", "Take Care", "Marvin's Room", "Buried Alive Interlude", "Under Ground Kings", "We'll Be Fine", "Make Me Proud", "Lord Knows", "Cameras", "Good Ones Go (Interlude)", "Doing It Wrong", "The Real Her", "Look What You've Done", "HYFR", "Practice", "The Ride", "The Motto", "Hate Sleeping Alone", "Fireworks", "Karaoke", "The Resistance", "Over", "Show Me a Good Time", "Up All Night", "Fancy", "Shut It Down", "Unforgettable", "Light Up", "Miss Me", "Cece's Interlude", "Find Your Love", "Thank Me Now", "9AM in Dallas", "Lust For Life", "Houstatlantavegas", "Successful", "Let's Call It Off", "November 18th", "Ignant Shit", "A Night Off", "Say What's Real", "Little Bit", "Best I Ever Had", "Unstoppable", "Uptown", "Sooner Than Later", "Bria's Interlude", "The Calm", "Brand New", "Congratulations", "0 To 100 / The Catch Up"];

router.get("/", function(req, res){
	let bars;
	const options = {
		apiKey: '2egTOxo3Kzb_prKK0GXjaBvOEmo2jWGTumEayUsTMlRqgJLykhou7SM5WfWgjCWt',
		title: songNames[Math.floor(Math.random() * songNames.length)],
		artist: 'Drake',
		optimizeQuery: false
	};
	app.getLyrics(options).then((lyrics) => {
	  if(lyrics != null) {
	    var arr = lyrics.split("\n");
	    for (var i = arr.length - 1; i >= 0; i--) {
	        if (arr[i].charAt(0) == "[" || arr[i].charAt(0) == "") {
	            arr.splice(i, 1);
	        }
	    }
	    var num = Math.floor(Math.random() * arr.length);
			bars = [
				arr[num],
				arr[num+1],
				arr[num+2],
				arr[num+3]
			];
			res.render("index", {bars: bars});
	  }
		else {
			bars = ["Oops! Something went wrong."];
			res.render("index", {bars: bars});
		}
	});
});

router.listen(process.env.PORT || 3000, process.env.IP, function(){
  console.log("server is listening...");
});
