/*
public 公共访问的
protect 类内部和子类能访问的
private 类内部能访问的
*/
var Database = /** @class */ (function () {
    function Database(dbname) {
        this.dbname = dbname;
    }
    Database.prototype.set_cmd = function (cl) {
        this.cmd = cl;
        console.log(cl);
    };
    Database.prototype.get_cmd = function () {
        return this.cmd;
    };
    Database.prototype.showDB = function () {
        console.log("\u6570\u636E\u5E93\u540D\u5B57:" + this.dbname);
    };
    Database.prototype.connectDB = function () {
        console.log(this.dbname + " \u6570\u636E\u5E93\u8FDE\u63A5\u4E2D\u3002\u3002\u3002\u3002");
        // this.closeDB()
    };
    Database.prototype.closeDB = function () {
        console.log(this.dbname + "  \u5173\u95ED\u4E2D\u3002\u3002\u3002");
    };
    return Database;
}());
var oracle = new Database('ORACLE 甲骨文');
oracle.showDB();
console.log(oracle.set_cmd('select * from DB'));
console.log(oracle.get_cmd());
//oracle.connectDB()
// oracle.closeDB()s
// class Postgre extends Database{
//     doit(){
//         //super.showDB()
//         super.connectDB()
//         //super.closeDB()
//     }
// }
//  let postgre =new Postgre('Postgre 数据库小象')
// // postgre.showDB()
//  postgre.doit()
// console.log(postgre.dbname)
