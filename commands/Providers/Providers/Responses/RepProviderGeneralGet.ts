import { JsonObject, nothing, Provider, ProviderGeneral } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link providerGeneral}.
 **/
export class RepProviderGeneralGet extends ReplySyncGetPiece<ProviderGeneral> {
	/**
	 * The requested {@link Provider}.
	 **/
	providerGeneral: ProviderGeneral | nothing;

	constructor(json: JsonObject) {
		super(json, "ProviderGeneral", 0);
		if (json?.providerGeneral) {
			this.providerGeneral = new ProviderGeneral(json.providerGeneral as JsonObject);
		}
	}
	override getObject() { return this.providerGeneral as ProviderGeneral; }
	protected override _createBlank() { return new Provider(); }
}