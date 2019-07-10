module.exports = (sequelize, Type) => {
    return sequelize.define('Profile', {
       
        id: {
          type: Type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },

        profileImage:{
            type:Type.STRING,
            allowNull:false,
            unique:true
        },

        username:{
            type:Type.STRING,
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