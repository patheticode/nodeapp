
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

function popupToggle(){
    const popup = document.getElementById('popup');
    popup.classList.toggle('acitve')

}









