import { DataTypes } from "sequelize";
const filasAtributes = {
	Id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	Codigo: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	IdSala: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
};
const filasOptions = {
	timestamps: false,
};

export { filasAtributes, filasOptions };
