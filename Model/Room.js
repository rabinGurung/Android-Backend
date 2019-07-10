module.exports = (sequelize, Type) => {
    return sequelize.define('Room', {
       
        id: {
          type: Type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        username1:{
            type:Type.INTEGER,
            allowNull:false
        },
        username2:{
            type:Type.INTEGER,
            allowNull:false
        },
        RoomID:{
            type:Type.INTEGER,
            allowNull:false,
            unique:true
        },
        createdAt: Type.DATE,
        updatedAt: Type.DATE,
    },
    
    {
      freezeTableName: true,
    })
}