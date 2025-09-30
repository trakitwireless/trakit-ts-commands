import { JsonObject } from "@trakit/objects";
import { nothing, ProviderAdvanced } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the requested {@link providerAdvanceds}.
 **/
export abstract class RepProviderAdvancedList extends Reply {
	/**
	 * The list of requested {@link ProviderAdvanced}s.
	 **/
	providerAdvanceds: ProviderAdvanced[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.providerAdvanceds = (json?.providerAdvanceds as JsonObject[])?.map((v: any) => new ProviderAdvanced(v));
	}
}

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepProviderAdvancedListByCompany extends RepProviderAdvancedList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId| nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
}
/**
 * A container owner {@link Company} of the collection.
 **/
export class RepProviderAdvancedListByConfig extends RepProviderAdvancedList {
	/**
	 * Identifier of the {@link ProviderConfig} (or {@link ProviderConfiguration}) to which this collection belongs.
	 **/
	config: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.config = ContentId.fromJSON(json?.config as JsonObject);
	}
}