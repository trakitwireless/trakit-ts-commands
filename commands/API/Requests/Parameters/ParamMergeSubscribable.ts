import { int } from "@trakit/objects";
import { ParamMerge } from "./ParamMerge";

/**
 * An abstract meant to help with validating "merge" operations.
 **/
export abstract class ParamMergeSubscribable extends ParamMerge {
	/**
	 * The version keys used to validate synchronization.
	 **/
	v: int[];

	constructor(json?: JsonObject) {
		super();
		this.v = json?.v || [];
	}
}