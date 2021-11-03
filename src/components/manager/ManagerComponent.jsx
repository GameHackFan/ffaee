import React from 'react';

import componentService from '../../service/ComponentService';

import "./Manager.css";


const ManagerComponent = (props) =>
{
	let windowOptions = [];
	let romTypeOptions = [];
	let im = componentService.getInfoMap();
	let waitMessage = props.generatingROM ? {} : {display: "none"};

	Object.keys(im).forEach((e) =>
	{
		let ci = im[e];

		if(e !== "manager" && ci.type === "windowContent")
		{
			windowOptions.push(
				<option key={e} value={e}>
					{ci.title}
				</option>
			);
		}
	});

	Object.keys(props.romTypeMap).forEach((k) =>
	{
		let rt = props.romTypeMap[k];
		romTypeOptions.push(
			<option key={k} value={rt.converterKey}>
				{rt.label}
			</option>
		);
	});

	return (
		<div className="manager rowLinedFlex">
			<label className="windowText">
				This is the main window of the editor. Here you 
				can enable all the features this editor offers. 
				Here you can also load, clone and generate a ROM. 
			</label>
			<label className="windowText">
				Before start editing the ROM, you need to load 
				and clone it. After doing all the changes desired, 
				you need to select a ROM Type and click on Generate 
				ROM to create the .zip file of the ROM. If you don't 
				select a ROM Type, it will generate a rom compatible 
				with FBNeo by default. Keep in mind that the process 
				to generate a ROM is a little bit slow, so be patient 
				and wait.
			</label>
			<label className="windowText">
				If you applied changes made by the Seed Randomizer and 
				the Level Editor, the byte order might change and 
				applying more changes from those 2 windows might crash 
				the ROM, so make sure you do all changes needed first 
				before applying them to the ROM. You can also clone the 
				ROM in case you did unwanted changes, it will clone the 
				ROM loaded and overwrite all changes made.
			</label>
			<div className="colLinedFlex windowContentLine">
				<label>Window Selector: </label>
				<select
					className="buttonSolid"
					onChange={props.onWindowSelectorChanged}
				>
					<option key="none" value="none">
						Select a window
					</option>
					{windowOptions}
				</select>
			</div>
			<div className="colLinedFlex windowContentLine">
				<label>ROM Type: </label>
				<select
					name="converterKey"
					className="buttonSolid"
					onChange={props.handleChange}
					value={props.converterKey ? props.converterKey : ""}
				>
					<option key="none" value="none">
						Select a ROM Type
					</option>
					{romTypeOptions}
				</select>
			</div>
			<div>
				<button
					className="buttonSolid"
					onClick={props.requestFile}
				>
					Load FFAE ROM
					<input
						type="file"
						value=""
						onChange={props.onLoadROMFileChange}
					/>
				</button>
				<button
					className="buttonSolid"
					onClick={props.onCloneROMClick}
				>
					Clone ROM
				</button>
				<button
					className="buttonSolid"
					onClick={props.onGenerateROMClick}
				>
					Generate ROM
				</button>
			</div>
			<div
				className="windowContentLine colLinedFlex"
				style={waitMessage}
			>
				<label className="romMessage">
					Please wait, the ROM is being generated.
				</label>
			</div>
		</div>
	);
}


export default ManagerComponent;