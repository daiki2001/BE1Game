export default {
 /**
  * APIサーバーのPORT番号
  */
 port: process.env.PORT,

 /**
  * databaseの作成
  */
 db: {
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_STOPWATCH_GAME_DATABASE,
   multipleStatements: true,
 },
};