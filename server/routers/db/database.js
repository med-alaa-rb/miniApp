const mysql = require("mysql");
const mysqlConfig = require("./config.js");
const connection = mysql.createConnection(mysqlConfig);


connection.connect( (err) =>{
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("sql connected");
  });


  const addtodb = (arr, callback) => {
    let sql =
      "insert into dbtable (username ,favColor, choice) values (?,?,?)";
    connection.query(sql, arr, (err, data) => {
      if (err) throw callback(err, null);
      callback(null, data);
    });
  };

  const retriveName = (name, callback) => {
    let sql = "select username from dbtable"
    connection.query(sql, (err, data) => {
      if (err) throw callback(err, null);
      callback(null, data);
    });
  }


  const getUserDetail = (name, callback) => {
    let sql = `select * from dbtable where username = ?`
    connection.query(sql, name,(err, data) => {
      if (err) throw callback(err, null);
      callback(null, data);
    });
  }  


  module.exports = {addtodb, retriveName, getUserDetail}