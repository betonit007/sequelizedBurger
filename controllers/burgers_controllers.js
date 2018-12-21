var db = require("../models");

/////Routes/////////////////////////////////
module.exports = function(app) {


    app.get("/", function(req, res) {
        db.Burgers.findAll({include: [ db.Customer ] }).then(function(data) {
            var allBurgers = {
                burgers: data
            };
            res.render("index", allBurgers);
        });
    });

    app.post("/api/burgers", function(req, res) {
        db.Burgers.create({
            burger_name: req.body.name,
            devoured: req.body.devoured
        }).then(function(result) {
        res.json({ id: result.insertId });
        });
    });

    app.post("/api/cust", function(req, res) {
        console.log("this is customer " + req.body.cust_name);
        db.Customer.create(
            {
            cust_name: req.body.cust_name
            }      
        ).then(function(result) {
        res.json(result);
        });
    });

    app.put("/api/burgers/:id", function(req, res) {
       console.log("id = " + req.params.id);

        console.log("custID: ", req.body.custId);

        db.Burgers.update(
            {
                devoured: true,
                CustomerId: req.body.custId
            },
            {
            where: {id: req.params.id}
            }
        ).then(function() {
            res.end();
        });
    });
};

