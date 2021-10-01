const {Sequelize} = require("sequelize");

const sequelize= new Sequelize(
    "postgres",
    "postgres",
    "1234",
    {
        host: "localhost",
        dialect : "postgres"
    }
)

sequelize.sync();

(async()  => {
    try {
        await sequelize.authenticate();
        console.log("Connection Established");
    } catch (error) {
        console.error("Authentication Failed");
    }
})();

module.exports = sequelize;