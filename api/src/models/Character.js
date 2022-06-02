const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("character", {
    id:{
      type: DataTypes.UUID, //esto fue especificamente con el de countries
      defaultValue: DataTypes.UUIDV4, //misma cosa pero las chances de colison son casi nulas y pues aqui esta en valor por defecto
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    species: {
      type: DataTypes.STRING,
    },
    origin:{
      type: DataTypes.STRING,
    },
    image:{
      type: DataTypes.STRING,
    },
    created:{
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
