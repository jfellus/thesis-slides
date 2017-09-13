var titre = "";
var page = 0;
var iframe = null;

window.onload = function() {
	page = 0;
	iframe = document.querySelector("iframe");
	iframe.src=files[page];

	document.body.onkeydown = function() {
		if(event.key==='ArrowLeft') prev();
		else if(event.key==='Home') home();
		else if(event.key==='ArrowRight' || event.key===' ') next();
	}
}

function update() {
	titre = $("#iframe").contents().find("#titre").html();
	$("h1").html(titre);
}

function next() {
	page++;
	if(page==files.length-1) page = 0;
	iframe.src=files[page];
}

function prev() {
	page--;
	if(page<0) page=files.length-2;
	iframe.src=files[page];
}

function home() {
	page = 0;
	iframe.src=files[page];
}
