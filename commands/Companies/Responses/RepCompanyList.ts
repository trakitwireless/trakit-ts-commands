import { Company, nothing, serialization } from "@trakit/objects";
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
		this.companies = json?.companies?.map((c: any) => new Company(c));
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
		this.company = ContentId.fromJSON(json?.company);
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepCompanyListByCompanyAndLabels extends RepCompanyListByCompany {
	/**
	 * The labels given as input.
	 * @see {@link CompanyStyles.labels}
	 **/
	labels: string[] | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.labels = json?.labels;
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepCompanyListByCompanyAndRefPairs extends RepCompanyListByCompany {
	/**
	 * The parsed references given as input.
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