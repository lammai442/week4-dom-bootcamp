// Code here!
/* 1. Byt namn på första hoodien från Ash till Potato. */
let ashRef = document.querySelector('.art-1').querySelector('h3');
ashRef.textContent = 'Potato';

// Alternativ till lösning
// let changeName = document.querySelector('.art-1');
// changeName.querySelector('h3');
// changeName.textContent = 'Potato';

/* 2. Byt namn på Home till Start. */
let homeRef = document.querySelector('nav').querySelector('a');
homeRef.textContent = 'Start';

// ALTERNATIV LÖSNING
// let navRefs = document.querySelectorAll('nav>a');
// for(let navRef of navRefs) {
//     if(navRef.textContent === 'Home') {
//         navRef.textContent = 'Start';
//     }
// }


/* 3. Byt namn på Contact till Mail Us.*/
let changeContact = document.querySelector('.nav-last');
changeContact.textContent = 'Mail us'

/* 4. Byt ut informationen om Sinus Hoodie - Fire.*/
let infoTextRef = document.querySelector('.art-2').querySelector('p');
infoTextRef.textContent = 'Här kommer lite annan info istället!';

/* 5. Byt bakgrundsfärg och text på en knapp.*/
let btnRef = document.querySelector('.art-1').querySelector('button');
btnRef.textContent = 'Nytt';

// Dessaa metoder skriver direkt i HTML där vi skriver
// btnRef.setAttribute('style', 'color: red; background-color: green;');
// btnRef.style = 'color: red, background-color: green';

// Lite snyggare om man vill styla direkt på det.
// btnRef.style.color = 'blue';
// btnRef.style.backgroundColor = 'green';

// Snyggaste sättet
btnRef.classList.add('btn-red');


/* 6. Byt bakgrundsfärg på någon av produkterna.*/
let changeBackgroundColor = document.querySelector('.art-3').querySelector('figure');
changeBackgroundColor.style.backgroundColor = 'blue';

let backgroundColorRef = document.querySelector('.art-2');
backgroundColorRef.classList.add('btn-red');

/* 7. Byt ut adressen på sidan.*/
let addressRef = document.querySelector('footer>section>article>p');
// En sårbar lösning då det kan hackas genom att andra kan dölja saker i den.
// addressRef.innerHTML = `Klockan AB <br/>
//           Smultronvägen 42 <br/>
//           133 37, Forshaga`;

addressRef.innerText = `Klockan AB
          Smultronvägen 42
          133 37, Forshaga`;

/* 8. Byt färg på samtliga <p>*/
let pRefs = document.querySelectorAll('p');
for (let changeColor of pRefs) {
    changeColor.style.color = 'red';
}

// Här är ett annat sätt fast med forEach()-loopen.
pRefs.forEach(pRef => pRef.style.color = 'orange');


/* 9. Ändra text på samtliga knappar till add to cart.*/
let btnRefs = document.querySelectorAll('button');
// For-of loops alternativ
for(let changeButton of btnRefs) {
    changeButton.textContent = 'cart';
}

// ForEach loops alternativ
btnRefs.forEach(btnRef => btnRef.textContent = 'Köp!');


/* 10. Lägg till classen active på menyalternativet home.*/
let classRef = document.querySelector('header>nav>a');
classRef.classList.add('active');
// Alternativ hur man vill lägga in ny klass. Den är mindre säker då den kan skriva över befintliga klasser.
// createClass.className = 'active';


/* 11. Ta bort classen logo på logotypen.*/
// Mer tydlig kod men tar två rader jämfört med nedanstående.
// let logoRef = document.querySelector('header>img');
// logoRef.classList.remove('logo');

document.querySelector('header>img').classList.remove('logo');


// ADD CONTENT
/* 12. Lägg till ett nytt menyalternativ.*/
let createMenu = document.createElement('a');

createMenu.textContent = 'Produkter';
// Denna behövs för att a-elementet ska kunna bli en länk.
createMenu.href = 'https://aftonbladet.se';

// En lösning som Jespers lärare förespråkade:
// let textNodeRef = document.createTextNode('Produkter');
// createMenu.appendChild(textNodeRef);

