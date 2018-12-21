module.exports = function(sequelize, Sequelize) {
    var Customer = sequelize.define("Customer", {
        cust_name: Sequelize.STRING
    });
    Customer.associate = function (models) {
        Customer.hasMany(models.Burgers, {
        });
    };

    return Customer;
};