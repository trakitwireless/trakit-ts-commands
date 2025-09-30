import { codified, JsonObject, nothing, serialization, UserAdvanced } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the requested {@link userAdvanceds}.
 **/
export abstract class RepUserAdvancedList extends Reply {
	/**
	 * The list of requested {@link UserAdvanced}s.
	 **/
	userAdvanceds: UserAdvanced[];

	constructor(json: JsonObject) {
		super(json);
		this.userAdvanceds = (json?.userAdvanceds as JsonObject[])?.map((u: any) => new UserAdvanced(u)) ?? [];
	}
}

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepUserAdvancedListByCompany extends RepUserAdvancedList {
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
export class RepUserAdvancedListByCompanyAndLabels extends RepUserAdvancedListByCompany {
	/**
	 * The labels given as input.
	 * @see {@link UserGeneral.labels}
	 **/
	labels: string[];

	constructor(json: JsonObject) {
		super(json);
		this.labels = json?.labels as codified[] ?? [];
	}
}
/**
 * A container owner {@link Company} of the collection.
 **/
export class RepUserAdvancedListByCompanyAndRefPairs extends RepUserAdvancedListByCompany {
	/**
	 * The reference string given as input.
	 * @see {@link UserGeneral.references}
	 **/
	references: Map<string, string>;

	constructor(json: JsonObject) {
		super(json);
		this.references = serialization.toMap(json?.references as object ?? {});
	}
}