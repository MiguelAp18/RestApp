import { Sequelize } from 'sequelize';

const db = new Sequelize('bd_rest', 'root', process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});


export default db;
