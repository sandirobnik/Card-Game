var naPotezi=null;
var izbranaVredIgralec=null;
var izbranaVredRac=null;
var izbira=null;
var vredIgralec=null;
var vredRac=null;
var igralecKarte=[];
var racKarte=[];
var stevec=0;
var resetStevec=0;
var indexRac=null;
var indexIgralec=null;
var rndStIgralec=null;
var rndStRacunalnik=null;

$(document).ready( function () {
	$(".kartaOne").hide();
	$(".kartaTwo").hide();
	
	$("#vrednostVredIzbranaOne").hide();
	$("#stMesecevVredIzbranaOne").hide();
	$("#stVrsticVredIzbranaOne").hide();
	$("#stRazvijalcevVredIzbranaOne").hide();
	$("#ocenaVredIzbranaOne").hide();
	
	$("#vrednostVredIzbranaTwo").hide();
	$("#stMesecevVredIzbranaTwo").hide();
	$("#stVrsticVredIzbranaTwo").hide();
	$("#stRazvijalcevVredIzbranaTwo").hide();
	$("#ocenaVredIzbranaTwo").hide();
	
	document.getElementById("sporocilo").innerHTML="Pričnite z novo igro!";
	document.getElementById("igraButton").innerHTML="Nova igra";
	
	document.getElementById("igralecStKart").innerHTML="Igralec";
	document.getElementById("racunalnikStKart").innerHTML="Računalnik";
	
	naPotezi="igralec";
	izbranaVredIgralec = 1;
	
	var stKart = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36], numsMixed = [];
	while(stKart.length) {
		numsMixed = numsMixed.concat(stKart.splice((Math.random() * stKart.length), 1));
	}
	igralecKarte = numsMixed.slice(0,18); 
	racKarte = numsMixed.slice(18);
});

