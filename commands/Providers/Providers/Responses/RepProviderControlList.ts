import { JsonObject } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
import { nothing, ProviderControl } from "@trakit/objects";
/**
 * A container for the requested {@link providerControls}.
 **/
export abstract class RepProviderControlList extends ReplySyncList<ProviderControl> {
	/**
	 * The list of requested {@link ProviderControl}s.
	 **/
	providerControls: ProviderControl[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.providerControls = (json?.providerControls as JsonObject[])?.map((v: any) => new ProviderControl(v));
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

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
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

	constructor(json: JsonObject) {
		super(json);
		this.config = ContentId.fromJSON(json?.config as JsonObject);
	}
}