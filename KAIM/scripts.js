var opis = 1;
			
			function lewo(){
				opis --;
				if(opis == 0)opis=3;
				document.getElementById("zdj").src = "img/" + String(opis) + ".jpg";
				
				switch(opis){
					case 1: 
						document.getElementById("opi").innerHTML = "Majowie – grupa ludów indiańskich mówiących językami z rodziny maja, zamieszkujących południowo-wschodni Meksyk (półwysep Jukatan i stan Chiapas), Gwatemalę, Belize i zach. Honduras; w węższym znaczeniu nazwa „Majowie” odnosi się wyłącznie do grupy zamieszkującej półwysep Jukatan (tzw. Majowie jukatańscy).";
						break;
					case 2: 
						document.getElementById("opi").innerHTML = "Aztekowie, in. Mexikowie – najsilniejszy w prekolumbijskim Meksyku naród indiański, posługujący się językiem nahuatl z rodziny uto-azteckiej; w czasie konkwisty przewodzili najsilniejszej federacji państw na obszarze Mezoameryki.";
						break;
					case 3: 
						document.getElementById("opi").innerHTML = "Państwo Inków (kecz. Tahuantinsuyu, dosłownie: Imperium Czterech Części, Zjednoczone Cztery Części) – historyczne państwo w zachodniej części Ameryki Południowej, w okresie swego największego rozkwitu obejmujące tereny dzisiejszego Peru, Ekwadoru oraz częściowo Boliwii, Chile, Kolumbii i Argentyny.";
						break;
				}
			}
			
			function zdj_i_tekst(){
				
				opis ++;
				if(opis == 4)opis=1;
				document.getElementById("zdj").src = "img/" + String(opis) + ".jpg";
				
				switch(opis){
					case 1: 
						document.getElementById("opi").innerHTML = "Majowie – grupa ludów indiańskich mówiących językami z rodziny maja, zamieszkujących południowo-wschodni Meksyk (półwysep Jukatan i stan Chiapas), Gwatemalę, Belize i zach. Honduras; w węższym znaczeniu nazwa „Majowie” odnosi się wyłącznie do grupy zamieszkującej półwysep Jukatan (tzw. Majowie jukatańscy).";
						break;
					case 2: 
						document.getElementById("opi").innerHTML = "Aztekowie, in. Mexikowie – najsilniejszy w prekolumbijskim Meksyku naród indiański, posługujący się językiem nahuatl z rodziny uto-azteckiej; w czasie konkwisty przewodzili najsilniejszej federacji państw na obszarze Mezoameryki.";
						break;
					case 3: 
						document.getElementById("opi").innerHTML = "Państwo Inków (kecz. Tahuantinsuyu, dosłownie: Imperium Czterech Części, Zjednoczone Cztery Części) – historyczne państwo w zachodniej części Ameryki Południowej, w okresie swego największego rozkwitu obejmujące tereny dzisiejszego Peru, Ekwadoru oraz częściowo Boliwii, Chile, Kolumbii i Argentyny.";
						break;
				}
			}
	
	function displayDate(){
		var formatter = new Intl.DateTimeFormat( 'pl',{
	day: 'numeric',
	month: 'long',
	year: 'numeric'
		} );
		var data = formatter.format(new Date());
		var wakacje = new Date(2020, 5, 26, 0, 0, 0, 0);
		var teraz = new Date()
		var wynik = wakacje.getTime() - new Date().getTime();
		var s = wynik/1000;
		var min = s/60;
		var g = min/60;
		var d = g/24;
		
		d = Math.floor()
		g = Math.floor(g % 24)
		min = Math.floor(min % 60)
		s = Math.floor(s  % 60)
		
//		if(min < 10)min = "0" + min;
//		if(s < 10)s = "0" + s;
//		if(g < 10)g = "0" + g;
		
		var tekst ="Do wakacji zostało "+ d + " dni " g +" godzin "+min+" minut " +s+ " sekund.";
		
		alert(tekst)
		document.getElementById("czas").innerHTML = data;
		
		
		
		
	} 