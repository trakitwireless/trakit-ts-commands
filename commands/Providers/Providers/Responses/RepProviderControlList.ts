import { ContentId } from "../../../API/Responses/Content/ContentId";
import { Reply } from "../../../API/Responses/Reply";
import { nothing, ProviderControl } from "@trakit/objects";
/**
 * A container for the requested {@link providerControls}.
 **/
export abstract class RepProviderControlList extends Reply {
	/**
	 * The list of requested {@link ProviderControl}s.
	 **/
	providerControls: ProviderControl[] | nothing;

	constructor(json: any) {
		super(json);
		this.providerControls = json?.providerControls?.map((v: any) => new ProviderControl(v));
	}
}

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepProviderControlListByCompany extends RepProviderControlList {
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
export class RepProviderControlListByConfig extends RepProviderControlList {
	/**
	 * Identifier of the {@link ProviderConfig} (or {@link ProviderConfiguration}) to which this collection belongs.
	 **/
	config: ContentId | nothing;

	constructor(json: any) {
		super(json);
		this.config = ContentId.fromJSON(json?.config);
	}
}