console.log("FOR");
var diese = "";

for(var i= 1; i<8; i++) {
    diese +="#";//diese = diese +"#";
    console.log(diese);
    document.write(diese + '<br>');
}

console.log("WHILE")
var ligne ="";
var j = 1;
while(j<=7) {
    ligne = ligne + '$';
    console.log(ligne);
    document.write(ligne + '<br>');
    j++;
}
