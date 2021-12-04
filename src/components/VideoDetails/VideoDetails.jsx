import React from "react";
import "./VideoDetails.scss";

// {
//     "title":"BMX Rampage: 2021 Highlights",
//     "channel":"Red Cow",
//     "image":"https://i.imgur.com/l2Xfgpl.jpg",
//     "description":"On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
//     "views":"1,001,023",
//     "likes":"110,985",
//     "duration":"4:01",
//     "video":"https://project-2-api.herokuapp.com/stream",
//     "timestamp":1626032763000,
//     "comments":[
//        {
//           "name":"Micheal Lyons",
//           "comment":"They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.",
//           "likes":0,
//           "timestamp":1628522461000
//        }
//     ],
//     "id":"84e96018-4022-434e-80bf-000ce4cd12b8"
//}

const VideoDetails = (props) => {
	const {title,channel,image,description,views,likes,duaration,video,timestamp,comments,id} = props.selected;
	return (
		
          <div className="video-details">
			  <h1 className="video-details__title">{title}</h1>
			
		  </div>
		
		

	);
};

export default VideoDetails;
