import { CompanyGeneral, nothing, serialization } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { ContentId } from "../../API/Responses/Content/ContentId";

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
		this.companyGenerals = json?.companyGenerals?.map((c: any) => new CompanyGeneral(c));
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
		this.company = ContentId.fromJSON(json?.company);
	}
}
/**
 * A container owner {@link Company} of the collection.
 **/
export class RepCompanyGeneralListByCompanyAndLabels extends RepCompanyGeneralListByCompany {
	/**
	 * The labels given as input.
	 * @see {@link CompanyGeneral.labels}
	 **/
	labels: string[] | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.labels = json?.labels;
	}
}
/**
 * A container owner {@link Company} of the collection.
 **/
export class RepCompanyGeneralListByCompanyAndRefPairs extends RepCompanyGeneralListByCompany {
	/**
	 * The reference string given as input.
	 * @see {@link CompanyGeneral.references}
	 **/
	references: Map<string, string> | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.references) {
			this.references = serialization.toMap(json.references);
		}
	}
}