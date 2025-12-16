import { JsonObject, nothing, Provider, ProviderAdvanced, ulong } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link providerAdvanced}.
 */
export class RepProviderAdvancedGet extends ReplySyncGetPiece<ProviderAdvanced> {
	/**
	 * The requested {@link ProviderAdvanced}.
	 */
	providerAdvanced: ProviderAdvanced | nothing;

	constructor(json: JsonObject) {
		super(json, "ProviderAdvanced", 1);
		if (json?.providerAdvanced) {
			this.providerAdvanced = new ProviderAdvanced(json.providerAdvanced as JsonObject)
		}
	}
	protected override _createBlank() { return new Provider(); }
	override getObject() { return this.providerAdvanced as ProviderAdvanced; }
	override getCompanyId() { return this.providerAdvanced?.companyId as ulong; }
}