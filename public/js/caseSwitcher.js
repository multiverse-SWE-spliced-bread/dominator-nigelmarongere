const quiet = document.getElementById('quiet-btn');
const loud = document.getElementById('loud-btn');
const sarc = document.getElementById('sarc-btn');
const quote = document.getElementById('patrick');

const toLC = (ev) => {
    let text = quote.innerText;
    quote.innerText = text.toLowerCase()
}
quiet.addEventListener('click', toLC);

const toUC = (ev) => {
    let text = quote.innerText;
    quote.innerText = text.toUpperCase()
}
loud.addEventListener('click', toUC);

const toSC = (ev) => {
    let text = quote.innerText;
    quote.innerText = text.toLowerCase()
    const isLetter = (char) => {return char.toLowerCase() !== char.toUpperCase()};
    str = quote.innerText;
    sarcStr = '';
    evenOrOdd = 1;
    for (let i = 0; i < str.length; i++){
        if(isLetter(str[i]) !== true){
            console.log('x')
            sarcStr += str[i];
            continue;
        }else if(evenOrOdd % 2 == 0){
            console.log('y')
            sarcStr += str[i].toUpperCase();
            evenOrOdd++;
        }else{
            console.log('z')
            sarcStr += str[i]
            evenOrOdd++;
        }
    }
    quote.innerText = sarcStr;
}
sarc.addEventListener('click', toSC);