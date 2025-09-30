import { Company, JsonObject, nothing } from "@trakit/objects";
import { ContentId } from "../../API/Responses/Content/ContentId";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the requested {@link companies}.
 **/
export abstract class RepCompanyList extends Reply {
	/**
	 * The list of requested {@link Company}s.
	 **/
	companies: Company[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.companies = (json?.companies as JsonObject[])?.map((c: any) => new Company(c));
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepCompanyListByCompany extends RepCompanyList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
}