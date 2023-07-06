//work experience
function addNewWEfield() {
    //  console.log("Adding new field");
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter here");

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

//academic qualification

function addNewAQfield() {
 //   console.log("add text here ");
 let newNode =document.createElement("textarea");
 newNode.classList.add("form-control");
 newNode.classList.add("eqfield");
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows", 3);
 newNode.setAttribute("placeholder", "Enter here");
 
 let aqOb=document.getElementById("aq");
 let aqAddButtonOb=document.getElementById("aqAddButton");

 aqOb.insertBefore(newNode, aqAddButtonOb);
}

// generating cv 
function generateCV() {
 //   console.log("genrate cv");

 let namefield=document.getElementById("namefield").value;
 let nameT1=document.getElementById("nameT1");
 nameT1.innerHTML=namefield;

 //direct proccess to call inner html elements


document.getElementById("nameT2").innerHTML=namefield;
//contact
document.getElementById("contactT").innerHTML=document.getElementById("contactfield").value;

//address

document.getElementById("addressT").innerHTML=document.getElementById("addressfield").value;

//links

document.getElementById("fbT").innerHTML=document.getElementById("fbfield").value;
document.getElementById("instaT").innerHTML=document.getElementById("instafield").value;
document.getElementById("linkedT").innerHTML=document.getElementById("linkedfield").value;

// objective
document.getElementById('objectiveT').innerHTML=document.getElementById("objectivefield").value;

// work experence

let wes=document.getElementsByClassName("wefield");
let str="";

for(let e of wes){
    str=str+`<li> ${e.value} </li>`;
}

document.getElementById("weT").innerHTML=str;

//academic qualification

let aqs=document.getElementsByClassName("eqfield");
let str1="";

for (let f of aqs){
    str1 =str1+`<li> ${f.value} </li>`;
}
document.getElementById("aqT").innerHTML=str1;


//code for setting image
let file=document.getElementById("imgfield").files[0];

console.log(file);
let reader=new FileReader();

reader.readAsDataURL(file);

console.log(reader.result);

// set the image to template 

reader.onloadend =function(){
    document.getElementById("imgTemplate").src=reader.result;
}


}




//print cv 
function printCV(){
    window.print();
}