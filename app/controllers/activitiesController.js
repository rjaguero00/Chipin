var model = require('../models');
module.exports = {
    // FINDS ALL VOLUNTEER ACTIVITIES IN DATABASE
    findAll: function (req, res) {
        modal.activity.findAll()
            .then(function (data) {
                res.json(data);
            })
    },
    //CREATES NEW VOLUNTEER ACTIVITY IN DATABASE 
    postEvent: function (req, res) {
        console.log(req.body);
        var title = req.body.title;
        var body = req.body.body;
        var contact = req.body.contact;
        var address = req.body.address;
        var time = req.body.time;
        var dates = req.body.dates;
        var hours = req.body.hours;
        var points = req.body.points;
        model.activity.create({
            title: title,
            body: body,
            contact: contact,
            address: address,
            time: time,
            dates: dates,
            hours: hours,
            points: points
        }).then(function (data) {
            console.log(data);
            res.redirect('/dashboard');
        })
    },
    // DELETES VOLUNTEER ACTIVITY FROM DATABASE - USED BY VOLUNTEER ACTIVITY CREATORS
    remove: function (req, res) {
        model.activity.destroy({
            where: { id: req.body.id }
        }).then(function (data) {
            console.log("Item has beend deleted");
            res.redirect("/dashbooard")
        })
    }
}

