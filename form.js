const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
      title: "Customer Service - Cloud Video Production",
      location: "NZ, Auckland",
    },
    {
      title: "Commissioning Machinery Assistant (CMA)",
      location: "US, IA, Wever",
    },
    {
      title: "Account Executive - Washington DC",
      location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
      title: "Lead Guest Service Specialist",
      location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
      title: "Customer Service Associate - Part Time",
      location: "US, AZ, Phoenix",
    },
    {
      title: "ASP.net Developer Job opportunity at United States,New Jersey",
      location: "US, NJ, Jersey City",
    },
    {
      title: "Talent Sourcer (6 months fixed-term contract)",
      location: "GB, LND, London",
    },
    {
      title: "Applications Developer, Digital",
      location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
      title: "VP of Sales - Vault Dragon",
      location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
      title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
      location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
      title: "Process Controls Engineer - DCS PLC MS Office - PA",
      location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
      title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
      location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
      title: "HAAD/DHA Licensed Doctors Opening in UAE",
      location: "AE, AZ, Abudhabi",
    },
    {
      title: "Talent Management Process Manager",
      location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
      title: "Customer Service Technical Specialist",
      location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
      title: "English Teacher Abroad",
      location: "US, NY, Saint Bonaventure",
    },
  ]

//funzione ricerca con due parametri 'posizione' e 'luogo'
//la funzione rende minuscoli i parametri inseriti
//poi in un forEach una volta resi minuscoli anche gli elementi dell'array
//in ciclo if, se nella posizione e nel titolo del lavoro sono inclusi i parametri inseriti
//allora si aggiunge il valore all'array di risultato
function ricerca(posizione, luogo) {

  let posizioneMinuscolo = posizione.toLowerCase();
  let luogoMinuscolo = luogo.toLowerCase();
  let results = [];

  jobs.forEach(function(job) {

      const titoloJob =job.title.toLowerCase();
      const locationJob = job.location.toLowerCase();

      if(titoloJob.includes(posizioneMinuscolo) && locationJob.includes(luogoMinuscolo)) {
        console.log("I lavori corrispondenti alla ricerca sono: " + titoloJob + locationJob);
        results.push(job);
      }
  })

  //definisco anche la lunghezza dell'array per inserire a fine ricerca anche il numero di risultati trovati
  let count = results.length;

  return {

    results,
    count

  };

};

console.log(ricerca('DEV', 'US'));  

//sul bottone con id 'ricerca' aggiungo un eventListener che al click esegue la seguente funzione:
//presi i valori inseriti nel form, li inserisco nella funzione 'ricerca' definita precedentemente
//richiamo l'ul con id= risultati-lista e con il ciclo for per ogni elemento presente nell'array di risultato
//creo un li da inserire nell'ul richiamato precedentemente, in cui verrà inserito ongi valore dell'array risultato

document.getElementById('ricerca').addEventListener ('click', function prendoDatiForm() {
  console.log("Click su cerca");
  const professioneInput = document.getElementById("professione").value;
  const luogoInput = document.getElementById("luogo").value;
    
  console.log("E' stato ricercato: " + professioneInput);
  console.log("E' stato ricercato il luogo:" + luogoInput);
        
  const risultato = ricerca(professioneInput, luogoInput);

  let listaRisultati = document.getElementById('risultati-lista');
  //ripulisco l'ul prima di effettuare la ricerca
  //per evitare che rimanga inserito il risultato di ricerca precedenti
  listaRisultati.innerHTML = '';
  let newLi;
        
  //fino a che l'indice è inferiore alla lunghezza dell'array del risultato 
  for (let i = 0; i < risultato.results.length; i++) {

    //creo un li con il nome della posizione (presa dall'array risultato) e la location (presa dall'array del risultato) del lavoro
    //infine aggiungo li all'ul richiamato in precedenza (listaRisultati)
    newLi = document.createElement('li');

    //modifico il contenuto degli 'li' di risultato con il nome scritto come title nell'array di risultato
    // e il luogo scritto nell'array come 'location'
    newLi.textContent = `Posizione: ${risultato.results[i].title} - location: ${risultato.results[i].location}`;
    console.log("L'elemento inserito è: " + newLi.textContent);
    listaRisultati.appendChild(newLi);
  }

  //inoltre aggiungo un campo in cui verrà inserito il numero di risultati dell'array
  //così da inserire un 'li' precedente agli 'li' contenenti i lavori trovati in cui verrà inserito il numero totale di ricerche trovate

  if (risultato.count > 0) {

    let newLiCount = document.createElement('li');
    newLiCount.textContent = "Ci sono " + risultato.count + " risultati:"; 

    console.log(newLiCount.textContent);
    //utilizzo insertBefore poichè ci interessa mettere il counter di risultati prima dei risultati di ricerca
    //utilizzo listaRisultati.firstChild poichè altrimenti inserirebbe il counter prima dell'ultimo elemento li di risultato
    //utilizzando .firstChild il counter verrà inserito prima del primo 'li' di risultato

    listaRisultati.insertBefore(newLiCount, listaRisultati.firstChild);

    //aggiungo la classe Counter che ho aggiunto in CSS piochè visualizzato diversamente rispetto ai risultati della ricerca
    newLiCount.classList.add('Counter');

  } else {

    //in caso di numero nullo, verrà inserito un li con un messaggio di errore
    let error = document.createElement('li');
    error.textContent = "Non ci sono risultati disponibili, prova con un'altra mansione o una location diversa!";
    listaRisultati.appendChild(error);
    //aggiungo la classe error che ho aggiunto in CSS piochè visualizzato diversamente rispetto ai risultati della ricerca
    error.classList.add('error');
    console.log("Non ci sono risultati disponibili");

  }
});

//aggiunta funzione per 3 menu a tendina in alto a destra nella nav-bar
//richiamo la classe dell'icona da cui aprirò il menu
//richiamo il menu che è già stato creato in HTML ma è in opacity:0;
//creo un eventListener che ad ogni click grazie a toggle, aprirà e chiuderà il menu di riferimento


//menù a tendina sull'icona di account
let userIcon = document.getElementsByClassName('fa-regular fa-user')[0];
let tendina1 = document.getElementsByClassName('tendina-account')[0];

userIcon.addEventListener('click', function() {

  tendina1.classList.toggle('nascondi');
  console.log("E' stata aggiunta la classe .nascondi al menu account");
  
});

//menù a tendina sull'icona di tre barre
let menuIcon = document.getElementsByClassName('fa-solid fa-bars')[0];
let tendina2 = document.getElementsByClassName('tendina-menu')[0];

menuIcon.addEventListener('click', function() {

  tendina2.classList.toggle('nascondi');
  console.log("E' stata aggiunta la classe .nascondi al menu a barre");

});

//menù a tendina sull'icona dei like
let piaciutiIcon = document.getElementsByClassName('fa-regular fa-heart')[0];
let tendina3 = document.getElementsByClassName('tendina-piaciuti')[0];

piaciutiIcon.addEventListener('click', function() {
  
  tendina3.classList.toggle('nascondi');
  console.log("E' stata aggiunta la classe .nascondi al menu dei like");

});