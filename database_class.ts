/*
public 公共访问的
protect 类内部和子类能访问的
private 类内部能访问的
*/
class Database{
    dbname:string;
    private cmd:string;
    set_cmd(cl:string){
        this.cmd=cl;
        console.log(cl);
    }
    get_cmd(){
        return this.cmd;
    }
    constructor(dbname:string){
        this.dbname=dbname;
    }

    public showDB(){
        console.log(`数据库名字:${this.dbname}`)
    }
    protected connectDB(){
        console.log(`${this.dbname } 数据库连接中。。。。`);
        // this.closeDB()
    }
    private closeDB(){
        console.log(`${this.dbname}  关闭中。。。`)
    }
    
}

let oracle = new Database('ORACLE 甲骨文')
oracle.showDB();
console.log(oracle.set_cmd('select * from DB'))
console.log(oracle.get_cmd())
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
