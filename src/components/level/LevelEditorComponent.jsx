import React from 'react';

import levelEditorLevels from '../../data/level/LevelEditorLevels';
import levelEditorEnemies from '../../data/level/LevelEditorEnemies';

import "./LevelEditor.css";


const LevelEditorComponent = (props) =>
{
	const {level, enemyGroup, enemyId, enemy, enemies} = props;
	const levelOptions = [];
	const groupOptions = [];
	const idOptions = [];
	const enemyOptions = [];
	let leegs = levelEditorLevels[level];
	leegs = leegs ? leegs : {};
	leegs = leegs.groups;
	leegs = leegs ? leegs : {};
	let leeg = leegs[enemyGroup]; 
	leeg = leeg ? leeg : {};

	const groupOn = props.romReady && level ? true : false;
	const enemiesOn = groupOn && enemyGroup ? true : false;
	let editOn = enemiesOn && !isNaN(enemyId);
	editOn = editOn && enemies[enemyId] ? true : false;

	const hidden = {display: "none"};
	const groupStyle = groupOn ? {} : hidden;
	const enemiesStyle = enemiesOn ? {} : hidden;
	const editStyle = editOn ? {} : hidden;
	const lockAllStyle = props.romReady ? {} : hidden;
	const delayFieldStyle = leeg.mustHaveSpawnDelayTime ? {} : hidden;
	const verticalStyle = leeg.hasElevator ? {overflowY: "scroll"} : {};

	Object.keys(levelEditorLevels).forEach((lk) =>
	{
		levelOptions.push(
			<option key={lk} value={lk}>
				{levelEditorLevels[lk].label}
			</option>
		);
	});

	Object.keys(leegs).forEach((egk) =>
	{
		let g = leegs[egk];

		if(!g.disabled)
		{
			groupOptions.push(
				<option key={egk} value={egk}>
					{g.label}
				</option>
			);
		}
	});

	Object.keys(enemies).forEach((id) =>
	{
		let key = enemies[id].enemyKey;

		idOptions.push(
			<option key={id} value={id}>
				{id + ": " + levelEditorEnemies[key].label}
			</option>
		);
	});

	props.enemySelectList.forEach((ek) =>
	{
		let label = levelEditorEnemies[ek].label;

		if(label)
		{
			enemyOptions.push(
				<option key={ek} value={ek}>
					{label}
				</option>
			);
		}
	});

	let base = leeg.positionXForceShift;
	base = base ? base : parseInt(enemy.triggerPosition);
	base = isNaN(base) ? 0 : base;
	let minPX = base ? (base - 70) : 0;
	let maxPX = base ? (base + 450) : 0;

	return (
		<div className="level rowLinedFlex">
			<label className="windowText">
				Use this window to edit all the enemies in all levels.
			</label>
			<label className="windowText">
				Here you can choose what enemy or item will spawn, 
				you can change the position to trigger their spawn, 
				you can change their X and Y positions, you can 
				change their offensive and defensive behavior 
				and you can change the spawn delay time.
			</label>
			<label className="windowText">
				You need to select the level and the enemy group to 
				be able to add, remove or edit an enemy or item.
			</label>
			<label className="windowText">
				Click apply changes and it will apply all customizations 
				to a cloned ROM. Click in Save Preset and it will save a 
				file containing all the customizations. Click in Load 
				Preset to load a file contaning all the customizations made.
			</label>
			<label className="windowText">
				The Trigger Position, Offensive Behavior, Deffensive 
				Behavior and Spawn Delay Time always have a minimum 
				and maximum value. The editor will allow you to insert 
				any value you want but it will fix those values to be 
				the maximum or the minimum possible to avoid bugs. It 
				is recommended that you always insert valid values 
				between the maximum and the minimum to avoid having 
				surprises about the enemies being automatically moved 
				by the editor when you apply the customizations. Spawn 
				Delay Time is used only by 'Lock' or 'Boss Helper' enemy 
				groups, so it will not always be available to edit.
			</label>
			<label className="windowText">
				If you want to edit a ROM and then change it later, save 
				a preset file and load it later so you don't lose your 
				customizations.
			</label>
			<label
				className="windowErrorMessage warning"
				style={props.romReady ? {display: "none"} : {}}
			>
				No ROM ready to edit.
			</label>
			<div
				className="windowContentLine colLinedFlex"
				style={lockAllStyle}
			>
				<label>Level: </label>
				<select
					name="level"
					className="buttonSolid"
					value={level ? level : ""}
					onChange={props.handleChange}
				>
					<option key="-1" value="">
						Select a level
					</option>
					{levelOptions}
				</select>
			</div>
			<div
				className="windowContentLine colLinedFlex"
				style={groupStyle}
			>
				<label>Enemy Group: </label>
				<select
					name="enemyGroup"
					className="buttonSolid"
					value={enemyGroup ? enemyGroup : ""}
					onChange={props.handleChange}
				>
					<option key="-1" value="">
						Select an enemy group
					</option>
					{groupOptions}
				</select>
			</div>
			<div
				className="enemyGroup"
				style={enemiesStyle}
			>
				<div
					className="levelDisplay"
					style={verticalStyle}
				>
					<img src={props.levelImage} />
				</div>
				<div className="enemyGroupText">
					<label>The original rom has</label>
					<span> {leeg.defaultAmount} </span>
					<label>object(s) in this group.</label>
					<br />
					<label>The maximum amount accepted is</label>
					<span> {leeg.maxAmount} </span>
					<label>object(s) in this group. </label>
					<br />
					<label>If you insert more than </label>
					<span> {leeg.maxAmount}</span>
					<label>
						, the editor will remove the extra object(s) to 
						avoid the game to be overloaded.
					</label>
				</div>
				<div className="hintText">
					<label>
						<b>{"Cyan Line: "}</b>
						Represents the limits of the group.
					</label>
					<label>
						<b>{"Green Line: "}</b>
						Represents the position of the camera that will 
						trigger the enemy being spawned.
					</label>
					<label>
						<b>{"Red Line: "}</b>
						Represets the camera's field of view.
					</label>
				</div>
				<div
					className="windowContentLine colLinedFlex"
				>
					<button
						className="buttonSolid"
						onClick={props.onAddEnemyClick}
					>
						Add
					</button>
					<button
						className="buttonSolid"
						onClick={props.onRemoveEnemyClick}
					>
						Remove Selected
					</button>
					<button
						className="buttonSolid"
						onClick={props.onRefreshImageClick}
					>
						Refresh Image
					</button>
				</div>
				<div
					className="windowContentLine colLinedFlex"
				>
					<label>
						Enemy ID: 
					</label>
					<select
						name="enemyId"
						className="buttonSolid"
						value={enemyId}
						onChange={props.handleChange}
					>
						<option key="none" value="none">
							Select an enemy id
						</option>
						{idOptions}
					</select>
				</div>
				<div
					style={editStyle}
				>
					<div
						className="windowContentLine colLinedFlex"
					>
						<label>
							Enemy / Object Filter: 
						</label>
						<input
							type="text"
							name="filterEnemyString"
							className="textfield"
							value={props.filterEnemyString ? props.filterEnemyString : ""}
							onChange={props.handleChange}
						/>
					</div>
					<div
						className="windowContentLine colLinedFlex"
					>
						<label>
							Enemy / Object: 
						</label>
						<select
							name="enemyKey"
							className="buttonSolid"
							value={enemy.enemyKey}
							onChange={props.handleEnemyDataChange}
						>
							{enemyOptions}
						</select>
					</div>
					<div
						className="windowContentLine colLinedFlex"
					>
						<label>
							Trigger Position: <br/>
						</label>
						<input
							type="text"
							name="triggerPosition"
							className="textfield"
							value={enemy.triggerPosition ? enemy.triggerPosition : ""}
							onChange={props.handleEnemyDataChange}
						/>
						<span>
							{"(Minimum = " + leeg.screenPositionStart}
							{", Maximum = " + leeg.screenPositionEnd + ")"}
						</span>
					</div>
					<div
						className="windowContentLine colLinedFlex"
					>
						<label>
							Position X:  
						</label>
						<input
							type="text"
							name="positionX"
							className="textfield"
							value={enemy.positionX ? enemy.positionX : ""}
							onChange={props.handleEnemyDataChange}
						/>
						<span>
							{"(Minimum = " + minPX}
							{", Maximum = " + maxPX + ")"}
						</span>
					</div>
					<div
						className="windowContentLine colLinedFlex"
					>
						<label>
							Position Y: 
						</label>
						<input
							type="text"
							name="positionY"
							className="textfield"
							value={enemy.positionY ? enemy.positionY : ""}
							onChange={props.handleEnemyDataChange}
						/>
						<span>
							{"(Recommended Values between "}
							{leeg.walkablePositionYBottom  + " and "}
							{leeg.walkablePositionYTop + ")"} 
						</span>
					</div>
					<div
						className="windowContentLine colLinedFlex"
					>
						<label>
							Offensive Behavior: <br/>
						</label>
						<input
							type="text"
							name="offensiveBehavior"
							className="textfield"
							value={enemy.offensiveBehavior ? enemy.offensiveBehavior : ""}
							onChange={props.handleEnemyDataChange}
						/>
						<span>(Minimum = 0, Maximum = 255)</span>
					</div>
					<div
						className="windowContentLine colLinedFlex"
					>
						<label>
							Deffensive Behavior: <br/>
						</label>
						<input
							type="text"
							name="defensiveBehavior"
							className="textfield"
							value={enemy.defensiveBehavior ? enemy.defensiveBehavior : ""}
							onChange={props.handleEnemyDataChange}
						/>
						<span>(Minimum = 0, Maximum = 255)</span>
					</div>
					<div
						className="windowContentLine colLinedFlex"
						style={delayFieldStyle}
					>
						<label>
							Spawn Delay Time: <br/>
						</label>
						<input
							type="text"
							name="spawnDelayTime"
							className="textfield"
							value={enemy.spawnDelayTime ? enemy.spawnDelayTime : ""}
							onChange={props.handleEnemyDataChange}
						/>
						<span>(Minimum = 0, Maximum = 65535)</span>
					</div>
				</div>
			</div>
			<div
				className="windowContentLine"
				style={lockAllStyle}
			>
				<button
					className="buttonSolid"
					onClick={props.onClearAllChangesClick}
				>
					Clear All Changes
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
					Apply to ROM
				</button>
			</div>
		</div>
	);
}


export default LevelEditorComponent;