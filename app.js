const app = require('genius-lyrics-api');
const express = require('express');
const router = express();
const path = require('path')

const songNames = [{title: "Omertà", spotifyURI: "3kCwyvhvVTyehIzYN2I0nF"},
				   {title: "Money in the Grave", spotifyURI: "5ry2OE6R2zPQFDO85XkgRb"},
				   {title: "Diplomatic Immunity", spotifyURI: "4haJoBPbPj9QFKNpp9e8kx"},
				   {title: "Deep Pockets", spotifyURI: "3IvMYBE7A3c7to1aEcfFJk"},
				   {title: "When To Say When", spotifyURI: "5TCBWmEBrin7etRa4Lswr1"},
				   {title: "Chicago Freestyle", spotifyURI: "4wVOKKEHUJxHCFFNUWDn0B"},
				   {title: "Not You Too", spotifyURI: "3Q4gttWQ6hxqWOa3tHoTNi"},
				   {title: "Toosie Slide", spotifyURI: "466cKvZn1j45IpxDdYZqdA"},
				   {title: "Desires", spotifyURI: "7eYAHC0RbBF9eaqWzT34Aq"},
				   {title: "Time Flies", spotifyURI: "5H4mXWKcicuLKDn4Jy0sK7"},
				   {title: "Landed", spotifyURI: "3KixNgUEaDtrKJVzdqjU5q"},
				   {title: "Pain 1993", spotifyURI: "6Kj17Afjo1OKJYpf5VzCeo"},
				   {title: "Losses", spotifyURI: "6fLVTVaHWaEfVKfEgbkf4D"},
				   {title: "From Florida With Love", spotifyURI: "0YkUwXxnTkeJBvt5upeEtP"},
				   {title: "Demons", spotifyURI: "05aZ9sAU1YXndHv0FMi9iW"},
				   {title: "War", spotifyURI: "1I55Ea0zVoSKs6MqW7DQ3i"},
				   {title: "Survival", spotifyURI: "2yg9UN4eo5eMVJ7OB4RWj3"},
				   {title: "Nonstop", spotifyURI: "0TlLq3lA83rQOYtrqBqSct"},
				   {title: "Elevate", spotifyURI: "3szf2z1Cy1QMrtHrbn8rz9"},
				   {title: "Emotionless", spotifyURI: "5Psnhdkyanjpgc2P8A5TSM"},
				   {title: "God's Plan", spotifyURI: "6DCZcSspjsKoFjzjrWoCdn"},
				   {title: "I'm Upset", spotifyURI: "3qN5qMTKyEEmiTZD38BNTT"},
				   {title: "8 Out of 10", spotifyURI: "0zqy3ss4CwD6u4QPksS0nI"},
				   {title: "Mob Ties", spotifyURI: "7rC5Pl8rQSX4myONQHYPBK"},
				   {title: "Can't Take A Joke", spotifyURI: "1dUHF4RyMmMTveJ0Rby6Xm"},
				   {title: "Sandra's Rose", spotifyURI: "6cblRiEGDRNZgowcm951R3"},
				   {title: "Talk Up", spotifyURI: "4ksuI04WMvUnJbHQjgs3L5"},
				   {title: "Is There More", spotifyURI: "1Tnw0ItH1Macok8gblnPPd"},
				   {title: "Peak", spotifyURI: "11L064movtyopGdLiX4sVg"},
				   {title: "Summer Games", spotifyURI: "4HG1YiGBseVKzjyKcmAJen"},
				   {title: "Jaded", spotifyURI: "4c2xt1trwYZpMqPWY35Xi9"},
				   {title: "Nice For What", spotifyURI: "3CA9pLiwRIGtUBiMjbZmRw"},
				   {title: "Finesse", spotifyURI: "2WP8G2pdddDmnh1xbfKBOI"},
				   {title: "Ratchet Happy Birthday", spotifyURI: "4SUwJA3eUVNHExxMPEUhQe"},
				   {title: "That's How You Feel", spotifyURI: "41a7dZcq30Ss5kPMayWRV0"},
				   {title: "Blue Tint", spotifyURI: "4n1bdaKwynQndm47x5HqWX"},
				   {title: "In My Feelings", spotifyURI: "2G7V7zsVDxg1yRsu7Ew9RJ"},
				   {title: "Don't Matter To Me", spotifyURI: "6G8kHiVZ1jW7vHMPVRNZU0"},
				   {title: "After Dark", spotifyURI: "3mvYQKm8h6M5K5h0nVPY9S"},
				   {title: "Final Fantasy", spotifyURI: "44Du2IM1bGY7dicmLfXbUs"},
				   {title: "March 14", spotifyURI: "09lmraDvzBT3pUQ2rUtJzK"},
				   {title: "Free Smoke", spotifyURI: "05KOgYg8PGeJyyWBPi5ja8"},
				   {title: "No Long Talk", spotifyURI: "6CfrYuD3YRDYdYvH9jNtXY"},
				   {title: "Passionfruit", spotifyURI: "5mCPDVBb16L4XQwDdbRUpz"},
				   {title: "Jorja Interlude", spotifyURI: "13e6f8t7RKXuxZ0JdaaJRG"},
				   {title: "Get It Together", spotifyURI: "7y6c07pgjZvtHI9kuMVqk1"},
				   {title: "Madiba Riddim", spotifyURI: "76gUmNLXGQVOsGhfcshkFP"},
				   {title: "Blem", spotifyURI: "2XlHu0HcujBCkWMdIAvrqt"},
				   {title: "Gyalchester", spotifyURI: "6UjfByV1lDLW0SOVQA4NAi"},
				   {title: "Skepta Interlude", spotifyURI: "2dfqS3MRtbLZSZA1IL8xY5"},
				   {title: "Portland", spotifyURI: "2bjwRfXMk4uRgOD9IBYl9h"},
				   {title: "Nothings Into Somethings", spotifyURI: "6MbH1QiphMCPTqVEVC7UYi"},
				   {title: "Teenage Fever", spotifyURI: "6n3HGiq4v35D6eFOSwqYuo"},
				   {title: "KMT", spotifyURI: "2jTujnt0y344ai1rNOywgr"},
				   {title: "Can't Have Everything", spotifyURI: "5f5r2N4Lp9WoULWPH9zp2W"},
				   {title: "Glow", spotifyURI: "28irpKCCK9nn9DZSik2zEx"},
				   {title: "Since Way Back", spotifyURI: "5JUu0unA8VwhTZ9LkMWUVI"},
				   {title: "Fake Love", spotifyURI: "343YBumqHu19cGoGARUTsd"},
				   {title: "Ice Melts", spotifyURI: "7bJ4mu7MHa3rHiNyKjOoSl"},
				   {title: "Do Not Disturb", spotifyURI: "2KvHC9z14GSl4YpkNMX384"},
				   {title: "Keep the Family Close", spotifyURI: "0NiUoCpGNxlwRKyqJWackV"},
				   {title: "9", spotifyURI: "1NRQH3aSAceShiZND67jOD"},
				   {title: "U With Me?", spotifyURI: "5M1YKsCrZgltqNeGMbdRir"},
				   {title: "Feel No Ways", spotifyURI: "27V5IZgpULF7AzmLFxYouq"},
				   {title: "Hype", spotifyURI: "1SlkEdaoGMc1rEt7YNmRUy"},
				   {title: "Weston Road Flow", spotifyURI: "0zG4M210LKXXXHOoW7DQly"},
				   {title: "Redemption", spotifyURI: "1cy91F19JaeVrkW85eeEpG"},
				   {title: "With You", spotifyURI: "3xYeFW5f1Qnbz8s3xOz8ur"},
				   {title: "Faithful", spotifyURI: "1DvpaFkZYr3rU2QieQabTx"},
				   {title: "Still Here", spotifyURI: "0tLknbTxOVQxJvbCzQ2PSZ"},
				   {title: "Controlla", spotifyURI: "3oEiWQUKwV524mYSn5bgUq"},
				   {title: "One Dance", spotifyURI: "5ZKG94fnjiuMH5yrC5S9lS"},
				   {title: "Grammys", spotifyURI: "0QjSXEGUUjE2TwwTUWodN1"},
				   {title: "Child's Play", spotifyURI: "3cRHJaacN0eW1adoCnoKIp"},
				   {title: "Pop Style", spotifyURI: "0ki1F55nVqWrU7Zuq0sryB"},
				   {title: "Too Good", spotifyURI: "4Uoc2mSkjXENcUWhSTNm2I"},
				   {title: "Summers Over Interlude", spotifyURI: "5THqY9CnwXQmFBM6HtDCZR"},
				   {title: "Fire & Desire", spotifyURI: "6KfZLbHhQ2qwG8H5lIYqUH"},
				   {title: "Views", spotifyURI: "4CWT1oRE8d8Wufkz0K1Xui"},
				   {title: "Hotline Bling", spotifyURI: "0PVLrYwxpQQts9CvEXLcWx"},
				   {title: "Legend", spotifyURI: "1ID1QFSNNxi0hiZCNcwjUC"},
				   {title: "Energy", spotifyURI: "79XrkTOfV1AqySNjVlygpW"},
				   {title: "10 Bands", spotifyURI: "12d5QFwzh60IIHlsSnAvps"},
				   {title: "Know Yourself", spotifyURI: "5InOp6q2vvx0fShv3bzFLZ"},
				   {title: "No Tellin'", spotifyURI: "2durxb17bXcmQJHSt8JAdO"},
				   {title: "Madonna", spotifyURI: "4v7SAP4KD96BFLWiCd1vF0"},
				   {title: "6 God", spotifyURI: "3a8tAZFJxlmBwOtrf5L1oC"},
				   {title: "Star67", spotifyURI: "2mmUoyPxzbxehpfm1TpTRK"},
				   {title: "Preach", spotifyURI: "1OHoBC4icbuNhpSxP400sv"},
				   {title: "Wednesday Night Interlude", spotifyURI: "6oLHyWvmk6bKrA91EIYZBp"},
				   {title: "6 Man", spotifyURI: "4kdfjhj9xNkYU0R8xlDy8k"},
				   {title: "Now & Forever", spotifyURI: "4zLOwx1yRJXWkHKt1XzF1p"},
				   {title: "Company", spotifyURI: "6ImxYXeLDQPIv4qo7bMhSk"},
				   {title: "Jungle", spotifyURI: "7JXZq0JgG2zTrSOAgY8VMC"},
				   {title: "How Bout Now", spotifyURI: "4n4BflhWjCHIxrI4v7Xt9s"},
				   {title: "My Side", spotifyURI: "4alHkxxwAhvoGg3dJCATKV"},
				   {title: "Tuscan Leather", spotifyURI: "69gz9onZQNVw55cMQsaYii"},
				   {title: "Furthest Thing", spotifyURI: "6s64FyS9n0XYbGMLH3LOWU"},
				   {title: "Started from the Bottom", spotifyURI: "3dgQqOiQ9fCKVhNOedd2lf"},
				   {title: "Wu-Tang Forever", spotifyURI: "1HnhCD1u0c4dHSMazmWGyM"},
				   {title: "Own It", spotifyURI: "3EJ9ZuqkL1kwgouugqsLu8"},
				   {title: "Worst Behavior", spotifyURI: "3X37NtwadSS0RM20dh2IgP"},
				   {title: "From Time", spotifyURI: "2WC4sK0ryyysQhtDok9Ytr"},
				   {title: "Hold On, We're Going Home", spotifyURI: "6jdOi5U5LBzQrc4c1VT983"},
				   {title: "Connect", spotifyURI: "1Sj81sMg37Hd4omn7Ow2qR"},
				   {title: "The Language", spotifyURI: "5dHpbFmZjWucrol0M7aNGU"},
				   {title: "305 to My City", spotifyURI: "5wTRsfZKeaQnQn8JeW8QYQ"},
				   {title: "Too Much", spotifyURI: "5LnXWeA9tuWKI2C1H74iiJ"},
				   {title: "Come Thru", spotifyURI: "5Ggfa9cpkpfp5D6Rg0Yyw1"},
				   {title: "All Me", spotifyURI: "5ngydCLbzCEdtu8SEOXhPU"},
				   {title: "The Motion", spotifyURI: "3t8pnImpBpOwxdtYBpKvA9"},
				   {title: "Over My Dead Body", spotifyURI: "2Gnsof1hvZzjE1xdLRpjtf"},
				   {title: "Shot for Me", spotifyURI: "6Z01gUquJsjJC67uNWm6P0"},
				   {title: "Headlines", spotifyURI: "6LxSe8YmdPxy095Ux6znaQ"},
				   {title: "Crew Love", spotifyURI: "0V4l4GQhgnWQGtCWpvA7va"},
				   {title: "Take Care", spotifyURI: "124NFj84ppZ5pAxTuVQYCQ"},
				   {title: "Marvin's Room", spotifyURI: "047fCsbO4NdmwCBn8pcUXl"},
				   {title: "Buried Alive Interlude", spotifyURI: "1ZyudLFv35SRvY5SvTZqJx"},
				   {title: "Under Ground Kings", spotifyURI: "1D9XLqQp2YYiOxrr5KLb8K"},
				   {title: "We'll Be Fine", spotifyURI: "7udsBKuqnJ5csWTAkR0vEI"},
				   {title: "Make Me Proud", spotifyURI: "7yfg0Eer6UZZt5tZ1XdsWz"},
				   {title: "Lord Knows", spotifyURI: "1QBwk6GTCxVdC2hoSw9tlM"},
				   {title: "Cameras", spotifyURI: "2FbGlEPAjNhWvrVvlentVq"},
				   {title: "Good Ones Go (Interlude)", spotifyURI: "2FbGlEPAjNhWvrVvlentVq"},
				   {title: "Doing It Wrong", spotifyURI: "4eSGSqP2TZvvX0kadZZttM"},
				   {title: "The Real Her", spotifyURI: "74atKkOasLOVzvqB6mYgga"},
				   {title: "Look What You've Done", spotifyURI: "7t1lBIr3WIEtqQEOdZFMUf"},
				   {title: "HYFR", spotifyURI: "0m1KYWlT6LhFRBDVq9UNx4"},
				   {title: "Practice", spotifyURI: "0jF2AdhsalO1L7KkhK4LE5"},
				   {title: "The Ride", spotifyURI: "4xRxYWgAtL6pzRz94GlZlA"},
				   {title: "The Motto", spotifyURI: "4Kz4RdRCceaA9VgTqBhBfa"},
				   {title: "Fireworks", spotifyURI: "4pUUhsc8fmZqnsPaOSU5CP"},
				   {title: "Karaoke", spotifyURI: "3bnVNMCk5FJulcpS7aXJbY"},
				   {title: "The Resistance", spotifyURI: "31FWGQxshq14SCZvvyHae1"},
				   {title: "Over", spotifyURI: "1EoHEkVcysf4WVDx6r9WzQ"},
				   {title: "Show Me a Good Time", spotifyURI: "1G0JddH0MHVg4VE03vheBm"},
				   {title: "Up All Night", spotifyURI: "55YHftnlehUQQJoTSLKCxj"},
				   {title: "Unforgettable", spotifyURI: "0XhOgqDKTQJhGfD1WBuTdC"},
				   {title: "Light Up", spotifyURI: "23Cx5Jv0bsCMoUnoygy5jy"},
				   {title: "Cece's Interlude", spotifyURI: "147TR5QZzxTnnwqltaRi4N"},
				   {title: "Find Your Love", spotifyURI: "18PSaTJMLkFNWnW0NWdOAW"},
				   {title: "Thank Me Now", spotifyURI: "5Us8wh9hCAQ8Uq1ast5CWz"},
				   {title: "9AM in Dallas", spotifyURI: "5nxGxyCXgig8ObhrX2avo3"},
				   {title: "Lust For Life", spotifyURI: "1v24T2ug4TlssYZvI3aL4O"},
				   {title: "Houstatlantavegas", spotifyURI: "3XLSlQLJf3Ut0zvMUxnF1h"},
				   {title: "Let's Call It Off", spotifyURI: "4FDSPGncHRpr6yB8DD4CtI"},
				   {title: "November 18th", spotifyURI: "0JaVdpmiex2EP7bBzyKVTa"},
				   {title: "Ignant Shit", spotifyURI: "2hcohLIysMxofYziluXCoX"},
				   {title: "A Night Off", spotifyURI: "3lkkkYc1wBj5l3FVlpqvP6"},
				   {title: "Say What's Real", spotifyURI: "7mPoCVGP752A5DtHf1SKkM"},
				   {title: "Little Bit", spotifyURI: "524wvipGqxPKYWxkjf9y46"},
				   {title: "Best I Ever Had", spotifyURI: "3QLjDkgLh9AOEHlhQtDuhs"},
				   {title: "Unstoppable", spotifyURI: "2TWSilrWcTrgVKcP8kfEfg"},
				   {title: "Sooner Than Later", spotifyURI: "43iKgGbmfqPLh3mxUlospI"},
				   {title: "Bria's Interlude", spotifyURI: "4i3GraNMzBKze1WsVl38DS"},
				   {title: "The Calm", spotifyURI: "6MlGqWzDiLkZ0vmAEsisEk"},
				   {title: "Brand New", spotifyURI: "4XTXamS1g4g93jPxyuFJJ6"},
				   {title: "Congratulations", spotifyURI: "3SnXwQUrvSacFziUYXTNKY"}];

router.get("/api/lyrics", function(req, res){
	let bars;
	let randomSong = Math.floor(Math.random() * songNames.length);
	const options = {
		apiKey: process.env.geniusAPIkey,
		title: songNames[randomSong].title,
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
	    var num = Math.floor(Math.random() * (arr.length-3));
			bars = [
				arr[num],
				arr[num+1],
				arr[num+2],
				arr[num+3]
			];
			res.json({bars: bars, randomSong: songNames[randomSong]});
	  }
		else {
			bars = ["Oops! Something went wrong."];
			res.render("index", {bars: bars, randomSong: songNames[randomSong]});
		}
	});
});

//serve static assets in production
if(process.env.NODE_ENV === 'production') {
	//set static folder
	router.use(express.static('client/build'))
	router.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

router.listen(process.env.PORT || 5000, process.env.IP, function(){
  console.log("server is listening...");
});
