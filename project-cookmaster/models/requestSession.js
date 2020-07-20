const mysqlx = require('@mysql/xdevapi');

const requestSession = async () => mysqlx
  .getSession({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.PORT,
  })
  .then((session) => session);

module.exports = requestSession;
