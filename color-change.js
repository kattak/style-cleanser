
console.log('selection');
var target = window.getSelection().anchorNode.parentElement;
console.log(target);
// .stlye.cssText = "background-color: white";
target.parentElement.style.cssText += "background-color: white";
target.style.cssText += "color: black"

//
// //get parentELmenet
// console.log("parent element");
// console.log(target.parentElement);
//
// //get anchorNode
// console.log("anchor node");
// console.log(window.getSelection().anchorNode);

//get text




//get url of website
var websiteURL = window.location.href
console.log(websiteURL);
