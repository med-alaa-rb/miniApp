var dbRouter = require("express").Router();
const db = require("./db/database");

dbRouter.post("/api/miniappserver/postUserInfo", (req, res) => {
  var arr = Object.values(req.body)
  console.log(arr)
  db.addtodb(arr, (err, data) => {
    if (err) throw err;
    console.log("data insert");
  });
  res.end();
});

dbRouter.get("/api/data/checkname/:name", (req, res) => {
  var name = req.params.name;
  console.log(name);
  db.retriveName(name, (err, data) => {
    if (err) throw err;
    else if (!data) {
      res.send(false)
      return;
    }
    else {
      var result = false
      data.map((el) => {
        el.username == name ?  result = true : el; 
      });
      res.send(!result ? false : true)
    }
  });
});

dbRouter.get("/api/data/getUserProfile/:name", (req, res) => {
  var name = req.params.name;
  db.getUserDetail(name, (err, data) => {
    if (err) throw err;
    else if(!data) {
      res.send(false)
    }
    else {
      console.log(data)
      res.send(data[0])
      res.end();
    }
  });
});

module.exports = { dbRouter };
