var mysql = require('mysql');

var connection;

function startSQL()
{
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'rune',
        password: '123456',
        database:'test'
    });
}

function connect()
{
    connection.connect();
}

function selece(tableName, val)
{
    connection.query('select * from `mytable`', function(err, rows, fields) {
        if (err) throw err;
        console.log('查询结果为: ', rows);
    });
}

function endSQL()
{
    connection.end();ß
}

exports.startSQL=startSQL;
exports.connect=connect;
exports.selece=selece;
exports.endSQL=endSQL;