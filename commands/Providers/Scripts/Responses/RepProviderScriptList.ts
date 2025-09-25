import { ContentId } from "../../../API/Responses/Content/ContentId";
import { Reply } from "../../../API/Responses/Reply";
import { nothing, ProviderScript } from "@trakit/objects";

/**
 * A container for the requested {@link providerScripts}.
 **/
export abstract class RepProviderScriptList extends Reply {
	/**
	 * The list of requested {@link ProviderScript}s.
	 **/
	providerScripts: ProviderScript[] | nothing;

	constructor(json: any) {
		super(json);
		this.providerScripts = json?.providerScripts?.map((v: any) => new ProviderScript(v));
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepProviderScriptListByCompany extends RepProviderScriptList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;
	
	constructor(json: any) {
		super(json);
		this.company = ContentId.fromJSON(json?.company);
	}
}