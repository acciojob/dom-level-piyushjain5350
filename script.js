//your JS code here. If required.
const list=document.getElementsByTagName("ul")[0];
const child=list.childNodes;
const fText=document.getElementById("level").innerText;

var ct=0;
var finalCt=0;
child.forEach((e)=>{
	
	if(e.innerText===fText){
		finalCt=ct;
	}
	ct++;
});
// console.log(Math.floor(finalCt/2));
alert(`The level of the element is: ${Math.floor(finalCt/2)}`);

