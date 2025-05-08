function iniciarJogo() {
	let nivel = document.getElementById("nivel").value;

	if (nivel === '' || nivel === "-- Selecione o nível --") {
		alert("Selecione o nível de dificuldade");
		return false;
	}
	window.location.href = "jogo.html?" + nivel;

}