function novaIgraFun()
{	
	stevec++;
	resetStevec++;
	if(resetStevec == 3) {
		ponastavi();
		resetStevec=1;
	}
	if(izbranaVredIgralec !=-1) {
		switch (naPotezi) {
			case "igralec": {
				$(".kartaTwo").show();
				$(".kartaTwoInnerOsnovna").hide();
				izbranaVredIgralec=-1;
				
				// kartaTwo
				rndStIgralec = Math.floor(Math.random() * igralecKarte.length);
				var indexIgralec = igralecKarte[rndStIgralec];
				
				document.getElementById("nazivTwo").innerHTML=karte[indexIgralec].naziv;
				document.getElementById("nazivTwo").style.textAlign="center";
				
				document.getElementById("tipTwo").innerHTML=karte[indexIgralec].tip;
				document.getElementById("tipTwo").style.textAlign="center";
				
				document.getElementById("sporocilo").innerHTML="Vi ste na potezi, izberite vrednost!";
				document.getElementById("igraButton").innerHTML="Nadaljuj";
				
				document.getElementById("igralecStKart").innerHTML="Igralec ima "+igralecKarte.length+" kart";
				document.getElementById("racunalnikStKart").innerHTML="Računalnik ima "+racKarte.length+" kart";
				
				var img = document.createElement("IMG");
				var child = document.getElementById('slikaTwo');
				img.src = "img/logotip/"+karte[indexIgralec].slika;

				if(document.getElementById('slikaTwo').hasChildNodes()) {
					child.removeChild(child.childNodes[0]);
				}
				child.appendChild(img);
				
				
				document.getElementById("vrednostVredTwo").innerHTML=karte[indexIgralec].vrednost;
				document.getElementById("stMesecevVredTwo").innerHTML=karte[indexIgralec].stMesecev;
				document.getElementById("stVrsticVredTwo").innerHTML=karte[indexIgralec].stVrstic;
				document.getElementById("stRazvijalcevVredTwo").innerHTML=karte[indexIgralec].stRazvijalcev;
				document.getElementById("ocenaVredTwo").innerHTML=karte[indexIgralec].ocena;
				
				if(izbira == "racunalnik") {
					izbranaVredIgralec = izbranaVredRac;
					switch (izbranaVredIgralec) {
						case 0: {
							$("#vrednostVredTwo").hide();
							$("#stMesecevVredTwo").show();
							$("#stVrsticVredTwo").show();
							$("#stRazvijalcevVredTwo").show();
							$("#ocenaVredTwo").show();
							
							$("#vrednostVredIzbranaTwo").show();
							$("#stMesecevVredIzbranaTwo").hide();
							$("#stVrsticVredIzbranaTwo").hide();
							$("#stRazvijalcevVredIzbranaTwo").hide();
							$("#ocenaVredIzbranaTwo").hide();
							document.getElementById("vrednostVredIzbranaTwo").innerHTML=karte[indexIgralec].vrednost;
							vredIgralec=karte[indexIgralec].vrednost;
							izbranaVredIgralec=0;
							break;
						}
						case 1: {
							$("#vrednostVredTwo").show();
							$("#stMesecevVredTwo").hide();
							$("#stVrsticVredTwo").show();
							$("#stRazvijalcevVredTwo").show();
							$("#ocenaVredTwo").show();
							
							$("#vrednostVredIzbranaTwo").hide();
							$("#stMesecevVredIzbranaTwo").show();
							$("#stVrsticVredIzbranaTwo").hide();
							$("#stRazvijalcevVredIzbranaTwo").hide();
							$("#ocenaVredIzbranaTwo").hide();
							document.getElementById("stMesecevVredIzbranaTwo").innerHTML=karte[indexIgralec].stMesecev;
							vredIgralec=karte[indexIgralec].stMesecev;
							izbranaVredIgralec=1;
							break;
						}
						case 2: {
							$("#vrednostVredTwo").show();
							$("#stMesecevVredTwo").show();
							$("#stVrsticVredTwo").hide();
							$("#stRazvijalcevVredTwo").show();
							$("#ocenaVredTwo").show();
							
							$("#vrednostVredIzbranaTwo").hide();
							$("#stMesecevVredIzbranaTwo").hide();
							$("#stVrsticVredIzbranaTwo").show();
							$("#stRazvijalcevVredIzbranaTwo").hide();
							$("#ocenaVredIzbranaTwo").hide();
							document.getElementById("stVrsticVredIzbranaTwo").innerHTML=karte[indexIgralec].stVrstic;
							vredIgralec=karte[indexIgralec].stVrstic;
							izbranaVredIgralec=2;
							break;
						}
						case 3: {
							$("#vrednostVredTwo").show();
							$("#stMesecevVredTwo").show();
							$("#stVrsticVredTwo").show();
							$("#stRazvijalcevVredTwo").hide();
							$("#ocenaVredTwo").show();
							
							$("#vrednostVredIzbranaTwo").hide();
							$("#stMesecevVredIzbranaTwo").hide();
							$("#stVrsticVredIzbranaTwo").hide();
							$("#stRazvijalcevVredIzbranaTwo").show();
							$("#ocenaVredIzbranaTwo").hide();
							document.getElementById("stRazvijalcevVredIzbranaTwo").innerHTML=karte[indexIgralec].stRazvijalcev;
							vredIgralec=karte[indexIgralec].stRazvijalcev;
							izbranaVredIgralec=3;
							break;
						}
						case 4: {
							$("#vrednostVredTwo").show();
							$("#stMesecevVredTwo").show();
							$("#stVrsticVredTwo").show();
							$("#stRazvijalcevVredTwo").show();
							$("#ocenaVredTwo").hide();
							
							$("#vrednostVredIzbranaTwo").hide();
							$("#stMesecevVredIzbranaTwo").hide();
							$("#stVrsticVredIzbranaTwo").hide();
							$("#stRazvijalcevVredIzbranaTwo").hide();
							$("#ocenaVredIzbranaTwo").show();
							document.getElementById("ocenaVredIzbranaTwo").innerHTML=karte[indexIgralec].ocena;
							vredIgralec=karte[indexIgralec].ocena;
							izbranaVredIgralec=4;
							break;
						}
					}
				}
				else {
					izbira="igralec";
				
					$("#vrednostVredTwo" ).click(function() {
						$("#vrednostVredTwo").hide();
						$("#stMesecevVredTwo").show();
						$("#stVrsticVredTwo").show();
						$("#stRazvijalcevVredTwo").show();
						$("#ocenaVredTwo").show();
						
						$("#vrednostVredIzbranaTwo").show();
						$("#stMesecevVredIzbranaTwo").hide();
						$("#stVrsticVredIzbranaTwo").hide();
						$("#stRazvijalcevVredIzbranaTwo").hide();
						$("#ocenaVredIzbranaTwo").hide();
						document.getElementById("vrednostVredIzbranaTwo").innerHTML=karte[indexIgralec].vrednost;
						vredIgralec=karte[indexIgralec].vrednost;
						izbranaVredIgralec=0;
					});
					
					$("#stMesecevVredTwo" ).click(function() {
						$("#vrednostVredTwo").show();
						$("#stMesecevVredTwo").hide();
						$("#stVrsticVredTwo").show();
						$("#stRazvijalcevVredTwo").show();
						$("#ocenaVredTwo").show();
						
						$("#vrednostVredIzbranaTwo").hide();
						$("#stMesecevVredIzbranaTwo").show();
						$("#stVrsticVredIzbranaTwo").hide();
						$("#stRazvijalcevVredIzbranaTwo").hide();
						$("#ocenaVredIzbranaTwo").hide();
						document.getElementById("stMesecevVredIzbranaTwo").innerHTML=karte[indexIgralec].stMesecev;
						vredIgralec=karte[indexIgralec].stMesecev;
						izbranaVredIgralec=1;
					});
					
					
					$("#stVrsticVredTwo" ).click(function() {
						$("#vrednostVredTwo").show();
						$("#stMesecevVredTwo").show();
						$("#stVrsticVredTwo").hide();
						$("#stRazvijalcevVredTwo").show();
						$("#ocenaVredTwo").show();
						
						$("#vrednostVredIzbranaTwo").hide();
						$("#stMesecevVredIzbranaTwo").hide();
						$("#stVrsticVredIzbranaTwo").show();
						$("#stRazvijalcevVredIzbranaTwo").hide();
						$("#ocenaVredIzbranaTwo").hide();
						document.getElementById("stVrsticVredIzbranaTwo").innerHTML=karte[indexIgralec].stVrstic;
						vredIgralec=karte[indexIgralec].stVrstic;
						izbranaVredIgralec=2;
					});
					
					$("#stRazvijalcevVredTwo" ).click(function() {
						$("#vrednostVredTwo").show();
						$("#stMesecevVredTwo").show();
						$("#stVrsticVredTwo").show();
						$("#stRazvijalcevVredTwo").hide();
						$("#ocenaVredTwo").show();
						
						$("#vrednostVredIzbranaTwo").hide();
						$("#stMesecevVredIzbranaTwo").hide();
						$("#stVrsticVredIzbranaTwo").hide();
						$("#stRazvijalcevVredIzbranaTwo").show();
						$("#ocenaVredIzbranaTwo").hide();
						document.getElementById("stRazvijalcevVredIzbranaTwo").innerHTML=karte[indexIgralec].stRazvijalcev;
						vredIgralec=karte[indexIgralec].stRazvijalcev;
						izbranaVredIgralec=3;
					});
					
					$("#ocenaVredTwo" ).click(function() {
						$("#vrednostVredTwo").show();
						$("#stMesecevVredTwo").show();
						$("#stVrsticVredTwo").show();
						$("#stRazvijalcevVredTwo").show();
						$("#ocenaVredTwo").hide();
						
						$("#vrednostVredIzbranaTwo").hide();
						$("#stMesecevVredIzbranaTwo").hide();
						$("#stVrsticVredIzbranaTwo").hide();
						$("#stRazvijalcevVredIzbranaTwo").hide();
						$("#ocenaVredIzbranaTwo").show();
						document.getElementById("ocenaVredIzbranaTwo").innerHTML=karte[indexIgralec].ocena;
						vredIgralec=karte[indexIgralec].ocena;
						izbranaVredIgralec=4;
					});
				}
				
				naPotezi="racunalnik";
				if((izbira == "igralec") && (stevec == 2)) {
					stevec=0;
					preveri();
				}
				if((izbira == "racunalnik") && (stevec == 2)) {
					stevec=0;
					preveri();
				}
				break;
			}
			
			case "racunalnik": {
				$(".kartaOne").show();
				$(".kartaOneInnerOsnovna").hide();
				
				// kartaOne
				rndStRacunalnik = Math.floor(Math.random() * racKarte.length);
				var indexRac = racKarte[rndStRacunalnik];
				
				document.getElementById("nazivOne").innerHTML=karte[indexRac].naziv;
				document.getElementById("nazivOne").style.textAlign="center";
				
				document.getElementById("tipOne").innerHTML=karte[indexRac].tip;
				document.getElementById("tipOne").style.textAlign="center";
				
				document.getElementById("igralecStKart").innerHTML="Igralec ima "+igralecKarte.length+" kart";
				document.getElementById("racunalnikStKart").innerHTML="Računalnik ima "+racKarte.length+" kart";
				
				var img = document.createElement("IMG");
				var child = document.getElementById('slikaOne');
				img.src = "img/logotip/"+karte[indexRac].slika;

				if(document.getElementById('slikaOne').hasChildNodes()) {
					child.removeChild(child.childNodes[0]);
				}
				child.appendChild(img);
				
				document.getElementById("vrednostVredOne").innerHTML=karte[indexRac].vrednost;
				document.getElementById("stMesecevVredOne").innerHTML=karte[indexRac].stMesecev;
				document.getElementById("stVrsticVredOne").innerHTML=karte[indexRac].stVrstic;
				document.getElementById("stRazvijalcevVredOne").innerHTML=karte[indexRac].stRazvijalcev;
				document.getElementById("ocenaVredOne").innerHTML=karte[indexRac].ocena;
				
				if(izbira == "igralec") {
					izbranaVredRac = izbranaVredIgralec;
				}
				else {
					izbranaVredRac = Math.floor((Math.random()*5)+0);
					izbranaVredIgralec = izbranaVredRac;
					document.getElementById("sporocilo").innerHTML="Računalnik je izbral!";
				}
				switch (izbranaVredRac) {
					case 0: {
						$("#vrednostVredOne").hide();
						$("#stMesecevVredOne").show();
						$("#stVrsticVredOne").show();
						$("#stRazvijalcevVredOne").show();
						$("#ocenaVredOne").show();
						
						$("#vrednostVredIzbranaOne").show();
						$("#stMesecevVredIzbranaOne").hide();
						$("#stVrsticVredIzbranaOne").hide();
						$("#stRazvijalcevVredIzbranaOne").hide();
						$("#ocenaVredIzbranaOne").hide();
						document.getElementById("vrednostVredIzbranaOne").innerHTML=karte[indexRac].vrednost;
						vredRac=karte[indexRac].vrednost;
						break;
					}
					
					case 1: {
						$("#vrednostVredOne").show();
						$("#stMesecevVredOne").hide();
						$("#stVrsticVredOne").show();
						$("#stRazvijalcevVredOne").show();
						$("#ocenaVredOne").show();
						
						$("#vrednostVredIzbranaOne").hide();
						$("#stMesecevVredIzbranaOne").show();
						$("#stVrsticVredIzbranaOne").hide();
						$("#stRazvijalcevVredIzbranaOne").hide();
						$("#ocenaVredIzbranaOne").hide();
						document.getElementById("stMesecevVredIzbranaOne").innerHTML=karte[indexRac].stMesecev;
						vredRac=karte[indexRac].stMesecev;
						break;
					}
					
					case 2: {
						$("#vrednostVredOne").show();
						$("#stMesecevVredOne").show();
						$("#stVrsticVredOne").hide();
						$("#stRazvijalcevVredOne").show();
						$("#ocenaVredOne").show();
						
						$("#vrednostVredIzbranaOne").hide();
						$("#stMesecevVredIzbranaOne").hide();
						$("#stVrsticVredIzbranaOne").show();
						$("#stRazvijalcevVredIzbranaOne").hide();
						$("#ocenaVredIzbranaOne").hide();
						document.getElementById("stVrsticVredIzbranaOne").innerHTML=karte[indexRac].stVrstic;
						vredRac=karte[indexRac].stVrstic;
						break;
					}
					
					case 3: {
						$("#vrednostVredOne").show();
						$("#stMesecevVredOne").show();
						$("#stVrsticVredOne").show();
						$("#stRazvijalcevVredOne").hide();
						$("#ocenaVredOne").show();
						
						$("#vrednostVredIzbranaOne").hide();
						$("#stMesecevVredIzbranaOne").hide();
						$("#stVrsticVredIzbranaOne").hide();
						$("#stRazvijalcevVredIzbranaOne").show();
						$("#ocenaVredIzbranaOne").hide();
						document.getElementById("stRazvijalcevVredIzbranaOne").innerHTML=karte[indexRac].stRazvijalcev;
						vredRac=karte[indexRac].stRazvijalcev;
						break;
					}
					
					case 4: {
						$("#vrednostVredOne").show();
						$("#stMesecevVredOne").show();
						$("#stVrsticVredOne").show();
						$("#stRazvijalcevVredOne").show();
						$("#ocenaVredOne").hide();
						
						$("#vrednostVredIzbranaOne").hide();
						$("#stMesecevVredIzbranaOne").hide();
						$("#stVrsticVredIzbranaOne").hide();
						$("#stRazvijalcevVredIzbranaOne").hide();
						$("#ocenaVredIzbranaOne").show();
						document.getElementById("ocenaVredIzbranaOne").innerHTML=karte[indexRac].ocena;
						vredRac=karte[indexRac].ocena;
						break;
					}
				}
				naPotezi="igralec";
				if((izbira == "igralec") && (stevec == 2)) {
					stevec=0;
					preveri();
				}
				if((izbira == "racunalnik") && (stevec == 2)) {
					stevec=0;
					preveri();
				}
				break;
			}
		}
	}
}

