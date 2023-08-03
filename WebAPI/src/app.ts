import express from "express";
import config from "./config";
import * as mysql from "promise-mysql";

const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(config.port, () => {
  console.log(`Start on port ${config.port}.`);
});

const connection = async () => {
  return await mysql.createConnection(config.db);
};

app.get("/", (req, res) => {
  res.send('Hello World!');
});

// 一覧取得
app.get("/swgames", (req: express.Request, res: express.Response) => {
  connection()
    .then((connection) => {
      const result = connection.query(
        "SELECT * FROM score_ranking ORDER BY score DESC LIMIT 5"
        );
      connection.end();
      return result;
    })
    .then(function(rows) {
      res.send(rows);
    });
});

// 追加処理
app.post("/swgames", (req: express.Request, res: express.Response) => {
  const score = req.body.score;
  connection()
    .then((connection) => {
      const result = connection.query("INSERT INTO score_ranking (score) VALUES (?)", [
        score,
      ]);
      connection.end();
      return result;
    })
    .then(function(rows) {
      res.send(rows);
    });
});
