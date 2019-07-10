module.exports = (sequelize, Type) => {
    return sequelize.define('Post', {
       
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
        image:{
            type:Type.STRING
        },
        createdAt: Type.DATE,
        updatedAt: Type.DATE,
    },
    
    {
      freezeTableName: true,
    })
}