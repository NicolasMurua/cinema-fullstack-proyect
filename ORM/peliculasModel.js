import { DataTypes } from "sequelize";
const peliculasAtributes = {
	Id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	Titulo: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	Director: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	Genero: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	Sinopsis: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	Duracion: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	//cambiar esto que seguro esta mal hecho
	Eliminado: {
		type: DataTypes.TINYINT,
		allowNull: false,
		defaultValue: 0,
	},
	IdClasificacion: {
		type: DataTypes.INTEGER,
	},
};
const peliculasOptions = {
	timestamps: false,
};

export { peliculasAtributes, peliculasOptions };
