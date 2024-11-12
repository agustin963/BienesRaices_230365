import {DataTypes, STRING} from 'sequelize'
import db from '../db/config'

const User = db.define('tbb_users',{
    name:{
        type: DataTypes,STRING,
        allowNull:false
        //false es para que no vaya vacio 

    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: DataTypes.STRING,
    confirmado: DataTypes.BOOLEAN
})

export default db