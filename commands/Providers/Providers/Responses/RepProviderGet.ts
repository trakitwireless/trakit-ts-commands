import { JsonObject, nothing, Provider, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link provider}.
 **/
export class RepProviderGet extends ReplySyncGet<Provider> {
	/**
	 * The requested {@link Provider}.
	 **/
	provider: Provider | nothing;

	constructor(json: JsonObject) {
		super(json, "Provider");
		if (json?.provider) {
			this.provider = new Provider(json.provider as JsonObject);
		}
	}
	override getObject() { return this.provider as Provider; }
	override getCompanyId() { return this.provider?.companyId as ulong; }
}