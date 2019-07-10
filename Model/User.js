module.exports = (sequelize, Type) => {
    return sequelize.define('User', {
       
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

        firstname:{
            type:Type.STRING,
            set(val) {
            this.setDataValue('firstname', val.toLowerCase())
        }
        },

        lastname:{
            type:Type.STRING,
            set(val) {
            this.setDataValue('lastname', val.toLowerCase())
        }
        },

        password:{
            type:Type.STRING,
            allowNull:false,
            validate:{
                len:{
                    args:[8,64],
                    msg:"Please Enter Password more than 8 character and less than 64 character"
                }
            }
        },

        gender:{
            type:Type.STRING,
            set(val) {
            this.setDataValue('gender', val.toLowerCase())
        }
        },
        
        latitude:{
            type:Type.INTEGER,
        },
        
        birth_date:{
            type:Type.DATE
        },
        
        phone_no:{
            type:Type.INTEGER,
        },
        
        longitude:{
            type:Type.INTEGER,
        },
        
        email:{
            type:Type.STRING,
            unique:true,
            validate: {
                isEmail:true
            }
        },
        
        verified:{
            type:Type.INTEGER,
            allowNull:false,
        },
        createdAt: Type.DATE,
        updatedAt: Type.DATE,
    },
    
    {
      freezeTableName: true,
    })
}