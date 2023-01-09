const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'hoanlv', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
}
);

let connnectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to DB success');
    } catch (error) {
        console.error('Connection failure', error);
    }
}

module.exports = connnectDB