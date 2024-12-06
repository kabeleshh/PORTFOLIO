const textToType = ['Welcome to my portfolio showcase!','Myself kabelesh... a passionate and strong interest','in web development and software engineering...'];
const typedTextElement = document.getElementById('typed-text');
let index = 0;
let charLength = 0;
function typeText() {
    if (index < textToType.length) {
        let textVal = textToType[index];
        if(charLength < textVal.length){
            typedTextElement.innerHTML += textVal[charLength];
            charLength++;
            typedTextElement.style.borderRight = '3px solid black';
            typedTextElement.style.animation = 'blink 0.7s step-end infinite';
            setTimeout(typeText, 70);
        }
        else{
            typedTextElement.innerHTML += "\n";
            index++;
            charLength = 0;
            setTimeout(typeText, 500);
        }
      }
}

window.addEventListener("load", typeText);
window.addEventListener("load", mine);


const _myself =['Myself Kabelesh , 21 years old. Currently','living in Chennai and i had done my schooling','in Velammal Matric.Higher Secondary School',' and currently pursuing a degree in Computer','Science and engineering at Velammal Engineering College. I have experience and knowledge in Java and Javascript and done projects in these technologies My strength is self motivated in difficult situation and enhanced problem solving ability and my weakness is trouble to say "No" to my belonged people This is short intro about myself.']
const myself = document.getElementById('myself_typed');
let i = 0;
let len = 0;

function mine(){
    if (i < _myself.length) {
        let text = _myself[i];
        if(len < text.length){
            myself.innerHTML += text[len];
            len++;
            myself.style.borderRight = '3px solid black';
            myself.style.animation = 'blink 0.7s step-end infinite';
            setTimeout(mine, 30);
        }
        else{
            myself.innerHTML += "\n";
            i++;
            len = 0;
            setTimeout(mine, 500);
        }
      }
}


const scrollUpBtn = document.getElementById('scrollUpBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollUpBtn.style.display = 'block';
    } else {
        scrollUpBtn.style.display = 'none';
    }
};

scrollUpBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
