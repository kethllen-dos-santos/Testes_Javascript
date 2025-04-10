var objetos = ["Cadeira", "Impressora", "Garfo"]
exibirLista()

function exibirLista() {
	let saida = ""
	for (let i=0; i < objetos.length; i++) {
		saida += objetos[i] + "<br />"
	}
	document.getElementById("lista").innerHTML = saida;
}

function adicionarObjeto() {
	var texto = document.getElementById("entrada").value.toLowerCase()
	texto = texto.charAt(0).toUpperCase() + texto.substring(1, texto.length).toLowerCase() // Deixar 1ª letra maiúscula
	
	document.getElementById("entrada").value = ""

	if (texto == ""){
		alert("Informe um valor válido")
	} else {
		pesquisarAdicionarObjeto(objetos, texto)
		exibirLista()
	}
}

function deletarObjeto() {

	var texto = document.getElementById("entrada").value.toLowerCase()
	texto = texto.charAt(0).toUpperCase() + texto.substring(1, texto.length).toLowerCase() // Deixar 1ª letra maiúscula
	
	document.getElementById("entrada").value = ""

	if (texto == ""){
		alert("Informe um valor válido")
	} else {
		pesquisarDeletarObjeto(objetos, texto)
		exibirLista()
	}
}

function pesquisarAdicionarObjeto(array, elemento) {
	if (array.indexOf(elemento) == -1) {
		return array.push(elemento)
	} else {
		return alert("Objeto já adicionado")
	}
}

function pesquisarDeletarObjeto(array, elemento) {
	let indice = array.indexOf(elemento)
	if ( indice == -1) {
		alert("Este item não consta na lista") 
	} else {
		if (confirm("Tem certeza que deseja excluir este item da lista?\n\n" + elemento) == true){
			return array.splice(indice, 1)
		}
	}
}

function ordenarLista() {
	objetos.sort()
	exibirLista()
}