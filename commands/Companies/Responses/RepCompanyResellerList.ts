import { CompanyReseller, JsonObject, nothing } from "@trakit/objects";
import { ContentId } from "../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link companyResellers}.
 **/
export abstract class RepCompanyResellerList extends ReplySyncList<CompanyReseller> {
	/**
	 * The list of requested {@link CompanyReseller}s.
	 **/
	companyResellers: CompanyReseller[] | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.companyResellers = (json?.companyResellers as JsonObject[])?.map((item: any) => new CompanyReseller(item));
	}
}

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepCompanyResellerListByCompany extends RepCompanyResellerList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
}