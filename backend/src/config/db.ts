import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('db_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

export default sequelize;