import { CompanyStyles, nothing, serialization } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { ContentId } from "../../API/Responses/Content/ContentId";

/**
 * A container for the requested {@link companyStyless}.
 **/
export abstract class RepCompanyStylesList extends Reply {
	/**
	 * The list of requested {@link CompanyStyles}s.
	 **/
	companyStyless: CompanyStyles[] | nothing;
	
	constructor(json: any) {
		super(json);
		this.companyStyless = json?.companyStyless?.map((item: any) => new CompanyStyles(item));
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
	
	constructor(json: any) {
		super(json);
		this.company = ContentId.fromJSON(json?.company);
	}
}
/**
 * A container owner {@link Company} of the collection.
 **/
export class RepCompanyStylesListByCompanyAndLabels extends RepCompanyStylesListByCompany {
	/**
	 * The labels given as input.
	 * @see {@link CompanyStyles.labels}
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
export class RepCompanyStylesListByCompanyAndRefPairs extends RepCompanyStylesListByCompany {
	/**
	 * The reference string given as input.
	 * @see {@link CompanyStyles.references}
	 **/
	references: Map<string, string> | nothing;
	
	constructor(json: any) {
		super(json);
		if (json?.references) {
			this.references = serialization.toMap(json.references);
		}
	}
}