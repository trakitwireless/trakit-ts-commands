import { double, nothing, utility } from "@trakit/objects";
import { ErrorDetailType } from "./ErrorDetailType";
import { ErrorDetail } from "./ErrorDetail";

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
			: !isNaN((date = utility.date(json?.min)).valueOf())
				? date
				: null;
		this.max = utility.isntNaN(json?.max)
			? json.max
			: !isNaN((date = utility.date(json?.max)).valueOf())
				? date
				: null;
	}
}