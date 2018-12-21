module.exports = function(sequelize, Sequelize) {
    var Burgers = sequelize.define("Burgers", {
        burger_name: {
            type: Sequelize.STRING,
        },
        devoured: { 
            type: Sequelize.BOOLEAN, default:false 
        }
    });

    Burgers.associate = function(models) {
        Burgers.belongsTo(models.Customer, {
            foreignKey: {
                allowNull: true
            }
        });
    };;
    

    
    return Burgers;
    

};
