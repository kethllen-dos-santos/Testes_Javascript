let largura = window.innerWidth;
let altura = window.innerHeight;
let nivel = window.location.search;
let numVidas = 1;
let tempo = 20;


function definirDificuldade() {
	switch (nivel) {
	case "?facil":
		return 1500;
	case "?normal":
		return 1000;
	case "?dificil":
		return 750;
	default:
		return 1000;
	}
}


function redimencionar() {
	largura = window.innerWidth;
	altura = window.innerHeight;
}

let cronometro = setInterval(function() {
	tempo--;
	if (tempo < 0) {
		clearInterval(cronometro);
		clearInterval(criarMosquito);
		window.location.href = 'vitoria.html';
	} else {
		document.getElementById('cronometro').innerText = tempo;
	}
}, 1000);


function gerarMosquito() {

	if (document.getElementById("mosquito")) {
		document.getElementById("mosquito").remove();

		if (numVidas >= 5) {
			window.location.href = "game_over.html";
		} else {
			document.getElementById("vida" + numVidas).src="imagens/coracao_vazio.png";
			numVidas++;
		}
		
	}

	let mosquito = document.createElement("img");
	mosquito.src = "imagens/mosquito.png";
	mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio();
	mosquito.style.position = "absolute";
	mosquito.style.left = posicaoXAleatoria() + "px";
	mosquito.style.top = posicaoYAleatoria() + "px";
	mosquito.id = "mosquito";

	mosquito.onclick = function() {
		this.remove();
	}

	document.body.appendChild(mosquito);

}

function posicaoXAleatoria() {
	let posicaoX = Math.floor(Math.random()*largura) - 100;
	posicaoX = posicaoX < 0 ? 0 : posicaoX;
	return posicaoX;
}

function posicaoYAleatoria() {
	let posicaoY = Math.floor(Math.random()*altura) - 100;
	posicaoY = posicaoY < 0 ? 0 : posicaoY;
	return posicaoY;
}

function tamanhoAleatorio() {
	let aleatorio = Math.floor(Math.random()*3);
	switch (aleatorio) {
	case 0: return "mosquito1";
	case 1: return "mosquito2";
	default: return "mosquito3";
	}
}

function ladoAleatorio() {
	let aleatorio = Math.floor(Math.random()*2);
	aleatorio = aleatorio == 0 ? "ladoA" : "ladoB";
	return aleatorio;

}