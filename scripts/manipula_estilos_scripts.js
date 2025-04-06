function mudarCorFundo(cor) {
	document.getElementById("quadrado").style.background = cor
}

function mudarTamanho(tamanho){

	switch(tamanho) {
	case "100":
		document.getElementById("quadrado").style.width = "100px"
		document.getElementById("quadrado").style.height = "100px"
		break
	case "150":
		document.getElementById("quadrado").style.width = "150px"
		document.getElementById("quadrado").style.height = "150px"
		break
	case "200":
		document.getElementById("quadrado").style.width = "200px"
		document.getElementById("quadrado").style.height = "200px"
		break
	}
	
}