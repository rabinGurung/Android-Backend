module.exports = (sequelize, Type) => {
    return sequelize.define('Like', {
       
        id: {
          type: Type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        postid:{
            type:Type.INTEGER,
            allowNull:false,
            unique:true
        },
        like:{
            type:Type.INTEGER
        },
        createdAt: Type.DATE,
        updatedAt: Type.DATE,
    },
    
    {
      freezeTableName: true,
    })
}