const archivo = document.querySelector("#archivo")
function subirVideo(evento) {
	alert("Video subiendose");
	const video = evento.target.files[0];
	const reader = new FileReader();
	reader.addEventListener("load", function () {
		document.querySelector("#video").src = reader.result;
		document.querySelector(".botones").classList.remove("botones");
	}, false);
	reader.readAsDataURL(video)
}
archivo.addEventListener("change", subirVideo, false);

