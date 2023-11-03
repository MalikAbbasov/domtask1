let body = document.querySelector("body")
body.style.display="flex"
body.style.alignItems="center"
body.style.justifyContent="center"
body.style.marginTop="100px"
body.style.background="rgb(131,58,180)"
body.style.background="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(218,176,176,1) 50%, rgba(252,176,69,1) 100%)"


//ustune basanda modal acilmasi ucun bir buton yaratdim
let myButton = document.createElement("button")
myButton.innerHTML="salam aye"
document.body.append(myButton);
myButton.style.width="200px";
myButton.style.height="75px"
myButton.style.borderRadius="30px"
myButton.style.backgroundColor="rgb(131,58,180)"
myButton.style.fontSize="32px"
myButton.style.color="white"
myButton.style.display="flex"
myButton.style.alignItems="center"
myButton.style.justifyContent="center"

//modal ucun bir div yaratdim
let myDiv = document.createElement("div");
myDiv.className="myModal";
myDiv.style.display="none";
myDiv.style.position="fixed";
myDiv.style.zIndex="1";
myDiv.style.paddingTop="100px";
myDiv.style.marginTop="400px"
myDiv.style.width="450px";
myDiv.style.height="150px";
myDiv.style.backgroundColor="#3ea684"
myButton.append(myDiv)


//modali baglamaq ucun yeni bir buton yaratdim
let myClosebutton = document.createElement("button");
myClosebutton.className="close"
myClosebutton.innerHTML="bagla"
myClosebutton.style.width="75px"
myClosebutton.style.height="45px"
myClosebutton.style.borderRadius="20px"
myClosebutton.style.backgroundColor="#fcb045"
myClosebutton.style.fontSize="20px"
myDiv.append(myClosebutton);

//birinci butona basanda modalin acilmasi ve ikinci butona basanda modalin baglanmasi ucun funksiya qurdum.
myButton.addEventListener("click",function () {    
for (let i = 0; i < 10; i++) {
  //bir defe isleyir sonra dayanir, f5 atandan sonra yeniden isleyir:)
  myDiv.style.display="block"
  myClosebutton.addEventListener("click",function () {
    myDiv.style.display="none";
    myDiv.style.opacity="0"
    
  })
  
}
})




