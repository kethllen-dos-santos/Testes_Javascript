function criarBaloes() {
	let larguraTela = window.innerWidth;
	let alturaTela = window.innerHeight;
	let distancia = -100;

	for (let i=1; distancia < larguraTela; i++) {

		balao = document.createElement("img");
		balao.src = "imagens/balao_verde.gif";
		balao.className = "baloes";
		balao.style.position = "absolute";
		balao.style.bottom = (larguraTela < 500) ? "0" : "-100px";
		balao.style.left = distancia + "px";
		balao.style.filter

		if (((i+2) % 3) == 0) {
			balao.style.filter = "brightness(110%) hue-rotate(150deg)";
		}

		if (((i+1) % 3) == 0) {
			balao.style.filter = "brightness(110%) hue-rotate(40deg)";
		}

		if ((i % 3) == 0) {
			balao.style.filter = "brightness(110%) hue-rotate(245deg)";
		}

		balao.id = "balao" + i;
		document.body.appendChild(balao);

		distancia += 100;
	}

}