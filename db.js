const mysql=require('mysql')

function connect(){
    const connection=mysql.createConnection({
  
        host: '172.18.4.118',
        user: 'root',
        database: 'db1',
        password: 'root',
        port: 9099,
    })

    connection.connect();
    return connection;
}

module.exports={
    connect:connect
}