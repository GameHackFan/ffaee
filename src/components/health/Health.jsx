import React, {Component} from 'react';
import HealthComponent from './HealthComponent';

import fileService from '../../service/FileService';
import editorService from '../../service/EditorService';
import healthService from '../../service/HealthService';

import healthMap from '../../data/replace/HealthMap';


class Health extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {healthData: {}};
		this.handleChange = this.handleChange.bind(this);
		this.onDefaultValueClick = this.onDefaultValueClick.bind(this);
		this.onReloadDataClick = this.onReloadDataClick.bind(this);
		this.onLoadPresetFileChange = this.onLoadPresetFileChange.bind(this);
		this.applyPresetFile = this.applyPresetFile.bind(this);
		this.onSavePresetClick = this.onSavePresetClick.bind(this);
		this.onApplyToROMClick = this.onApplyToROMClick.bind(this);
	}

	componentDidMount()
	{
		this.setState({healthData: healthService.getHealthData()});
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
		
		if(event.target.name === "health")
		{
			let hd = this.state.healthData;
			hd[this.state.characterKey] = value;
			this.setState({healthData: hd});
		}
		else
			this.setState({[name]: value});
	}

	onReloadDataClick(event)
	{
		const extras = {};

		try
		{
			this.setState({healthData: healthService.getHealthData()});
			extras.successMessage = "Health data reloaded!";
		}
		catch(e)
		{
			console.log(e.message);
			console.log(e);
			extras.errorMessage = "Problems reloading the Health data!";
		} 
		
		this.props.onActionResult(extras);
	}

	onLoadPresetFileChange(event)
	{
		const extras = {};
		extras.successCallback = this.props.onActionResult;
		extras.errorCallback = this.props.onActionResult;
		extras.successMessage = "Health data preset loaded!";
		extras.errorMessage = "Problems loading the preset!";
		extras.file = event.target.files[0];
		fileService.readTextFile(extras);
	}

	applyPresetFile(preset)
	{
		try
		{
			healthService.applyPresetFile(preset);
			editorService.forceComponentToUpdateByKey("health");
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

	onSavePresetClick(event)
	{
		let json = JSON.stringify(
				healthService.createHealthPreset(), null, "\t");
		let contentType = "text/json;charset=utf-8";
		let filename = "ffaee_health_preset.json";
		editorService.downloadFile(json, filename, contentType);
	}

	onApplyToROMClick(event)
	{
		const extras = {};

		try
		{
			healthService.applyHealthData();
			extras.successMessage = "Health data applied!";
			console.log(extras.successMessage);
		}
		catch(e)
		{
			console.log(e.message);
			console.log(e);
			extras.errorMessage = "Problems applying the Health data!";
		} 
		
		this.props.onActionResult(extras);
	}

	onDefaultValueClick(event)
	{
		let chd = healthMap[this.state.characterKey];

		if(chd)
		{
			let dv = chd.defaultValue;
			let hd = this.state.healthData;
			hd[this.state.characterKey] = dv;
			this.setState({healthData: hd});
		}
	}

	render()
	{
		return (
			<HealthComponent
				healthMap={healthMap}
				healthData={this.state.healthData}
				characterKey={this.state.characterKey}
				handleChange={this.handleChange}
				onDefaultValueClick={this.onDefaultValueClick}
				requestFile={editorService.requestFile}
				onReloadDataClick={this.onReloadDataClick}
				onLoadPresetFileChange={this.onLoadPresetFileChange}
				onSavePresetClick={this.onSavePresetClick}
				onApplyToROMClick={this.onApplyToROMClick}
			/>
		);
	} 
}


export default Health;