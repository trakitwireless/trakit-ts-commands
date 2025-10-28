import { datetime, double, JsonObject, nothing, utility } from "@trakit/objects";
import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";

/**
 * These are the details of when a value needed to be within a certain range, and was not.
 **/
export class ErrorDetailMinMax extends ErrorDetail {
	override get kind() { return ErrorDetailType.minMax; }
	/**
	 * Minimum possible value.
	 **/
	min: Date | double | nothing;
	/**
	 * Maximum possible value.
	 **/
	max: Date | double | nothing;

	constructor(json: JsonObject) {
		super();
		let date: Date;
		this.min = utility.isntNaN(json?.min)
			? json.min
			: !isNaN((date = utility.date(json?.min as datetime)).valueOf())
				? date
				: null;
		this.max = utility.isntNaN(json?.max)
			? json.max
			: !isNaN((date = utility.date(json?.max as datetime)).valueOf())
				? date
				: null;
	}

	override toJSON(): JsonObject {
		const json: JsonObject = super.toJSON();
		if (this.min instanceof Date) {
			json["min"] = this.min.toISOString();
		} else if (!isNaN(this.min as double)) {
			json["min"] = this.min as double;
		}
		if (this.max instanceof Date) {
			json["max"] = this.max.toISOString();
		} else if (!isNaN(this.max as double)) {
			json["max"] = this.max as double;
		}
		return json;
	}
}