require('dotenv').config();

const conf = {};
conf.environment = process.env.ENVIRONMENT;
conf.sequelize = {};
conf.sequelize.username = process.env.DB_USER; //database username
conf.sequelize.password = process.env.DB_PASSWORD; //database password kosongkan jika tidak pakai password
conf.sequelize.database = process.env.DB_DATABASE; //isi dengan nama database
conf.sequelize.host = process.env.DB_HOST;
conf.sequelize.dialect = 'mysql';
conf.sequelize.port = process.env.DB_PORT;
conf.sequelize.define = {
charset: 'utf8mb4',
dialectOptions: {
collate: 'utf8mb4_unicode_ci'
}
}
conf.ROUND_SALT = 8;
module.exports = conf;