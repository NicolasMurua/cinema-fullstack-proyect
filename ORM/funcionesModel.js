import { DataTypes } from "sequelize";
const funcionesAtributes = {
	Id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	IdPelicula: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	Fecha: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	HoraInicio: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	HoraFin: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	IdSala: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	//cambiar esto que seguro esta mal hecho
	Eliminado: {
		type: DataTypes.TINYINT,
		allowNull: false,
		defaultValue: 0,
	},
};
const funcionesOptions = {
	timestamps: false,
};

export { funcionesAtributes, funcionesOptions };
