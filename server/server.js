const express = require("express");
require("dotenv").config();
const cors = require("cors");
const videosRouter = require("./routes/videos");

const app = express();
const PORT = process.env.PORT || 5050;
app.use(
	cors({
		origin: process.env.CLIENT_URL,
	})
);

app.use(express.json());

app.use("/videos", videosRouter);

app.listen(PORT, () => console.log(`🚀 Server listening on ${PORT}`));
