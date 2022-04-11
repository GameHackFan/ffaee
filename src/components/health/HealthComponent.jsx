import React from 'react';

import "./Health.css";


const HealthComponent = (props) =>
{
	let characterOptions = new Array();
	
	const hidden = {display: "none"};
	const fieldOn = (props.characterKey in props.healthMap);
	let fieldStyle = fieldOn ? {} : hidden;
	let health = props.healthData[props.characterKey];

	Object.keys(props.healthMap).forEach((k) => {
		characterOptions.push(
			<option key={k} value={k}>
				{props.healthMap[k].label}
			</option>
		);
	});


	return (
		<div className="health rowLinedFlex">
			<label className="windowText">
				Use this window to edit how much health a character will have.
			</label>
			<label className="windowText">
				Select a character and then type a value between 0 and 
				65535 to be the new health value, values outside that range 
				will be ignored.
			</label>
			<label className="windowText">
				Each life bar has 145 points, the ranges for the bars are: 
				1st 0-144, 2nd 145-289, 3rd 290-434, 4th 435-579, 5th 580-724, 
				6th 725-869, 7th 870-1008, everything over these values will 
				will result in a life bar with the same color as the 7th 
				lifebar.
			</label>
			<label className="windowText">
				After doing your changes, click Add Changes to put your 
				changes in the modification queue. If you want to edit a 
				ROM and then change it later, save a preset file and 
				load it later.
			</label>
			<div className="windowContentLine colLinedFlex">
				<label>Character: </label>
				<select
					name="characterKey"
					className="buttonSolid"
					value={props.characterKey ? props.characterKey : "-1"}
					onChange={props.handleChange}
				>
					<option key="-1" value="none">
						Select a character
					</option>
					{characterOptions}
				</select>
			</div>
			<div
				className="windowContentLine colLinedFlex"
				style={fieldStyle}
			>
				<label>Health: </label>
				<input
					type="text"
					name="health"
					className="textfield"
					value={health ? health : ""}
					onChange={props.handleChange}
				/>
				<button
					className="buttonSolid"
					onClick={props.onDefaultValueClick}
				>
					Default Value
				</button>
			</div>
			<div className="windowContentLine">
				<button
					className="buttonSolid"
					onClick={props.onReloadDataClick}
				>
					Reload Data
				</button>
				<button
					className="buttonSolid"
					onClick={props.requestFile}
				>
					Load Preset
					<input
						type="file"
						value=""
						onChange={props.onLoadPresetFileChange}
					/>
				</button>
				<button
					className="buttonSolid"
					onClick={props.onSavePresetClick}
				>
					Save Preset
				</button>
				<button
					className="buttonSolid"
					onClick={props.onApplyToROMClick}
				>
					Apply To ROM
				</button>
			</div>
		</div>
	);
}


export default HealthComponent;