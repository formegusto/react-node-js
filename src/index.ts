import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "fe/build")));
app.get("/", (req: express.Request, res: express.Response) => {
  return res.sendFile(path.join(__dirname, "fe/build/index.html"));
});

app.listen(8080, () => {
  console.log("listen 8080 :)");
});
