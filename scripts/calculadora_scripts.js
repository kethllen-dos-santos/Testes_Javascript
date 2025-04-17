var ponto = false

function calcular (tipo, valor) {

	var resultado = document.getElementById("result")
	var tamanho = resultado.value.length



	if (tipo == 'acao') {
		/* Impedir que comece o cálculo por uma ação e não um número */
		if (resultado.value == '') return

		/* Limpar tela */
		if (valor == 'C') {
			resultado.value = ''
			ponto = false
			return
		}

		/* Retornar o resultado */
		if (valor == '=') {
			resultado.value = eval(resultado.value)
			ponto = false
			return
		}

		/* Impedir dois operadores sequenciais */
		var ultimo_caractere = resultado.value.charAt(tamanho - 1)

		if (ultimo_caractere == '+' || ultimo_caractere == '-' || ultimo_caractere == '/' || ultimo_caractere == '*') {
				if (valor == '.') return
				else {
					resultado.value = resultado.value.substring(0, tamanho-1) + valor
					return
				}
		}

		/* Impedir que um número tenha 2 pontos */
		if (valor == '+' || valor == '-' || valor == '/' || valor == '*') {
			ponto = false
		}

		if (valor == '.'){
			if (ponto == true) return
			ponto = true
		}

		resultado.value += valor
		resultado.scrollLeft = resultado.scrollWidth;
		return
	}

	resultado.value += valor
	resultado.scrollLeft = resultado.scrollWidth;
}


function mostrar_Mensagem() {
	document.getElementById("aviso").className = "rosa";
}

function esconder_Mensagem() {
	document.getElementById("aviso").className = "incolor";
}