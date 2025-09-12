import { CompanyReseller, nothing, serialization } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { ContentId } from "commands/API/Responses/Content/ContentId";

/**
 * A container for the requested {@link companyResellers}.
 **/
export abstract class RepCompanyResellerList extends Reply {
	/**
	 * The list of requested {@link CompanyReseller}s.
	 **/
	companyResellers: CompanyReseller[] | nothing;
	
	constructor(json: any) {
		super(json);
		this.companyResellers = json?.companyResellers?.map((item: any) => new CompanyReseller(item));
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

	constructor(json: any) {
		super(json);
		this.company = ContentId.fromJSON(json?.company);
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
	labels: string[] | nothing;
	
	constructor(json: any) {
		super(json);
		this.labels = json?.labels;
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

	constructor(json: any) {
		super(json);
		if (json?.references) {
			this.references = serialization.toMap(json?.references);
		}
	}
}