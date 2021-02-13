const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const convertString = require("./helper");

const app = express();

app.use(cors());

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
    const start = req.query.start;
    const end = req.query.end;
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
  console.log("Server Works !!! At port 4000");
});
