module.exports = (sequelize, Type) => {
    return sequelize.define('Comment', {
       
        id: {
          type: Type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },

        text:{
            type:Type.STRING
        },
        username:{
            type:Type.STRING,
            allowNull:false
        },
        postid:{
            type:Type.INTEGER
        },
        createdAt: Type.DATE,
        updatedAt: Type.DATE,
    },
    
    {
      freezeTableName: true,
    })
}