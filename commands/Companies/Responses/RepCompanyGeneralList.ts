import { CompanyGeneral, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentId } from "../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link companyGenerals}.
 **/
export abstract class RepCompanyGeneralList extends ReplySyncList<CompanyGeneral> {
	/**
	 * The list of requested {@link CompanyGeneral}s.
	 **/
	companyGenerals: CompanyGeneral[] | nothing;

	constructor(json: JsonObject) {
		super(json, "CompanyGeneral");
		this.companyGenerals = (json?.companyGenerals as JsonObject[])?.map((c: any) => new CompanyGeneral(c));
	}
	override getCollection() { return this.companyGenerals as CompanyGeneral[]; }
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
	override _filterCollection(pair: [string | guid | email | ulong, CompanyGeneral], index: number): boolean {
		return pair[1].parentId === (this.company as ContentId).id;
	}
}