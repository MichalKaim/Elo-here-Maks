var opis = 1;		
var ofer = 1;
var ceny = [10000, 12303, 4000, 4351,7000];
	
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
		
		d = Math.floor(d)
		g = Math.floor(g % 24)
		min = Math.floor(min % 60)
		s = Math.floor(s  % 60)
		
//		if(min < 10)min = "0" + min;
//		if(s < 10)s = "0" + s;
//		if(g < 10)g = "0" + g;
		
		var tekst ="Do wakacji zostało "+ d + " dni "+ g +" godzin "+min+" minut " + s+ " sekund.";
		
		document.getElementById("czas").innerHTML = data;
		document.getElementById("doWakacji").innerHTML = tekst;
		
		
		
		
		
	} 


	function flewo(){
		ofer --;
		if(ofer == 0)ofer=5;
		document.getElementById("zdj").src = "img/" + String(ofer) + "o.jpg";
		document.getElementById("cena").innerHTML = "Cena: " + ceny[ofer-1] + " zł"
		
		switch(ofer){
			case 1: 
				document.getElementById("ofer").innerHTML = "Położone na półwyspie Jukatan Cancun dla większości turystów to luksusowy kurort i miejsce imprez do białego rana. Wybierzcie się do Podwodnego Muzeum i zanurkujcie w ciepłych wodach Morza Karaibskiego, by obejrzeć setki rzeźb ukrytych między zjawiskową rafą koralową. Pójdźcie na spacer do niewielkiego stanowiska archeologicznego El Rey, by odkrywać piramidy zbudowane przez Majów. A wieczorem, zjedzcie tradycyjne meksykańskie danie w jednej z setek klimatycznych restauracji.";
				break;
			case 2: 
				document.getElementById("ofer").innerHTML = "Zwiedzanie Tepotzotlan, ładnego miasteczka z czasów kolonialnych, w którym jezuici wznieśli Seminarium Świętego Marcina oraz kościół Świętego Franciszka Ksawerego, uznawany obecnie za wybitne arcydzieło i perłę meksykańskiego baroku. Zwiedzanie Muzeum Wicekrólestwa z ciekawym i bardzo bogatym zbiorem sztuki kolonialnej. Przejazd do Tuli, zaginionej cywilizacji Tolteków (posągi Atlantów w świątyni Quetzalcoatla, Pałac Tysiąca Kolumn, Coatepantli, czyli Mur Węży). Przejazd do kolonialnego miasta Queretaro, wycieczka po centrum historycznym: Kościół i klasztor Świętego Krzyża, w którego ogrodzie znajdują się unikalne drzewa z kolcami w kształcie krzyża, Plac Broni, zabytkowy Akwedukt. Przejazd do hotelu w Queretaro, zakwaterowanie, kolacja.";
				break;
			case 3: 
				document.getElementById("ofer").innerHTML = "Pierwsze wrażenie po przylocie do Tajlandii to uderzenie parnego, wilgotnego, ciężkiego powietrza, jednak gwarantuję - da się do tego przyzwyczaić - oczywiście nie od razu. Byliśmy zatem w Bangkoku. To metropolia pełna kontrastów. Tu szczególnie widoczny jest szacunek Tajów dla tradycji połączony z dążeniem do nowoczesności i postępu. Świątynie, posągi Buddy, ale także targi, handel, chaos, to miasto, które żyje w szalonym tempie a punkt kulminacyjny osiąga zawsze po zmroku, tuż po zachodzie słońca. Funkcjonuje tutaj chyba największy night bazar jaki kiedykolwiek widziałam! Wytargować można wszystko i zbić każdą cenę. Między stoiskami z ubraniami, pamiątkami, gadżetami, co krok napotykamy tajskie przysmaki. Zatem pomieszanie z poplątaniem - zgiełk, jazgot, zamieszanie, jednak wszystko funkcjonuje prawidłowo bez jakichkolwiek problemów. Po godzinnym spacerze mamy lekko dość, uciekliśmy z rozpędzonej Warszawy żeby wpaść w jeszcze większy wir? Na szczęście za dwa dni mieliśmy wyruszyć do raju.";
				break;
			case 4: 
				document.getElementById("ofer").innerHTML = "Wyprawa do Meksyku to wypad pełen aktywnego wypoczynku poza utartymi szlakami. W ciągu dwóch tygodni wspólnie odkryjemy tajemnice Jukatanu i zobaczymy perły historii prekolumbijskiej oraz kolonialnej. Spróbujemy zgubić się w najludniejszym mieście świata oraz odwiedzimy absolutne must see na liście światowych zabytków! Jednak, jak na Solistów przystało, nie zabraknie też totalnego chillu na rajskich plażach, na których w pełni zatopimy się w pięknie natury, a codzienne problemy zostawimy daleko za sobą. Wszystko to serwujemy Wam jak zawsze w iście podróżniczej i przyjacielskiej atmosferze. Wyciśniemy z tej wyprawy 110%.";
				break;
			case 5: 
				document.getElementById("ofer").innerHTML = "Machu Picchu jest symbolem Peru i często całej Ameryki Południowej. Starożytne ruiny zaginionego miasta Inków robią wrażenie. Na miejsce można dojechać pociągiem, trekkingować po Inca Trail albo odwalić coś głupiego i dobić policyjnym samochodem. Mi się udało. Ruiny Machu Picchu odkryto w 1911 roku. I do tej pory niewielu ludzi wie, jakie było jej przeznaczenie. Uważa się, że mogło to być centrum wypadowe dla zamożnych Inków. Cały kompleks został wzniesiony około 1430 roku. Po 100 latach prace wstrzymano, zaraz po tym jak na miejsce władowali się Hiszpanie (do Cuzco).";
				break;
			}
	
}
	
