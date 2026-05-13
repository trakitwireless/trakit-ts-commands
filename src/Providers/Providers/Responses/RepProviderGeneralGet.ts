import { JsonObject, nothing, Provider, ProviderGeneral, ulong } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link providerGeneral}.
 */
export class RepProviderGeneralGet extends ReplySyncGetPiece<ProviderGeneral> {
	/**
	 * The requested {@link Provider}.
	 */
	providerGeneral: ProviderGeneral | nothing;

	constructor(json: JsonObject) {
		super(json, "ProviderGeneral", 0);
		if (json?.providerGeneral) {
			this.providerGeneral = new ProviderGeneral(json.providerGeneral as JsonObject);
		}
	}
	protected override _createBlank() { return new Provider(); }
	override getObject() { return this.providerGeneral as ProviderGeneral; }
	override getCompanyId() { return this.providerGeneral?.companyId as ulong; }
}