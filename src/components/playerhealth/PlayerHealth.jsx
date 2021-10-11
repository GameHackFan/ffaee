import React, {Component} from 'react';
import PlayerHealthComponent from './PlayerHealthComponent';

import editorService from '../../service/EditorService';
import playerHealthService from '../../service/PlayerHealthService';
import romService from '../../service/ROMService';

import playerHealthMap from '../../data/replace/PlayerHealthMap';


class PlayerHealth extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {};
		this.handleChange = this.handleChange.bind(this);
		this.onApplyHealthClick = this.onApplyHealthClick.bind(this);
		this.onDefaultValueClick = this.onDefaultValueClick.bind(this);
	}

	handleChange(event)
	{
		const {name, value} = event.target;
		
		if(event.target.name === "health")
		{
			playerHealthService.setPlayerHealth(value);
			editorService.forceComponentToUpdateByKey("playerHealth");
		}
		else
			this.setState({[name]: value});
	}

	onDefaultValueClick(event)
	{
		let ph = playerHealthMap[this.state.playerKey];

		if(ph)
		{
			let v = ph.defaultValue;
			playerHealthService.setPlayerHealth(v);
			editorService.forceComponentToUpdateByKey("playerHealth");
		}
	}

	onApplyHealthClick(event)
	{
		const extras = {};

		try
		{
			playerHealthService.applyPlayerHealth();
			extras.successMessage = "Player Health applied!";
		}
		catch(e)
		{
			console.log(e.message);
			console.log(e);
			extras.errorMessage = "Problems applying the Player Health!";
		} 
		
		this.props.onActionResult(extras);
	}

	render()
	{
		return (
			<PlayerHealthComponent
				playerHealthMap={playerHealthMap}
				romReady={romService.isROMReady()}
				playerKey={this.state.playerKey}
				health={playerHealthService.getPlayerHealth()}
				handleChange={this.handleChange}
				onApplyHealthClick={this.onApplyHealthClick}
				onDefaultValueClick={this.onDefaultValueClick}
			/>
		);
	} 
}


export default PlayerHealth;