// Här stoppar man in nya variabeln i Nav och då kommer den synas.
document.querySelector('nav').appendChild(createMenu);
// Om man vill stoppa in den vart man vill kan man göra på detta sätt. Först i parantesen är vilket element man vill stoppa före 'vad' som kommer efter kommatecken.
document.querySelector('nav').insertBefore(createMenu, document.querySelector('nav>img'));


/* 13. Lägg till en ny produkt med följande info.
el	beskrivning
img	hoodie-forrest.png
h2	Sinus Hoodie
h3	Forrest
p	Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.
*/
let createArticle = document.createElement('article');
createArticle.classList.add('art-4');

let createFigure = document.createElement('figure');

let createImg = document.createElement('img');
createImg.src = 'img/hoodie-forrest.png';
createImg.alt = 'hoodie-forrest';

let createH2 = document.createElement('h2');
createH2.textContent = 'Sinus Hoodie';

let createH3 = document.createElement('h3');
createH3.textContent = 'Forrest';

let createParagraph = document.createElement('p');
createParagraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.'

let createButton = document.createElement('button');
createButton.textContent = 'cart';

createArticle.appendChild(createFigure);
createFigure.appendChild(createImg);
createArticle.appendChild(createH2);
createArticle.appendChild(createH3);
createArticle.appendChild(createParagraph);
createArticle.appendChild(createButton);

// Jespers lösning
document.querySelector('main').appendChild(createArticle);

const articleRef = document.createElement('article');
articleRef.classList.add('art-5');

let figureRef = document.createElement('figure');
articleRef.appendChild(figureRef)

let imgRef = document.createElement('img');
imgRef.src = './img/hoodie-forrest.png';
imgRef.alt = 'hoodie';
figureRef.appendChild(imgRef);

let headRef = document.createElement('h2');
headRef.textContent = 'Jespers lösning';
articleRef.appendChild(headRef);

// Här kan man återanvända ovanstående variabel.
headRef = document.createElement('h3');
headRef.textContent = 'Forrest';
articleRef.appendChild(headRef);

let infoRef = document.createElement('p');
infoRef.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.';
articleRef.appendChild(infoRef);

let btnNodeRef = document.createElement('button');
btnNodeRef.textContent = 'To cart';
articleRef.appendChild(btnNodeRef);

document.querySelector('main').appendChild(articleRef)
console.log(articleRef);


// EVENTS
/* 14. Lyssna efter ett klick på logotypen (.logo). När den registrerar ett klick skall du console.log:a "found you!";*/
let buttonElem = document.querySelector('header>img');
// Här skapas en funktion som egentligen har paranteser() men dessa måsta tas bort.
buttonElem.addEventListener('click', printTextToConsole);

function printTextToConsole(event) {
    event.target.textContent = 'Normal function: Found you';
    console.log(event.target.textContent);
}

buttonElem.addEventListener('click', () => {
    console.log('Arrow-function: Found you')
})

/* 15. Lyssna efter klick på samtliga produkter ( <article>). När den registrerar ett klick skall du console.log:a "Hi, Im article Fire / Ash / Water".*/
// let clickArticles = document.querySelectorAll('article');

// for(let clickArticle of clickArticles) {
//     clickArticle.addEventListener('click', printArticle);

//     function printArticle(event) {
//         let h3 = event.currentTarget.querySelector('h3');

//         h3.textContent = `Hi, Im article ${h3.textContent}`;
//         console.log(h3.textContent);
//     }
// }

let menuClick = document.querySelector('footer>section>article>h3');

let counter = 0;

menuClick.addEventListener('click', () => {
    counter++;
    console.log('Du klickade på knappen', counter);
    
})

let articleRefs = document.querySelectorAll('main>article');
for(let articleRef of articleRefs) {
    articleRef.addEventListener('click', (event) => {
        // Med .target så anropas varje articleRef och visar vilket element när man klickar på det.
        console.log(event.target);
        // Med event så anropas varje articleRef och när man använder sig av .currenTarget så visas föräldern.
        console.log(event.currentTarget);
        console.log(`Hi! Im article ${event.currentTarget.querySelector('h3').textContent}`);
        
        
    });
}
