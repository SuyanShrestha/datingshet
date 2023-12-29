const yes = document.querySelector ('#yes');
const no = document.querySelector('#no');

const clickYes = () => {
    window.location.href = "yes.html";
}

const clickNo = () => {
    console.log('abc');
    let x = Math.floor(Math.random() * (window.innerWidth - 100));
    let y = Math.floor(Math.random() * (window.innerHeight - 100));
    console.log(x,y);
    no.style.position = 'absolute';
    no.style.transition = 'all 1s';
    no.style.left = `${x}px`;
    no.style.top = `${y}px`;

}

yes.addEventListener('click', clickYes);
no.addEventListener('mouseover', clickNo);