module.exports = function(sequelize, Sequelize) {
    var Customers = sequelize.define("Customers", {
        cust_name: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Must enter a valid name"
                },
                len: {
                    args: [3, 33],
                    msg: "String length is not in range"
                }
            }
        },
        num_burgers: Sequelize.INTEGER
    });
    
    return Customers;
};