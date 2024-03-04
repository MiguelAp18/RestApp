import db from "../database/db.js";
import { DataTypes } from "sequelize";

const CustomerModel = db.define('customers', {
    idcustomers: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        field: 'first_name'
    },
    last_name: {
        type: DataTypes.STRING,
        field: 'last_name'
    },
    table_number: {
        type: DataTypes.NUMBER,
        field: 'table_number'
    }
})

export default CustomerModel;