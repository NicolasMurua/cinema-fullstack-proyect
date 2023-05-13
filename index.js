import { json } from "sequelize";
import { sequelize } from "./ORM/createConection.js";

async function getPeliculas() {
	const peliculas = await sequelize.models.Peliculas.findAll({
		attributes: [
			"Id",
			"Titulo",
			"Director",
			"Genero",
			"Sinopsis",
			"Duracion",
			"Eliminado",
		],
		order: [["Titulo", "ASC"]],
	});
	console.log(
		"getPeliculas (Ordenado por titulo):\n",
		JSON.stringify(peliculas, null, 2)
	);
}
//getPeliculas();
async function getPeliculaMasPopular() {
	const idPeliculas = await sequelize.models.Funciones.findAll({
		attributes: ["IdPelicula"],
		order: [["IdPelicula", "ASC"]],
	});
	let data = [];
	idPeliculas.forEach((element) => {
		data.push(element.IdPelicula);
	});
	let aux = 0;
	let max = 0;
	let res = 0;
	for (let i = 0; i < data.length; i++) {
		if (data[i - 1] !== data[i]) {
			if (aux > max) {
				max = aux;
				res = data[i - 1];
			}
			aux = 0;
		} else {
			aux++;
		}
	}
	console.log(res);
	const peliculaMasPopular = await sequelize.models.Peliculas.findAll({
		where: { Id: 3 },
		attributes: ["Titulo", "Genero", "Sinopsis", "Duracion", "Director"],
	});
	console.log(
		"Pelicula mas popular:\n",
		JSON.stringify(peliculaMasPopular, null, 2)
	);
}
//getPeliculaMasPopular();
async function getFinFuncion(pelicula) {
	//el frontend tiene que validar que la hora
	const idPeliculaArgument = pelicula.idPelicula;
	const horaInicio = pelicula.horaInicio;
	const duracionJSON = await sequelize.models.Peliculas.findAll({
		where: { Id: idPeliculaArgument },
		attributes: ["Titulo", "Duracion"],
	});
	const duracionPelicula = duracionJSON[0].Duracion;
	//Falta implementar la logica de la nueva fecha, (AED)
	const returnA = {
		Titulo: duracionJSON[0].Titulo,
		horaFinalizacion: 32,
	};
	console.log("Hora Fin de la pelicula:\n", JSON.stringify(returnA, null, 2));
}
/*
getFinFuncion({
	fecha: new Date(),
	horaInicio: "20:48",
	sala: 3,
	idPelicula: 2,
});
*/
/*INSERTAR ELEMENTO TENER CUIDADO PORQUE PUEDE ROMPER LA DB
async function insertarFuncion(funcion) {
	const funcionCreada = await sequelize.models.Funciones.create(funcion);
	console.log(JSON.stringify(funcionCreada));
}

insertarFuncion({
	IdPelicula: 4,
	Fecha: "2023-05-01",
	HoraInicio: "10:25",
	HoraFin: "12:25",
	IdSala: 2,
	Eliminado: 0,
});
*/
async function getLastElementOfFuncion() {
	const funciones = await sequelize.models.Funciones.findAll({
		attributes: [
			"Id",
			"IdPelicula",
			"Fecha",
			"HoraInicio",
			"HoraFin",
			"IdSala",
			"Eliminado",
		],
		order: [["Id", "ASC"]],
	});
	//Conseguir el ultimo objeto de un array de objetos JSON
	console.log(JSON.stringify(funciones[funciones.length - 1], null, 2));
}
//getLastElementOfFuncion();
