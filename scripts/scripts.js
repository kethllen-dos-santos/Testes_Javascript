function distribui_caractere() {
	var caractere = document.getElementById("entrada").value
	document.getElementById("entrada").value = ""

	caractere = caractere.toLowerCase().trim().charAt(0)

	switch(caractere){
	case "0":
	case "1":
	case "2":
	case "3":
	case "4":
	case "5":
	case "6":
	case "7":
	case "8":
	case "9":
		document.getElementById("numeros").value += (" " + caractere)
		break;
	case "a":
	case "b":
	case "c":
	case "ç":
	case "d":
	case "4":
	case "e":
	case "f":
	case "g":
	case "h":
	case "i":
	case "j":
	case "k":
	case "l":
	case "m":
	case "n":
	case "o":
	case "p":
	case "q":
	case "r":
	case "s":
	case "t":
	case "u":
	case "v":
	case "x":
	case "w":
	case "y":
	case "z":
		document.getElementById("letras").value += (" " + caractere)
		break;
	default:
		document.getElementById("caractere_especial").value += (" " + caractere)
	}
}