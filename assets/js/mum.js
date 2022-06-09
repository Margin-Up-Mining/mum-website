italian = {
    carouselHeading: 'AUMENTA I PROFITTI DELLA TUA CENTRALE GRAZIE AL MINING DI BITCOIN',
    contactButton: 'Contattaci',
    perkHeading1: 'Monetizza ogni singolo joule di energia',
    perkHeading2: 'Trasforma un mancato guadagno in profitto aggiuntivo',
    perkHeading3: 'Diversifica in un mercato ad altissima crescita',
    perkBody1: 'Una centrale che produce più di quanto riesce a vendere sta perdendo milioni di euro all\'anno di profitto. Margin Up Mining™ ottimizza il rendimento della tua centrale garantendo ritorni costanti sul tuo surplus di energia.',
    perkBody2: 'Ogni joule prodotto ma invenduto è di fatto un mancato guadagno per la tua centrale. Con Margin Up Mining™ puoi vendere ogni singolo kW prodotto sino a 0.20€/kWh',
    perkBody3: 'Il settore del mining di Bitcoin è cresciuto di oltre il 500% negli ultimi 2 anni, così come è cresciuto esponenzialmente il valore delle società che hanno deciso di iniziare ad operare in questo mercato.',
    workWithUsHeading: 'Perchè Lavorare Con Margin Up Mining™?',
    workWithUs1: 'Ogni anno molte centrali attraversano periodi in cui dispongono di energia in eccesso che rimane invenduta, chiudendo di fatto il bilancio con un mancato guadagno. Considerato l\’elevato prezzo dell\’elettricità oggi, ciò può costare alla centrale centinaia di migliaia di euro all\’anno in mancati profitti.',
    workWithUs2: 'E se ci fosse un modo per monetizzare ogni singolo watt, aumentare i profitti della centrale e accorciare i tempi di break-even?',
    workWithUs3: 'Molte centrali in Italia e nel mondo hanno già scoperto una soluzione innovativa che permette di creare una fonte di profitto addizionale per la centrale che è prevedibile, ricorrente e non dipende dalla relazione con il GME. Ed è ciò che facciamo con Margin Up Mining per le centrali con cui lavoriamo:',
    workWithUs4: 'Installiamo centri di calcolo presso centrali come la tua, e utilizziamo il surplus di energia per produrre potenza di calcolo che poi acquistiamo sulla base di un contratto pluriennale, per assicurare alla tua centrale un profitto costante e prevedibile nel tempo. Noi utilizziamo la potenza di calcolo che compriamo dalla centrale per minare Bitcoin (trasformare l\’energia in moneta virtuale), prendendo sulle nostre spalle tutto il rischio legato alla volatilità del prezzo della cryptomoneta e lasciando alla tua centrale solo i benefici derivanti dall\’attività, ovvero i profitti pagati in euro.',
    showcaseHeading: 'Un fenomeno in continua crescita',
    teamHeading: 'Il team di Margin Up Mining™',
    teamBody1:'Dal 2016 contribuiamo attivamente allo sviluppo dell\’ecosistema Bitcoin, con prodotti e soluzioni che aiutano le imprese ad entrare con successo in questo settore e trarne profitto.',
    teamBody2:'Pioniere del play-to-earn, Federico Spitaleri è Co-founder di Satoshis Games Inc., una delle più note società negli USA specializzata nella produzione e commercializzazione di videogiochi con premi in bitcoin.',
    teamBody3:'Andrea Raspitzu è un software engineer con 8+ anni di esperienza e nella sua carriera ha contribuito alla crescita di varie startup sia nel settore energetico con vandebron.nl che nel settore blockchain con ACINQ, uno dei maggiori attori dell\’ecosistema Bitcoin in Europa.',
    contactHeading: 'È giunto il momento di parlare...',
    contactBody: 'Se anche tu vuoi scoprire come puoi trarre più profitti dalla tua centrale grazie al mining di Bitcoin, ti invitiamo a contattarci senza impegno per mostrarti passo passo cosa devi fare per iniziare da subito e in sicurezza. Perchè ricorda: ogni giorno che passa è un mancato guadagno per la centrale. Compila dunque il modulo qui sotto, clicca sul tasto invia e ti contatteremo in un massimo di 48h per fissare un appuntamento e mostrarti tutto per filo e per segno.'
}

