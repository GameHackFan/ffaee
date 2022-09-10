import { componentService } from "./ComponentService";
import { patchMap } from "../data/patch/PatchMap";


class ModificationService
{
  apply = () =>
  {
    this.getKeys().forEach((key) =>
    {
      let d = dataMap[key];

      if(d && d.applyCallback)
        d.applyCallback(d.complement);
    });
  }

  add = (priority, componentKey, applyCallback, complement) =>
  {
    let key = parseInt(priority);

    if(!isNaN(key))
    {
      let pd = patchMap[complement];
      let cd = componentService.getComponentData(componentKey);
      let d = {};
      d.priority = key;
      d.componentKey = componentKey;
      d.complement = complement;
      d.componentLabel = cd ? cd.title : "Unknown";
      d.complementLabel = pd ? pd.label : "Custom";
      d.applyCallback = applyCallback;
      dataMap[key] = d;
    }
  }

  remove = (priority) =>
  {
    let key = parseInt(priority);
    delete dataMap[key];
  }

  clearAll = () =>
  {
    dataMap = {};
  }

  contains = (priority) =>
  {
    let key = parseInt(priority);
    return dataMap[key] ? true : false;
  }

  getKeys = () =>
  {
    var sortAsc = (a, b) => {return a-b;};
    return Object.keys(dataMap).sort(sortAsc);
  }

  get = (key) =>
  {
    return dataMap[key];
  }

  getModificationList = () =>
  {
    return this.getKeys().map((key) => {return dataMap[key];});
  }

  constructor()
  {
    dataMap = {};
  }
}


let dataMap;

export const modificationService = new ModificationService();