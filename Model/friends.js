module.exports = (sequelize, Type) => {
    return sequelize.define('Friend', {
       
        id: {
          type: Type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },

        UserId:{
            type:Type.INTEGER,
            allowNull:false,
        },
        friendId:{
            type:Type.INTEGER,
            allowNull:false
        },
        createdAt: Type.DATE,
        updatedAt: Type.DATE,
    },
    
    {
      freezeTableName: true,
    })
}