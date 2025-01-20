console.log(document);

let divRef = document.querySelector('#pageDiv');
// console.log(divRef);


let textRefs = document.querySelectorAll('.text-field');
// console.log(textRefs);

for(let textRef of textRefs) {
    textRef.textContent = 'Heja Arsenal';
}

textRefs.forEach((textRef, index) => {
    textRef.textContent = `Heja Arsenal x ${index + 1}`;
    // Om man vill kolla och endast göra på alla jämna index.
    if(index % 2 === 0) {

        // Dessa går att göra men man vill inte styla CSS i HTML filen
        // Denna är sämsta alternativet.
        // textRef.setAttribute('style', 'color: red;');
        
        // Detta är mer okej.
        // textRef.style = 'color: red;';
        
        // textRef.style.color = 'red';
        // textRef.style.backgroundcolor = 'black'; /* här skrivs backgroundcolur som små bokstäver */
        // textRef.style.padding = '1rem';
        
        // Här refererar vi istället till en
        textRef.classList.add('t-red');
    } else {
        // textRef.classList.add('d-none');
    }
    // Om man vill t ex lägga in en ID på sista indexen
    if(index === textRefs.length - 1) {
        // Båda nedanstående fungerar att lägga till ett ID på sista indexet.
        // textRef.setAttribute('id', 'hejaArsenal');
        textRef.id = 'hejaArsenal'
    }

})

const pRef = document.querySelector('#hejaArsenal');
console.log(pRef);

// Ett vanligt sätt att lägga in nytt element.
const textRef = document.createElement('p');
textRef.textContent = 'Heja Arsenal x 6';
divRef.appendChild(textRef);

// Denna metod är säkrare men inte lika vanligt som ovanstående
const pNodeRef = document.createElement('p');
const textNodeRef = document.createTextNode('Heja Arsenal x 4,5');
pNodeRef.appendChild(textNodeRef);
console.log(pNodeRef);

// För att stoppa in denna i arrayen på ett visst ställe.
divRef.insertBefore(pNodeRef, pRef);

// Här tar man bort parenteserna på funktionen som inte får vara anonym och då körs den när man klickar.
textRef.addEventListener('click', printTextToConsole);

function printTextToConsole(event) {
    console.log(event.target.textContent);
    event.target.textContent = 'Hata Tottenham';
}

for(let textRef of textRefs) {
    textRef.addEventListener('mouseover', (event) => {
        console.log(event.target.textContent);
        event.target.classList.toggle('t-red');       
    })
}

console.log(divRef);
