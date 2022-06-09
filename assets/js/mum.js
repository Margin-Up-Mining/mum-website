italian = {
    carouselHeading: 'AUMENTA I PROFITTI DELLA TUA CENTRALE GRAZIE AL MINING DI BITCOIN',
    contactButton: 'Contattaci',
    perkHeading1: 'Monetizza ogni singolo joule di energia',
    perkHeading2: 'Trasforma un mancato guadagno in profitto aggiuntivo',
    perkHeading3: 'Diversifica in un mercato ad altissima crescita'
}

english = {
    carouselHeading: 'INCREASE YOUR PROFITS WITH BITCOIN MINING',
    contactButton: 'Contact us',
    perkHeading1: 'Profit from each and every joule of energy',
    perkHeading2: 'Turn a loss into a profit',
    perkHeading3: 'Diversify in a high-growth market'
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