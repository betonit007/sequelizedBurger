var db = require("../models");

/////Routes/////////////////////////////////
module.exports = function(app) {


    app.get("/", function(req, res) {
        db.Burgers.findAll({}).then(function(data) {
            var allBurgers = {
                burgers: data
            };
            console.log(allBurgers);
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

    app.put("/api/burgers/:id", function(req, res) {
        var condition = "id = " + req.params.id;

        console.log("condition", condition);

        db.Burgers.update(
            {
                devoured: true
            },
            {
            where: {id: req.params.id}
            }
        ).then(function() {
            res.end();
        });
    });
};

