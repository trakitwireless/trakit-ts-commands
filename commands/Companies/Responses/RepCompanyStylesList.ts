import { CompanyStyles, JsonObject, nothing } from "@trakit/objects";
import { ContentId } from "../../API/Responses/Content/ContentId";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the requested {@link companyStyless}.
 **/
export abstract class RepCompanyStylesList extends Reply {
	/**
	 * The list of requested {@link CompanyStyles}s.
	 **/
	companyStyless: CompanyStyles[] | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.companyStyless = (json?.companyStyless as JsonObject[])?.map((item: any) => new CompanyStyles(item));
	}
}

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepCompanyStylesListByCompany extends RepCompanyStylesList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
}