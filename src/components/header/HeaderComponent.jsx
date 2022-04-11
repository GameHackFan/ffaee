import React from 'react';

import imageMap from '../../data/ImageMap';

import "./Header.css";


const HeaderComponent = (props) =>
{
	let logoTitle = "Final Fight Anniversary Edition Editor";
			
	return (
		<header
			className="header colLinedFlex"
			style={{zoom: props.zoom}}
		>
			<div className="colLinedFlex">
				<div className="colLinedFlex">
					<img
						className="ffaeeLogo"
						src={imageMap.ffaeeLogo}
						title={logoTitle}
					/>
					<div className="colLinedFlex">
						<img
							src={imageMap.portraitGuy}
							title="Guy"
						/>
						<img
							src={imageMap.portraitCody}
							title="Cody"
						/>
						<img
							src={imageMap.portraitHaggar}
							title="Haggar"
						/>
					</div>
				</div>
			</div>
		</header>
	);
}


export default HeaderComponent;