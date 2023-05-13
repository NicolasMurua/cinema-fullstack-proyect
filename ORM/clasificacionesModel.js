import { DataTypes } from "sequelize";
const clasificacionesAtributes = {
	Id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	Titulo: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	Descripcion: {
		type: DataTypes.STRING,
		allowNull: false,
	},
};
const clasificacionesOptions = {
	timestamps: false,
};

export { clasificacionesAtributes, clasificacionesOptions };
