import { CompanyGeneral, JsonObject, nothing } from "@trakit/objects";
import { ContentId } from "../../API/Responses/Content/ContentId";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the requested {@link companyGenerals}.
 **/
export abstract class RepCompanyGeneralList extends Reply {
	/**
	 * The list of requested {@link CompanyGeneral}s.
	 **/
	companyGenerals: CompanyGeneral[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.companyGenerals = (json?.companyGenerals as JsonObject[])?.map((c: any) => new CompanyGeneral(c));
	}
}

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepCompanyGeneralListByCompany extends RepCompanyGeneralList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
}