/*
public 公共访问的
protect 类内部和子类能访问的
private 类内部能访问的
*/
class Database{
    dbname:string;
    constructor(dbname:string){
        this.dbname=dbname;
    }

    public showDB(){
        console.log(`数据库名字:${this.dbname}`);
        this.connectDB()
        this.closeDB()
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
// oracle.connectDB()
// oracle.closeDB()

class Postgre extends Database{
    doit(){
        super.showDB()
        super.connectDB()
        //super.closeDB()
    }
}

 let postgre =new Postgre('Postgre 数据库小象')

// postgre.showDB()
postgre.doit()
// console.log(postgre.dbname)
