const express = require("express");
const ytdl = require("ytdl-core");
const convertString = require("./helper");

const app = express();


app.use((_, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

app.get("/info", async (req, res) => {
    try {
        const URL = req.query.URL;
        const info = await ytdl.getInfo(URL);
      
        res.send({ info });
        
    } catch (error) {
        res.status(400).send({error:error})
        
    }
});

app.get("/download/mp3", async (req, res) => {
  try {
    const id = req.query.id;
    const title = req.query.title;
    res.header(
      "Content-Disposition",
      `attachment; filename=${
        title ? convertString(title) + ".mp3" : "song.mp3"
      }`
    );

    ytdl(id, {
      filter: (format) => !format.hasVideo,
      quality: "highest",
    }).pipe(res);
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

app.get("/download/mp4", async (req, res) => {
  try {
    const id = req.query.id;
    const title = req.query.title;
    res.header(
      "Content-Disposition",
      `attachment; filename=${
        title ? convertString(title) + "m" + ".mp4" : "video.mp4"
      }`
    );

    ytdl(id, {
      format: "mp4",
      quality: "highest",
    }).pipe(res);
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

app.listen(4000, () => {
});