function fzdj_i_tekst(){
			
	ofer ++;
		if(ofer == 6)ofer=1;
		document.getElementById("zdj").src = "img/" + String(ofer) + "o.jpg";

		document.getElementById("cena").innerHTML = "Cena: " + ceny[ofer-1] + " zł"
	
		switch(ofer){
			case 1: 
				document.getElementById("ofer").innerHTML = "Położone na półwyspie Jukatan Cancun dla większości turystów to luksusowy kurort i miejsce imprez do białego rana. Wybierzcie się do Podwodnego Muzeum i zanurkujcie w ciepłych wodach Morza Karaibskiego, by obejrzeć setki rzeźb ukrytych między zjawiskową rafą koralową. Pójdźcie na spacer do niewielkiego stanowiska archeologicznego El Rey, by odkrywać piramidy zbudowane przez Majów. A wieczorem, zjedzcie tradycyjne meksykańskie danie w jednej z setek klimatycznych restauracji.";
				break;
			case 2: 
				document.getElementById("ofer").innerHTML = "Zwiedzanie Tepotzotlan, ładnego miasteczka z czasów kolonialnych, w którym jezuici wznieśli Seminarium Świętego Marcina oraz kościół Świętego Franciszka Ksawerego, uznawany obecnie za wybitne arcydzieło i perłę meksykańskiego baroku. Zwiedzanie Muzeum Wicekrólestwa z ciekawym i bardzo bogatym zbiorem sztuki kolonialnej. Przejazd do Tuli, zaginionej cywilizacji Tolteków (posągi Atlantów w świątyni Quetzalcoatla, Pałac Tysiąca Kolumn, Coatepantli, czyli Mur Węży). Przejazd do kolonialnego miasta Queretaro, wycieczka po centrum historycznym: Kościół i klasztor Świętego Krzyża, w którego ogrodzie znajdują się unikalne drzewa z kolcami w kształcie krzyża, Plac Broni, zabytkowy Akwedukt. Przejazd do hotelu w Queretaro, zakwaterowanie, kolacja.";
				break;
			case 3: 
				document.getElementById("ofer").innerHTML = "Pierwsze wrażenie po przylocie do Tajlandii to uderzenie parnego, wilgotnego, ciężkiego powietrza, jednak gwarantuję - da się do tego przyzwyczaić - oczywiście nie od razu. Byliśmy zatem w Bangkoku. To metropolia pełna kontrastów. Tu szczególnie widoczny jest szacunek Tajów dla tradycji połączony z dążeniem do nowoczesności i postępu. Świątynie, posągi Buddy, ale także targi, handel, chaos, to miasto, które żyje w szalonym tempie a punkt kulminacyjny osiąga zawsze po zmroku, tuż po zachodzie słońca. Funkcjonuje tutaj chyba największy night bazar jaki kiedykolwiek widziałam! Wytargować można wszystko i zbić każdą cenę. Między stoiskami z ubraniami, pamiątkami, gadżetami, co krok napotykamy tajskie przysmaki. Zatem pomieszanie z poplątaniem - zgiełk, jazgot, zamieszanie, jednak wszystko funkcjonuje prawidłowo bez jakichkolwiek problemów. Po godzinnym spacerze mamy lekko dość, uciekliśmy z rozpędzonej Warszawy żeby wpaść w jeszcze większy wir? Na szczęście za dwa dni mieliśmy wyruszyć do raju.";
				break;
			case 4: 
				document.getElementById("ofer").innerHTML = "Wyprawa do Meksyku to wypad pełen aktywnego wypoczynku poza utartymi szlakami. W ciągu dwóch tygodni wspólnie odkryjemy tajemnice Jukatanu i zobaczymy perły historii prekolumbijskiej oraz kolonialnej. Spróbujemy zgubić się w najludniejszym mieście świata oraz odwiedzimy absolutne must see na liście światowych zabytków! Jednak, jak na Solistów przystało, nie zabraknie też totalnego chillu na rajskich plażach, na których w pełni zatopimy się w pięknie natury, a codzienne problemy zostawimy daleko za sobą. Wszystko to serwujemy Wam jak zawsze w iście podróżniczej i przyjacielskiej atmosferze. Wyciśniemy z tej wyprawy 110%.";
				break;
			case 5: 
				document.getElementById("ofer").innerHTML = "Machu Picchu jest symbolem Peru i często całej Ameryki Południowej. Starożytne ruiny zaginionego miasta Inków robią wrażenie. Na miejsce można dojechać pociągiem, trekkingować po Inca Trail albo odwalić coś głupiego i dobić policyjnym samochodem. Mi się udało. Ruiny Machu Picchu odkryto w 1911 roku. I do tej pory niewielu ludzi wie, jakie było jej przeznaczenie. Uważa się, że mogło to być centrum wypadowe dla zamożnych Inków. Cały kompleks został wzniesiony około 1430 roku. Po 100 latach prace wstrzymano, zaraz po tym jak na miejsce władowali się Hiszpanie (do Cuzco).";
				break;
			}
		}