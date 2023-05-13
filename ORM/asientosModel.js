import { DataTypes } from "sequelize";
const asientosAtributes = {
	Id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	Numero: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	IdFila: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
};
const asientosOptions = {
	timestamps: false,
};

export { asientosAtributes, asientosOptions };
