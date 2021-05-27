import React, {Component} from 'react';
import LevelEditorComponent from
    './LevelEditorComponent';

import editorService from '../../service/EditorService';
import fileService from "../../service/FileService";
import romService from "../../service/ROMService";
import levelEditorService from
    "../../service/LevelEditorService";

import levelEditorEnemies from
    '../../data/level/LevelEditorEnemies';


class LevelEditor extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {};
    this.getFilteredEnemySelectList =
        this.getFilteredEnemySelectList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEnemyDataChange =
        this.handleEnemyDataChange.bind(this);
    this.onAddEnemyClick = 
        this.onAddEnemyClick.bind(this);
    this.onRemoveEnemyClick = 
        this.onRemoveEnemyClick.bind(this);
    this.onRefreshImageClick = 
        this.onRefreshImageClick.bind(this);
    this.onClearAllChangesClick = 
        this.onClearAllChangesClick.bind(this);
    this.onLoadPresetFileChange = 
        this.onLoadPresetFileChange.bind(this);
    this.onSavePresetClick = 
        this.onSavePresetClick.bind(this);
    this.onApplyToROMClick = 
        this.onApplyToROMClick.bind(this);
    this.applyPresetFile = 
        this.applyPresetFile.bind(this);
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
    let a = null;

    if(name === "enemyKey")
      a = levelEditorService.setEnemyKey;
    else if(name === "triggerPosition")
      a = levelEditorService.setEnemyTriggerPosition;
    else if(name === "positionX")
      a = levelEditorService.setEnemyPositionX;
    else if(name === "positionY")
      a = levelEditorService.setEnemyPositionY;
    else if(name === "offensiveBehavior")
      a = levelEditorService.setEnemyOffensiveBehavior;
    else if(name === "defensiveBehavior")
      a = levelEditorService.setEnemyDefensiveBehavior;
    else if(name === "spawnDelayTime")
      a = levelEditorService.setEnemySpawnDelayTime;

    if(a)
    {
      a(level, enemyGroup, enemyId, value);
      editorService.forceComponentToUpdateByKey(
          "levelEditor");
    }
  }

  onAddEnemyClick(event)
  {
    const {level, enemyGroup} = this.state;
    let id =
        levelEditorService.addEnemy(level, enemyGroup);
    this.setState({enemyId: id});
    editorService.forceComponentToUpdateByKey(
        "levelEditor");
  }

  onRemoveEnemyClick(event)
  {
    const {level, enemyGroup, enemyId} = this.state;
    levelEditorService.removeEnemy(
        level, enemyGroup, enemyId);
    this.setState({enemyId: "none"});
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
    extras.successMessage =
        "Level Editor preset loaded!";
    extras.errorMessage =
        "Problems loading the preset!";
    extras.file = event.target.files[0];
    fileService.readTextFile(extras);
  }

  onSavePresetClick(event)
  {
    let preset = levelEditorService.createPresetFile();
    let json = JSON.stringify(preset, null, "\t");
    let contentType = "text/json;charset=utf-8";
    let filename = "ffaee_level_editor_preset.json";
    editorService.downloadFile(json,
        filename, contentType);
  }

  onApplyToROMClick(event)
  {
    const extras = {};

    try
    {
      levelEditorService.applyData();
      extras.successMessage =
          "Customizations applied!";
    }
    catch(e)
    {
      console.log(e.message);
      console.log(e);
      extras.errorMessage =
          "Problems applying the customizations!";
    } 
    
    this.props.onActionResult(extras);
  }

  applyPresetFile(preset)
  {
    try
    {
      levelEditorService.applyPresetFile(preset);
      editorService.forceComponentToUpdateByKey(
          "levelEditor");
    }
    catch(e)
    {
      console.log(e.message);
      console.log(e);
      const extras = {};
      extras.errorMessage =
          "Invalid JSON preset file!";
      this.props.onActionResult(extras);
    }
  }

  getFilteredEnemySelectList()
  {
    const filterString = this.state.filterEnemyString;
    let enemieKeys = Object.keys(levelEditorEnemies);

    // Removes the elevator, cameraFOV, groupLimit.
    for(let i = 0; i < 3; i++)
      enemieKeys.pop();
    
    if(filterString)
    {
      let {level, enemyGroup, enemyId} = this.state;
      let selected = levelEditorService.getEnemy(
          level, enemyGroup, enemyId);

      let filtered = enemieKeys.filter((ek) =>
      {
        return levelEditorEnemies[ek].label.
            toLowerCase().includes(filterString) ||
            ek === selected.enemyKey;
      });

      return filtered;
    }

    return enemieKeys;
  }

  render()
  {
    const {level, enemyGroup, enemyId} = this.state;

    return (
      <LevelEditorComponent
        romReady={romService.isROMReady()}
        filterEnemyString=
          {this.state.filterEnemyString}
        level={this.state.level}
        enemyGroup={this.state.enemyGroup}
        enemyId={enemyId}
        enemy={levelEditorService.
          getEnemy(level, enemyGroup, enemyId)}
        enemies={levelEditorService.
          getEnemies(level, enemyGroup)}
        enemySelectList=
          {this.getFilteredEnemySelectList()}
        levelImage={this.state.levelImage}
        requestFile={editorService.requestFile}
        handleChange={this.handleChange}
        handleEnemyDataChange=
            {this.handleEnemyDataChange}
        onAddEnemyClick={this.onAddEnemyClick}
        onRemoveEnemyClick={this.onRemoveEnemyClick}
        onRefreshImageClick={this.onRefreshImageClick}
        onClearAllChangesClick=
          {this.onClearAllChangesClick}
        onLoadPresetFileChange=
          {this.onLoadPresetFileChange}
        onSavePresetClick={this.onSavePresetClick}
        onApplyToROMClick={this.onApplyToROMClick}
      />
    );
  } 
}


export default LevelEditor;