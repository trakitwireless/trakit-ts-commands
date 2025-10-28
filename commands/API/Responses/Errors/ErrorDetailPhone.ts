import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ErrorDetailInput } from "./ErrorDetailInput";
import { ErrorDetailType } from "./ErrorDetailType";

/**
 * These are the details of a phone number input that failed to parse.
 **/
export class ErrorDetailPhone extends ErrorDetailInput {
	override get kind() { return ErrorDetailType.phone; }
	/**
	 * The number that was parsed from the input.
	 **/
	number: ulong | nothing;
	/**
	 * The digital characters used to try to parse the number.
	 **/
	usable: string | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.number = json?.number as ulong;
		this.usable = json?.usable as string;
	}

	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			"number": this.number ?? null,
			"usable": this.usable ?? null,
		};
	}
}