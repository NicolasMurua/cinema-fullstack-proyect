import { DataTypes } from "sequelize";
const salasAtributes = {
	Id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	Nombre: {
		type: DataTypes.STRING,
		allowNull: false,
	},
};
const salasOptions = {
	timestamps: false,
};

export { salasAtributes, salasOptions };
