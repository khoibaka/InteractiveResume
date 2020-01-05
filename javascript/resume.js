
document.getElementById("myResume").addEventListener("click", function(){
	openInNewTab("https://drive.google.com/file/d/1T5sG3p26oAc6U1JIXD82Tm39t6F2LilY/view?usp=sharing");
})

document.getElementById("myGithub").addEventListener("click", function(){
	openInNewTab("https://github.com/khoibaka");
})
document.getElementById("myLinkedIn").addEventListener("click", function(){
	openInNewTab("https://www.linkedin.com/in/khoi-le-a25400148/");
})

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}



shift = function(id,sources, direction){
	img = document.querySelector(id)
	sources.index += direction;
	if(direction=== 1 && sources.index === sources.path.length){
		sources.index = 0;
	}
	if(direction=== -1 && sources.index === -1){
		sources.index = sources.path.length - 1;
	}
	img.style.backgroundImage = "url('" + sources.path[sources.index] + "')"
}

// Haralick
fast_haralick_source = {path:["https://i.ibb.co/Th23Z0G/example.png", 
"https://i.ibb.co/D1DShp2/prototype.png", "https://i.ibb.co/tKhs5Fh/runtime.png"], index:0};



document.querySelector("#fast-haralick #fh-right").addEventListener("click", function(){
	shift("#fast-haralick .img-show", fast_haralick_source, 1);
});

document.querySelector("#fast-haralick #fh-left").addEventListener("click", function(){
	shift("#fast-haralick .img-show", fast_haralick_source, -1);
});

algo_source = {path:["https://i.ibb.co/6Zb05wm/algo-predict.png", 
"https://i.ibb.co/sP8GDCB/algo-example.png"],index:0};

document.querySelector("#algoInvestor #fh-right").addEventListener("click", function(){
	shift("#algoInvestor .img-show", algo_source, 1);
});

document.querySelector("#algoInvestor #fh-left").addEventListener("click", function(){
	shift("#algoInvestor .img-show", algo_source, -1);
});


setInterval(function(){
		shift("#fast-haralick .img-show", fast_haralick_source, 1);
		shift("#algoInvestor .img-show", algo_source, 1);
}, 10000)
