#Explicacion del procedimiento usado para resolver el problema
Tuve varios problemas durante varios dias para poder migrar la base de datos con los datos ya insertados al programa y para solucionarlos llegue a esta solucion.

1. Iniciar el programa sin tener el archivo database.db creado, para que sequelize.sync() creara el schema de la tabla
2. Ejecutar el archivo datos.sql para poder insertar los datos a database.db
3. Volver a ejecutar el programa y todo funciona correctamente.

# NOTA: si no se realizan los pasos en este orden se generan muchos problemas de diferente tipo, mayormente relacionados a la insercion de la nueva tabla Calificaciones al archivo database.db viejo en el cual esa tabla no existe y la estructura de la tabla Peliculas es diferente.
