var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
public 公共访问的
protect 类内部和子类能访问的
private 类内部能访问的
*/
var Database = /** @class */ (function () {
    function Database(dbname) {
        this.dbname = dbname;
    }
    Database.prototype.showDB = function () {
        console.log("\u6570\u636E\u5E93\u540D\u5B57:" + this.dbname);
        this.connectDB();
        this.closeDB();
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
// oracle.connectDB()
// oracle.closeDB()
var Postgre = /** @class */ (function (_super) {
    __extends(Postgre, _super);
    function Postgre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Postgre.prototype.doit = function () {
        _super.prototype.showDB.call(this);
        _super.prototype.connectDB.call(this);
        //super.closeDB()
    };
    return Postgre;
}(Database));
var postgre = new Postgre('Postgre 数据库小象');
// postgre.showDB()
postgre.doit();
// console.log(postgre.dbname)
