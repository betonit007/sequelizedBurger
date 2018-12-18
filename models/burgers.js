

module.exports = function(sequelize, Sequelize) {
    var Burgers = sequelize.define("Burgers", {
        burger_name: {
            type: Sequelize.STRING,
        },
        devoured: { 
            type: Sequelize.BOOLEAN, default:false 
        }
    });
    

    
    return Burgers;
    

};