english = {
    carouselHeading: 'INCREASE YOUR PROFITS WITH BITCOIN MINING',
    contactButton: 'Contact us',
    perkHeading1: 'Profit from each and every joule of energy',
    perkHeading2: 'Turn a loss into a profit',
    perkHeading3: 'Diversify in a high-growth market',
    perkBody1: 'Producing energy without storing or selling it is a loss. Margin Up Mining™ increase the profitability of your power generation facility ensuring a constant revenue stream from your excess energy.',
    perkBody2: 'In fact, every Joule of energy you don\'t sell is effectively a missed profit. With us you can sell as much energy you want with prices up to 0.20€/kW.',
    perkBody3: 'The bitcoin and bitcoin mining industry has had a tremendous growth over the past two years. Just like the growth of those companies who dediced to enter the market.',
    workWithUsHeading: 'Why choose Margin Up Mining™?',
    workWithUs1: 'Every year many power generation facilities are unable to sell the entirety of their production, this is effectively a missed profit on the balance sheet. Bearing in mind the high cost of electricity we see nowdays, this missed profit can cost you several thousands euros per year.',
    workWithUs2: 'What if there is a way to sell all your production, increase profit and shorten the break-even time?',
    workWithUs3: 'Many facilities in Italy and around the world have already found an innovative solution to create a revenue strem from excess energy, it\'s reliable, predictable and does not depend on your local energy market. This is what we do with our customers:',
    workWithUs4: 'We design and install mining farms in power generation facilities, our farms use the excess energy from your systems to create computational power',
    showcaseHeading: 'A fast growing industry',
    teamHeading: 'The team',
    teamBody1:'Since 2016 we contribute to the development of the bitcoin ecosystem, with products and solutions that help companies to enter the market.',
    teamBody2:'A play-to-earn pioneer, Federico Spitaleri is co-founder of Satoshis Games Inc. one of the most renowed company focusing on videogames with prizes in bitcoin.',
    teamBody3:'Andrea Raspitzu is a software engineer with 8+ years of experience and in his career he contributed to the growth of several startups both in the energy sector with vandebron.nl and in the blockchain sector with ACINQ, leading wallet developer from Europe.',
    contactHeading: 'It\'s time to talk...',
    contactBody: 'If you are wondering how to increase your profits through mining don\'t hesitate to write to us, with no obligation we\'ll be glad to show you every step of how to begin. Please fill the form below hit send and we\'ll contact you within 48h.'
}


languages = {
    it: italian,
    en: english
}

var SELECTED_LANGUAGE = 'en';

function setLanguage(lang) {

    Object.keys(languages[lang]).forEach(key => {
//        console.log(key + ' ==> ' + languages[lang][key]);
        setInnerTextInElements(key, languages[lang][key]);
    });

}

function setInnerTextInElements(className, text) {

    const el =  document.getElementsByClassName(className);
    for(var i = 0; i < el.length; i++) {
        el.item(i).innerHTML = text;
    }

}

function doSubmit() {
    
    // var scriptUrl = "https://script.google.com/macros/s/AKfycbzCb8s-mzIFGUGSiTlowyjFvkAABNcFXQg5fZ3CceXQtTc_opIB/exec";
    var formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };

    console.log('submit!' + JSON.stringify(formData));
  
    // $.ajax({
    //   type: "POST",
    //   url: scriptUrl,
    //   data: formData,
    //   crossDomain: true,
    //   error: function(data) {
    //     setThanksButton();
    //   },
    //   success: function(data){
    //     setThanksButton();
    //   }
    // });
}

setLanguage('en');