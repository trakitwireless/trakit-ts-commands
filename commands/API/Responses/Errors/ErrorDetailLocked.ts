import { nothing, TimeSpan, utility } from "@trakit/objects";
import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";

/**
 * Details for how long a resource is locked, or if a command cannot be executed right away, how long until it can be executed.
 **/
export class ErrorDetailLocked extends ErrorDetail {
	override get kind() { return ErrorDetailType.locked; }
	/**
	 * The amount of time the resource is locked, or you are prevented from issuing the command.
	 **/
	timeout: TimeSpan;
	/**
	 * This timestamp represents the moment the resource becomes available again.
	 **/
	until: Date;

	constructor(json: any) {
		super();
		this.timeout = TimeSpan.fromSeconds(json.timeout);
		this.until = utility.date(json?.until);
	}
}