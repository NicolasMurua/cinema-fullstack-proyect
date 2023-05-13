import sequelize from "./DBConection/DBConection.js";
import { salasAtributes, salasOptions } from "./salasModel.js";
import { asientosAtributes, asientosOptions } from "./asientosModel.js";
import { filasAtributes, filasOptions } from "./filasModel.js";
import { funcionesAtributes, funcionesOptions } from "./funcionesModel.js";
import { peliculasAtributes, peliculasOptions } from "./peliculasModel.js";
import {
	clasificacionesAtributes,
	clasificacionesOptions,
} from "./clasificacionesModel.js";

const Salas = sequelize.define("Salas", salasAtributes, salasOptions);
const Asientos = sequelize.define(
	"Asientos",
	asientosAtributes,
	asientosOptions
);
const Filas = sequelize.define("Filas", filasAtributes, filasOptions);
const Funciones = sequelize.define(
	"Funciones",
	funcionesAtributes,
	funcionesOptions
);
const Peliculas = sequelize.define(
	"Peliculas",
	peliculasAtributes,
	peliculasOptions
);
const Clasificaciones = sequelize.define(
	"Clasificaciones",
	clasificacionesAtributes,
	clasificacionesOptions
);
sequelize.models.Filas.belongsTo(sequelize.models.Salas, {
	foreignKey: "IdSala",
});
sequelize.models.Asientos.belongsTo(sequelize.models.Filas, {
	foreignKey: "IdFila",
});
sequelize.models.Funciones.belongsTo(sequelize.models.Peliculas, {
	foreignKey: "IdPelicula",
});
sequelize.models.Funciones.belongsTo(sequelize.models.Salas, {
	foreignKey: "IdSala",
});
sequelize.models.Peliculas.belongsTo(sequelize.models.Clasificaciones, {
	foreignKey: "IdClasificacion",
});
try {
	await sequelize.sync();
} catch (error) {
	console.log(error);
}
export { sequelize };
