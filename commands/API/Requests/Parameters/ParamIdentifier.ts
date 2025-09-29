
/**
 * A container class used to house the string identifying a {@link Provider}.
 **/
export class ParamIdentifier {
	/**
	 * The {@link Provider}'s identifier.
	 **/
	id: string;

	constructor(json?: JsonObject) {
		this.id = json?.id ?? "";
	}
}