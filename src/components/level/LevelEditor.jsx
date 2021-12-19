import React, {Component} from 'react';
import LevelEditorComponent from './LevelEditorComponent';

import editorService from '../../service/EditorService';
import fileService from "../../service/FileService";
import romService from "../../service/ROMService";
import levelEditorService from "../../service/LevelEditorService";
// import levelEditorEnemies from '../../data/level/LevelEditorEnemies';


class LevelEditor extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {};
		this.getEnemySelectList = this.getEnemySelectList.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleEnemyDataChange = this.handleEnemyDataChange.bind(this);
		this.onAddEnemyClick = this.onAddEnemyClick.bind(this);
		this.onRemoveEnemyClick = this.onRemoveEnemyClick.bind(this);
		this.onRefreshImageClick = this.onRefreshImageClick.bind(this);
		this.onClearAllChangesClick = this.onClearAllChangesClick.bind(this);
		this.onLoadPresetFileChange = this.onLoadPresetFileChange.bind(this);
		this.onSavePresetClick = this.onSavePresetClick.bind(this);
		this.onApplyToROMClick = this.onApplyToROMClick.bind(this);
		this.applyPresetFile = this.applyPresetFile.bind(this);
	}

	shouldComponentUpdate(nextProps, nextState)
	{
		const extras = nextProps.actionExtras;

		if(extras && extras.actionSuccessful)
		{
			this.applyPresetFile(nextProps.actionData);
			delete nextProps.actionExtras.actionSuccessful;
		}

		return true;
	}

	handleChange(event)
	{
		const {name, value} = event.target;
		this.setState({[name]: value}, () =>
		{
			const {level, enemyGroup, enemyId} = this.state;
			levelEditorService.createLevelImage(
					level, enemyGroup, enemyId, (image) =>
					{
						this.setState({levelImage: image});
					});
		});
	}

	handleEnemyDataChange(event)
	{
		const {name, value} = event.target;
		const {level, enemyGroup, enemyId} = this.state;
		let func = null;

		if(name === "enemyKey")
			func = levelEditorService.setEnemyKey;
		else if(name === "triggerPosition")
			func = levelEditorService.setEnemyTriggerPosition;
		else if(name === "positionX")
			func = levelEditorService.setEnemyPositionX;
		else if(name === "positionY")
			func = levelEditorService.setEnemyPositionY;
		else if(name === "offensiveBehavior")
			func = levelEditorService.setEnemyOffensiveBehavior;
		else if(name === "defensiveBehavior")
			func = levelEditorService.setEnemyDefensiveBehavior;
		else if(name === "spawnDelayTime")
			func = levelEditorService.setEnemySpawnDelayTime;

		if(func)
		{
			func(level, enemyGroup, enemyId, value);
			editorService.forceComponentToUpdateByKey("levelEditor");
		}
	}

	onAddEnemyClick(event)
	{
		const {level, enemyGroup} = this.state;
		let id = levelEditorService.addEnemy(level, enemyGroup);
		this.setState({enemyId: id});
		editorService.forceComponentToUpdateByKey("levelEditor");
	}

	onRemoveEnemyClick(event)
	{
		const {level, enemyGroup, enemyId} = this.state;
		levelEditorService.removeEnemy(level, enemyGroup, enemyId);
		let newId = Math.max(0, enemyId - 1);
		this.setState({enemyId: newId});
	}

	onRefreshImageClick(event)
	{
		const {level, enemyGroup, enemyId} = this.state;
		levelEditorService.createLevelImage(
				level, enemyGroup, enemyId, (image) =>
				{
					this.setState({levelImage: image});
				});
	}

	onClearAllChangesClick(event)
	{
		levelEditorService.setMainDataToDefault();
		let extras = {successMessage: "Data cleared!"};
		this.props.onActionResult(extras);
	}

	onLoadPresetFileChange(event)
	{
		const extras = {};
		extras.successCallback = this.props.onActionResult;
		extras.errorCallback = this.props.onActionResult;
		extras.successMessage = "Level Editor preset loaded!";
		extras.errorMessage = "Problems loading the preset!";
		extras.file = event.target.files[0];
		fileService.readTextFile(extras);
	}

	onSavePresetClick(event)
	{
		let preset = levelEditorService.createPresetFile();
		let json = JSON.stringify(preset, null, "\t");
		let contentType = "text/json;charset=utf-8";
		let filename = "ffaee_level_editor_preset.json";
		editorService.downloadFile(json, filename, contentType);
	}

	onApplyToROMClick(event)
	{
		const extras = {};

		try
		{
			levelEditorService.applyData();
			extras.successMessage = "Customizations applied!";
			console.log("Customizations applied!");
		}
		catch(e)
		{
			console.log(e.message);
			console.log(e);
			extras.errorMessage = "Problems applying the customizations!";
		} 
		
		this.props.onActionResult(extras);
	}

	applyPresetFile(preset)
	{
		try
		{
			levelEditorService.applyPresetFile(preset);
			editorService.forceComponentToUpdateByKey("levelEditor");
		}
		catch(e)
		{
			console.log(e.message);
			console.log(e);
			const extras = {};
			extras.errorMessage = "Invalid JSON preset file!";
			this.props.onActionResult(extras);
		}
	}

	getEnemySelectList()
	{
		const {level, enemyGroup, enemyId, filterEnemyString} = this.state;
		return levelEditorService.getEnemySelectList(
				filterEnemyString, level, enemyGroup, enemyId);
	}

	render()
	{
		const {level, enemyGroup, enemyId} = this.state;
		let e = levelEditorService.getEnemy(level, enemyGroup, enemyId);
		let es = levelEditorService.getEnemies(level, enemyGroup);

		return (
			<LevelEditorComponent
				romReady={romService.isROMReady()}
				filterEnemyString={this.state.filterEnemyString}
				level={level}
				enemyGroup={enemyGroup}
				enemyId={enemyId}
				enemy={e}
				enemies={es}
				enemySelectList={this.getEnemySelectList()}
				levelImage={this.state.levelImage}
				requestFile={editorService.requestFile}
				handleChange={this.handleChange}
				handleEnemyDataChange={this.handleEnemyDataChange}
				onAddEnemyClick={this.onAddEnemyClick}
				onRemoveEnemyClick={this.onRemoveEnemyClick}
				onRefreshImageClick={this.onRefreshImageClick}
				onClearAllChangesClick={this.onClearAllChangesClick}
				onLoadPresetFileChange={this.onLoadPresetFileChange}
				onSavePresetClick={this.onSavePresetClick}
				onApplyToROMClick={this.onApplyToROMClick}
			/>
		);
	} 
}


export default LevelEditor;