//funkcja aktywujaca okienko i blurujaca background
function popupToggle(){
    const popup = document.getElementById('popup');
    popup.classList.toggle('active');
    var blur = document.getElementById('mainContener')
    blur.classList.toggle('active')
}








//do bazy mongodb lub postgresql
var chatMain = {};

chatMain.opcje = ['zaloguj', 'zarejestruj', 'chat', 'sklep', 'kontakt'];

var chatShop =  {

    colors : ['purple', 'blackyellow'],
    emoji : true,
    premium: true,
    user: 5,
    userPre : 10,
    checkCost : function(vat) {
        return this.userPre - this.user + vat;
    }
}

var kolor = chatShop.colors[0];

console.log(kolor);
console.log(chatMain.opcje[3]);
console.log(chatShop.checkCost(3));