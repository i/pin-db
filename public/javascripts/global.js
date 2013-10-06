var slogans[5] = { "Your Girlfriend's Database.", "Pinning down big data.", "The Ultimate Cloud Computing Solution.", "The Kinda of Database the NSA Warned You About.", "Database? More like PictureBase" };

function updateSlogan(){	
	switch(document.getElementById("slogan").innerHTML){
		slogan[0]: document.getElementById("slogan").innerHTML = slogan[1]; break; 
		slogan[1]: document.getElementById("slogan").innerHTML = slogan[2]; break;
		slogan[2]: document.getElementById("slogan").innerHTML = slogan[3]; break; 
		slogan[3]: document.getElementById("slogan").innerHTML = slogan[4]; break;
		default: document.getElementById("slogan").innerHTML = slogan[0]; break; 
	}
}
