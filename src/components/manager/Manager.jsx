import React, {Component} from 'react';
import ManagerComponent from './ManagerComponent';

import editorService from '../../service/EditorService';
import fileService from "../../service/FileService";
import editorManagerService from '../../service/EditorManagerService';

import editorManagerData from '../../data/replace/EditorManagerData';


class Manager extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {};
		this.onWindowSelectorChanged = this.onWindowSelectorChanged.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.onLoadROMFileChange = this.onLoadROMFileChange.bind(this);
		this.onCloneROMClick = this.onCloneROMClick.bind(this);
		this.onGenerateROMClick = this.onGenerateROMClick.bind(this);
		this.downloadGeneratedROM = this.downloadGeneratedROM.bind(this);
	}

	shouldComponentUpdate(nextProps, nextState)
	{
		const extras = nextProps.actionExtras;

		if(extras && extras.actionSuccessful)
		{
			editorManagerService.convertAndSetRom(nextProps.actionData);
			editorService.forceComponentToUpdateByKey("app");
			delete nextProps.actionExtras.actionSuccessful;
		}

		return true;
	}

	handleChange(event)
	{
		const {name, value} = event.target;
		this.setState({[name]: value});
	}

	onLoadROMFileChange(event)
	{
		const extras = {};
		extras.successCallback = this.props.onActionResult;
		extras.errorCallback = this.props.onActionResult;
		extras.successMessage = "ROM loaded!";
		extras.errorMessage = "Problems loading the ROM!";
		extras.file = event.target.files[0];
		fileService.readZipFile(extras);
	}

	onCloneROMClick(event)
	{
		const extras = {};

		try
		{
			editorManagerService.cloneROM();
			extras.successMessage = "ROM cloned!";
			editorService.forceComponentToUpdateByKey("app");
		}
		catch(e)
		{
			console.log(e.message);
			console.log(e);
			extras.errorMessage = e.message;
		}

		this.props.onActionResult(extras);
	}

	onGenerateROMClick(event)
	{
		const ck = this.state.converterKey;
		const extras = {};
		extras.successCallback = this.downloadGeneratedROM;
		extras.errorCallback = this.props.onActionResult;
		extras.fileObject = editorManagerService.generateROM(ck);
		extras.errorMessage = "Problems ziping the generated ROM!";

		try
		{
			if(extras.fileObject)
			{
				this.setState({generatingROM: true});
				fileService.createZipFile(extras);
			}
			else
				this.props.onActionResult(extras);
		}
		catch(e)
		{
			console.log(e.message);
			console.log(e);
			this.props.onActionResult(extras);
		}
	}

	onWindowSelectorChanged(event)
	{
		editorService.openWindow(event.target.value);
	}

	downloadGeneratedROM(extras)
	{
		this.setState({generatingROM: false});
		let rom = extras.actionData;
		let contentType = "application/octet-stream";
		let name = "ffightae.zip";
		editorService.downloadFile(rom, name, contentType);
	}
	
	render()
	{
		return (
			<ManagerComponent
				romTypeMap={editorManagerData.romTypeMap}
				converterKey={this.state.converterKey}
				handleChange={this.handleChange}
				onWindowSelectorChanged={this.onWindowSelectorChanged}
				requestFile={editorService.requestFile}
				generatingROM={this.state.generatingROM}
				onCloneROMClick={this.onCloneROMClick}
				onLoadROMFileChange={this.onLoadROMFileChange}
				onGenerateROMClick={this.onGenerateROMClick}
			/>
		);
	}
}


export default Manager;