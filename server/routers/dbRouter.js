var dbRouter = require("express").Router();
const db = require("./db/database");

dbRouter.get("/api/miniappserver/:username/:fav/:choice", (req, res) => {
  var arr = Object.values(req.params);
  db.addtodb(arr, (err, data) => {
    if (err) throw err;
    console.log("data insert");
  });
  res.end();
});

dbRouter.get("/api/data/checkname/:name", (req, res) => {
  var name = req.params.name;
  db.retriveName(name, (err, data) => {
    if (err) throw err;
    data.map((el) => {
      el.username == name ? res.send(true) : el; 
    });
    res.send(false);
  });
});

dbRouter.get("/api/data/getUserProfile/:name", (req, res) => {
  var name = req.params.name;
  db.getUserDetail(name, (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});

module.exports = { dbRouter };
