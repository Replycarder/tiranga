const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '190.92.174.39',
    user: 'luckybattle_win',
    password: 'luckybattle_win',
    database: 'luckybattle_win'
});

export default connection;