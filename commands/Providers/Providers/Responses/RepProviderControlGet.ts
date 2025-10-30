import { JsonObject, nothing, Provider, ProviderControl } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link providerControl}.
 **/
export class RepProviderControlGet extends ReplySyncGetPiece<ProviderControl> {
	/**
	 * The requested {@link ProviderControl}.
	 **/
	providerControl: ProviderControl | nothing;

	constructor(json: JsonObject) {
		super(json, "ProviderControl", 2);
		if (json?.providerControl) {
			this.providerControl = new ProviderControl(json.providerControl as JsonObject);
		}
	}
	override getObject() { return this.providerControl as ProviderControl; }
	protected override _createBlank() { return new Provider(); }
}