function preveri() {
	if(vredRac > vredIgralec) {
		naPotezi="racunalnik";
		izbira="racunalnik";
		racKarte.push(rndStIgralec);
		igralecKarte.splice(rndStIgralec,1);
		if(racKarte.length == 0 || igralecKarte.length == 0) {
			konecIgre();
		}
		document.getElementById("sporocilo").innerHTML="Zmaga računalnik, dobi karte in izbira!";
	}
	else {
		naPotezi="igralec";
		izbira="igralec";
		igralecKarte.push(rndStRacunalnik);
		racKarte.splice(rndStRacunalnik,1);
		if(racKarte.length == 0 || igralecKarte.length == 0) {
			konecIgre();
		}
		document.getElementById("sporocilo").innerHTML="Vi ste zmagali, dobite karte in izbirate!";
	}
}

function ponastavi() {
	if(vredRac > vredIgralec) {
		$(".kartaOneInnerOsnovna").hide();
		$(".kartaTwoInnerOsnovna").show();
		$(".kartaOne").show();
		$(".kartaTwo").hide();
		
		$("#vrednostVredOne").show();
		$("#stMesecevVredOne").show();
		$("#stVrsticVredOne").show();
		$("#stRazvijalcevVredOne").show();
		$("#ocenaVredOne").show();
		
		$("#vrednostVredIzbranaOne").hide();
		$("#stMesecevVredIzbranaOne").hide();
		$("#stVrsticVredIzbranaOne").hide();
		$("#stRazvijalcevVredIzbranaOne").hide();
		$("#ocenaVredIzbranaOne").hide();
	}
	else {
		$(".kartaOneInnerOsnovna").show();
		$(".kartaTwoInnerOsnovna").hide();
		$(".kartaOne").hide();
		$(".kartaTwo").show();
		
		$("#vrednostVredTwo").show();
		$("#stMesecevVredTwo").show();
		$("#stVrsticVredTwo").show();
		$("#stRazvijalcevVredTwo").show();
		$("#ocenaVredTwo").show();
		
		$("#vrednostVredIzbranaTwo").hide();
		$("#stMesecevVredIzbranaTwo").hide();
		$("#stVrsticVredIzbranaTwo").hide();
		$("#stRazvijalcevVredIzbranaTwo").hide();
		$("#ocenaVredIzbranaTwo").hide();
	}
}

function konecIgre() {
	alert("konec");
}