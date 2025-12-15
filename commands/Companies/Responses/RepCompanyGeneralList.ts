import { codified, CompanyGeneral, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdParent } from "../../API/Responses/Content/ContentIdParent";
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
	override getList() { return this.companyGenerals as CompanyGeneral[]; }
}

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepCompanyGeneralListByCompany extends RepCompanyGeneralList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentIdParent | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentIdParent.fromJSON(json?.company as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, CompanyGeneral], index: number): boolean {
		return pair[1].parentId === (this.company as ContentIdParent).id;
	}
	override getCompanyId() { return this.company?.parent as ulong; }
}