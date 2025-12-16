import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";

/**
 * Details for how a circular company tree would have been created.
 */
export class ErrorDetailParent extends ErrorDetail {
	override get kind() { return ErrorDetailType.parent; }
	/**
	 * The {@link Company.parent} specified in the parameters.
	 */
	parent: ulong | nothing;
	/**
	 * ID of the child {@link Company} that would cause a circular reference.
	 */
	descendant: ulong | nothing;

	constructor(json: JsonObject) {
		super();
		this.parent = json?.parent as ulong;
		this.descendant = json?.descendant as ulong;
	}

	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			"parent": this.parent ?? null,
			"descendant": this.descendant ?? null,
		};
	}
}