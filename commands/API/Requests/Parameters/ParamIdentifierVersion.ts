import { int, JsonObject } from "@trakit/objects";
import { ParamIdentifier } from "./ParamIdentifier";

/**
 * A container class used to house the string identifying a {@link Provider}.
 */
export class ParamIdentifierVersion extends ParamIdentifier {
	/**
	 * Requested version key(s).
	 */
	v: int[];

	constructor(json?: JsonObject) {
		super(json);
		this.v = json?.v as int[] ?? [];
	}
}