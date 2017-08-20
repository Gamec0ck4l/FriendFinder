var friendsData = require("../data/friends");

module.exports = function(app){

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });


    app.post("/api/friends", function(req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        if (tableData.length < 5) {
          tableData.push(req.body);
          res.json(true);
        }
        else {
          waitListData.push(req.body);
          res.json(false);
        }
      });
    



};