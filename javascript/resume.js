
document.getElementById("myResume").addEventListener("click", function(){
	openInNewTab("https://www.linkedin.com/in/khoi-le-a25400148/");
})

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}



shift = function(id,sources, direction){
	img = document.querySelector(id)
	fhIndex+= direction;
	if(direction=== 1 && fhIndex === sources.length){
		fhIndex = 0;
	}
	if(direction=== -1 && fhIndex === -1){
		fhIndex = sources.length - 1;
	}
	img.style.backgroundImage = "url('" + sources[fhIndex] + "')"
}

// Haralick
fast_haralick_source = ["assets/ProjectShowcase/FastHaralick/output.png", 
"assets/ProjectShowcase/FastHaralick/runtime.png"];
fhIndex = 0;
setInterval(function(){
		shift("#fast-haralick .img-show", fast_haralick_source, 1);
}, 10000)

document.querySelector("#fast-haralick #fh-right").addEventListener("click", function(){
	shift("#fast-haralick .img-show", fast_haralick_source, 1);
});

document.querySelector("#fast-haralick #fh-left").addEventListener("click", function(){
	shift("#fast-haralick .img-show", fast_haralick_source, -1);
});