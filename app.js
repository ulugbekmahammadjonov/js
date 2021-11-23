

let randomNum = prompt('biror son kiriting (1; 10) oraliqda')
if (randomNum<1 || randomNum > 10){
    alert("boshqa son kiritin")
}
let a = Math.random()*10+1
if (a==Math.floor(randomNum)){
    alert("siz togri topdiz")
}else{
    alert('topolmadiz yana urunib koring')
}