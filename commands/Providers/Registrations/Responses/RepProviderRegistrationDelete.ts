import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentCodeDeleted } from "../../../API/Responses/Content/ContentCodeDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";

/**
 * A container for the {@link providerRegistration}.
 **/
export class RepProviderRegistrationDelete extends ReplySyncDelete {
	/**
	 * Details about deleting/restoring the requested {@link ProviderRegistration}.
	 **/
	providerRegistration: ContentCodeDeleted | nothing;

	constructor(json: JsonObject) {
		super(json, "ProviderRegistration");
		this.providerRegistration = ContentCodeDeleted.fromJSON(json?.providerRegistration as JsonObject);
	}
	override getKey() { return this.providerRegistration?.code as string; }
	override getCompanyId() { return this.providerRegistration?.company as ulong; }
}