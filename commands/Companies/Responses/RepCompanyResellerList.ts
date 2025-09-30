import { CompanyReseller, nothing, serialization } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { ContentId } from "../../API/Responses/Content/ContentId";

/**
 * A container for the requested {@link companyResellers}.
 **/
export abstract class RepCompanyResellerList extends Reply {
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

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepCompanyResellerListByCompanyAndLabels extends RepCompanyResellerListByCompany {
	/**
	 * The labels given as input.
	 * @see {@link CompanyReseller.labels}
	 **/
	labels: codified[] | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.labels = json?.labels as codified[];
	}
}
/**
 * A container owner {@link Company} of the collection.
 **/
export class RepCompanyResellerListByCompanyAndRefPairs extends RepCompanyResellerListByCompany {
	/**
	 * The reference string given as input.
	 * @see {@link CompanyReseller.references}
	 **/
	references: Map<string, string> | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.references) {
			this.references = serialization.toMap(json?.references as object);
		}
	}
}