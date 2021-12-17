const express = require("express");
const fs = require("fs");
const router = express.Router();
const { v4: uuid } = require("uuid");

const readFile = () => {
	const videosData = fs.readFileSync("./data/videos.json");
	return JSON.parse(videosData);
};

const writeFile = (videosData) => {
	fs.writeFileSync("./data/videos.json", JSON.stringify(videosData, null, 2));
};

router.get("/", (_req, res) => {
	let videosData = readFile();

	return res.status(200).send(videosData);
});

router.get("/:videoId", (req, res) => {
	const videosData = readFile();
	const video = videosData.find((video) => video.id === req.params.videoId);

	if (!video) {
		return res.status(404).send("video not found");
	}

	return res.status(200).json(video);
});

module.exports = router;
