import { Reply } from "../../../API/Responses/Reply";
import { nothing, ProviderGeneral } from "@trakit/objects";
import { ContentId } from "commands/API/Responses/Content/ContentId";
/**
 * A container for the requested {@link providerGenerals}.
 **/
export abstract class RepProviderGeneralList extends Reply {
	/**
	 * The list of requested {@link ProviderGeneral}s.
	 **/
	providerGenerals: ProviderGeneral[] | nothing;

	constructor(json: any) {
		super(json);
		this.providerGenerals = json?.providerGenerals?.map((v: any) => new ProviderGeneral(v));
	}
}

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepProviderGeneralListByCompany extends RepProviderGeneralList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: any) {
		super(json);
		this.company = ContentId.fromJSON(json?.company);
	}
}
/**
 * A container owner {@link Company} of the collection.
 **/
export class RepProviderGeneralListByConfig extends RepProviderGeneralList {
	/**
	 * Identifier of the {@link ProviderConfig} (or {@link ProviderConfiguration}) to which this collection belongs.
	 **/
	config: ContentId | nothing;

	constructor(json: any) {
		super(json);
		this.config = ContentId.fromJSON(json?.config);
	}
}