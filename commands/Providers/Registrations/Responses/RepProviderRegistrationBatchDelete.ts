import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentCodeDeleted } from "../../../API/Responses/Content/ContentCodeDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link providerRegistration}.
 **/
export class RepProviderRegistrationBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link ProviderRegistration}.
	 **/
	providerRegistrations: ContentCodeDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json, "ProviderRegistration");
		this.providerRegistrations = (json?.providerRegistrations as JsonObject[])?.map((v: any) => new ContentCodeDeleted(v));
	}
	protected override _getKeys() { return this.providerRegistrations?.map(p => p.code) as string[]; }
	override getCompanyId() { return this.providerRegistrations?.[0]?.company as ulong; }
	override getResults() { return this.providerRegistrations as ContentCodeDeleted[]; }
}