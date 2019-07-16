
document.getElementById("myResume").addEventListener("click", function(){
	openInNewTab("https://drive.google.com/file/d/1YfSTZEO8z2mvlm4si5x_U4pmDGHVZrly/view?usp=sharing");
})

document.getElementById("myGithub").addEventListener("click", function(){
	openInNewTab("https://gitlab.com/KhoiLe309");
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
fast_haralick_source = {path:["assets/fl_output.png", 
"assets/fl_runtime.png"], index:0};



document.querySelector("#fast-haralick #fh-right").addEventListener("click", function(){
	shift("#fast-haralick .img-show", fast_haralick_source, 1);
});

document.querySelector("#fast-haralick #fh-left").addEventListener("click", function(){
	shift("#fast-haralick .img-show", fast_haralick_source, -1);
});

algo_source = {path:["assets/algo_predict.png", 
"assets/algo_example.png"],index:0};

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
