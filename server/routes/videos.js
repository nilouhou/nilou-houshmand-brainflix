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

	//Sending only data that nav component needs and eliminate rest from sending more data to frontend
	videosData = videosData.map((vid) => {
		const {
			description,
			views,
			likes,
			duration,
			video,
			timestamp,
			comments,
			...listKeys
		} = vid;
		return listKeys;
	});

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

//post videos from upload page
router.post("/", (req, res) => {
	if (
		!req.body.title ||
		!req.body.channel ||
		!req.body.image ||
		!req.body.description
	) {
		return res
			.status(400)
			.send(
				"Please make sure to include title, channel, image and description of the video"
			);
	}

	const newVideo = {
		id: uuid(),
		title: req.body.title,
		channel: req.body.channel,
		image: req.body.image,
		description: req.body.description,
		views: 0,
		likes: 0,
		duration: "0:10",
		timestamp: new Date().getTime(),
		video: "https://project-2-api.herokuapp.com/stream",
		comments: [],
	};

	const videosData = readFile();
	videosData.push(newVideo);
	writeFile(videosData);

	return res.status(201).json(newVideo);
});

//post comment

router.post("/:videoId/comments", (req, res) => {
	if (!req.body.name || !req.body.comment) {
		return res.status(400).send("Please make sure to include name and comment");
	}

	const newComment = {
		id: uuid(),
		name: req.body.name,
		comment: req.body.comment,
		timestamp: new Date().getTime(),
	};

	const videosData = readFile();
	const video = videosData.find((video) => video.id === req.params.videoId);

	if (!video) {
		return res.status(404).send("video not found");
	}
	const updatedVideo = video.comments;
	updatedVideo.push(newComment);
	writeFile(videosData);

	return res.status(201).json(newComment);
});

// //Delete Comments
// router.delete("/videos/:videoId/comments/:commentId", (req, res) => {
// 	const videosData = readFile();
// 	// const filterComment = videosData.find(
// 	// 	(comment) => comment.id === req.params.videoId.commentId
// 	// );
// 	console.log(filterComment);
// 	console.log("id", req.params.videoId.commentId);

// 	// if (!video) {
// 	// 	return res.status(404).send("video not found");
// 	// }
// 	// const updatedVideo = video.comments;

// 	// const newComment = updatedVideo.splice(
// 	// 	updatedVideo.indexOf(filterComment),
// 	// 	1
// 	// );

// 	return res.status(200).json();
// });

module.exports = router;
