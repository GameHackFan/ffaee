import romService from "./ROMService";

import healthMap from "../data/replace/HealthMap";


class HealthService
{
	constructor()
	{
		this.healthData = {};
	}

	createHealthPreset = (playerHealth) =>
	{
		let p = {};
		p.type = "health";
		p.data = {};
		Object.keys(this.healthData).forEach((ck) =>
		{
			p.data[ck] = this.healthData[ck];
		});

		return p;
	}

	applyPresetFile = (presetFile) =>
	{
		let json = JSON.parse(presetFile);

		if(json && json.data && json.type === "health")
		{
			Object.keys(json.data).forEach((ck) => 
			{
				this.healthData[ck] = json.data[ck];
			});
		}
	}

	getHealthData = () =>
	{
		this.healthData = {};
		Object.keys(healthMap).forEach((ck) =>
		{
			let {filename, byteIndexes} = healthMap[ck];
			this.healthData[ck] = romService.getDecimal(filename, byteIndexes[0], 2);
		});

		return this.healthData;
	}

	applyHealthData = () =>
	{
		Object.keys(this.healthData).forEach((ck) =>
		{
			let h = parseInt(this.healthData[ck]);			
			let hd = healthMap[ck];

			if(hd && !isNaN(h) && h > -1 && h < 65536)
			{
				let bytes = romService.convertNumberToROMBytes(h, 2);

				hd.byteIndexes.forEach((byteIndex) =>
				{
					romService.setBytes(hd.filename, byteIndex, bytes, "hex");
				});
			}		
		});
	}
}


let healthService = new HealthService();
export default healthService;