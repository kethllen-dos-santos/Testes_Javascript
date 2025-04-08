var minutos = 1000 * 60;
var horas = minutos * 60;
var dias = horas * 24;
var semanas = dias * 7;
var meses = dias * 30;
var anos = dias * 365

function calculardiferencaDatas() {
	var data1 = new Date(document.getElementById("data1").value);
	var data2 = new Date(document.getElementById("data2").value);

	if (data1.getHours() == 0) {
		data1.setHours(0,0)
	}
	if (data2.getHours() == 0) {
		data2.setHours(0,0)
	}

	if (data1 == null || data1 == undefined || data1 == "Invalid Date" ||
		data2 == null || data2 == undefined || data2 == "Invalid Date") {
		alert("Data ou hora inválida.")
	} else {
		var diferenca = Math.abs(data1.getTime() - data2.getTime());

		console.log("data1=" + data1.getHours() + ":" + data1.getMinutes())
		console.log("data2=" + data2.getHours() + ":" + data2.getMinutes())

		var saida = "Minutos: " + Math.floor(diferenca / minutos) + "<br />" + 
					"Horas: " + Math.floor(diferenca / horas) + "<br />" +
					"Dias: " + Math.floor(diferenca / dias) + "<br />" +
					"Semanas: " + Math.floor(diferenca / semanas) + "<br />" +
					"Meses: " + Math.floor(diferenca / meses) + "<br />" +
					"Anos: " + Math.floor(diferenca / anos) + "<br />";

		document.getElementById("lista").innerHTML = saida;
	}
}