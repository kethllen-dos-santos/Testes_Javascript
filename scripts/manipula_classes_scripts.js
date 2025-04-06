function mudarEstilo(){
	if (document.getElementById("selecao").value == "estilo_1") {
		document.getElementById("texto").className = "estilo1"
	} else if (document.getElementById("selecao").value == "estilo_2") {
		document.getElementById("texto").className = "estilo2"
	} else if (document.getElementById("selecao").value == "estilo_3") {
		document.getElementById("texto").className = "estilo3"
	}
}