module.exports = (sequelize, Type) => {
    return sequelize.define('Admin', {
       
        id: {
          type: Type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        username:{
            type:Type.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type:Type.STRING,
            allowNull:false,
        },
        createdAt: Type.DATE,
        updatedAt: Type.DATE,
    },
    
    {
      freezeTableName: true,
    })
}