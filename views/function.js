//funkcja aktywujaca okienko i blurujaca background
function popupToggle(){
    const popup = document.getElementById('popup');
    popup.classList.toggle('active');
    let blur = document.getElementById('mainContener')
    blur.classList.toggle('active')
}
function handleClick(event)
{
    event.preventDefault();

    const emailInput = document.getElementById('emailClear');

    console.log(emailInput.value);

    //clear input value

    emailInput.value = '';
}

//setTimeout(function() {
    var btnClear = document.getElementById('btnClear');
    btnClear.addEventListener('click', handleClick);
//}, 1000);









let chatMain = {};

chatMain.opcje = ['zaloguj', 'zarejestruj', 'chat', 'sklep', 'kontakt'];

let chatShop =  {

    colors : ['purple', 'blackyellow'],
    emoji : true,
    premium: true,
    user: 5,
    userPre : 10,
    checkCost : function(vat) {
        return this.userPre - this.user + vat;
    }
}

let kolor = chatShop.colors[0];

console.log(kolor);
console.log(chatMain.opcje[3]);
console.log(chatShop.checkCost(3));

