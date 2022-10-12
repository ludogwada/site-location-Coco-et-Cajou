import React from 'react';
import logoVideo from '../../assets/LogoVideo.mp4';

const Video = () => {
	return (
		<video
			title='logo'
			src={logoVideo}
			height='100%'
			width='100%'
			autoPlay
			muted></video>
	);
};

export default Video;
