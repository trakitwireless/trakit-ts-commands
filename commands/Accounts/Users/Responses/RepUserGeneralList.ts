import { codified, JsonObject } from "@trakit/objects";
import { nothing, serialization, UserGeneral } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentId } from "../../../API/Responses/Content/ContentId";

/**
 * A container for the requested {@link userGenerals}.
 **/
export abstract class RepUserGeneralList extends Reply {
	/**
	 * The list of requested {@link UserGeneral}s.
	 **/
	userGenerals: UserGeneral[];

	constructor(json: JsonObject) {
		super(json);
		this.userGenerals = (json?.userGenerals as JsonObject[])?.map((u: any) => new UserGeneral(u)) ?? [];
	}
}

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepUserGeneralListByCompany extends RepUserGeneralList {
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
export class RepUserGeneralListByCompanyAndLabels extends RepUserGeneralListByCompany {
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
export class RepUserGeneralListByCompanyAndRefPairs extends RepUserGeneralListByCompany {
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