var rzeczownik = ["Rolnictwo","Edukacja i rehabilitacja","Przygotowanie pedagogiczne","Integracja sensoryczna","Zarządzanie","Język angielski","Nauczanie plastyki","Oligofrenopedagogika","Edukacja włączająca","Dietetyka","Coaching","Doradztwo zawodowe","Zielarstwo","Eliksiry","Bibliotekoznastwo","Nauczanie matematyki","Bezpieczeństwo i higiena pracy","Psychotraumatologia"];
  var przymiotnik =["dla absolwentów kierunków nierolniczych","z elementami coachingu","ze wstępem do edukacji Montessori",", autoprezentacja i wystąpienia publiczne","z arteterapią","w społeczeństwie","osób ze spektrum autyzmu","dla psychologów","i podstawy pszczelarstwa","według zasad Szanghajskich","dla urodzonych zwycięzców","z instrukcją zakupu i przekształcenia ziemi","oraz ochrona przeciwpożarowa (ppoż)"]
  ;
   var rzecz1 = rzeczownik[Math.floor(Math.random()*rzeczownik.length)];
   var przym1 = przymiotnik[Math.floor(Math.random()*przymiotnik.length)];
   var outp ="Twój kierunek to "+ przym1+" "+rzecz1;
   window.alert(outp);
