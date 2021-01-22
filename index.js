
let drums = document.querySelectorAll("button");

for(let i=0;i<drums.length;i++){
	let key = drums[i].innerHTML;
	drums[i].addEventListener("click",function(){
		sounds(key);
		animation(key);
	});
	drums[i].addEventListener("keypress",function(event){
		let a = event.key;
		console.log(event);
		if(a=='a' || a=='s' || a=='d' || a=='w' || a=='j' || a=='k' || a=='l'){
			sounds(a);
	        animation(a);
	    }
	    else
	    	alert("Please press correct key!!");
	});
} 



function sounds(key){
	let x = new Audio(`sounds/${key}.mp3`);
	x.play();
}

function animation(key){
	document.querySelector(`.${key}`).classList.toggle("pressed");
}