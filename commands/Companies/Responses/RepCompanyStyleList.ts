import { codified, CompanyStyle, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdParent } from "../../API/Responses/Content/ContentIdParent";
import { ReplySyncList } from "../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link companyStyles}.
 **/
export abstract class RepCompanyStyleList extends ReplySyncList<CompanyStyle> {
	/**
	 * The list of requested {@link CompanyStyles}s.
	 **/
	companyStyles: CompanyStyle[] | nothing;
	
	constructor(json: JsonObject) {
		super(json, "CompanyStyle");
		this.companyStyles = ((json?.companyStyles ?? json?.companyLabels) as JsonObject[])?.map((item: any) => new CompanyStyle(item));
	}
	override getList() { return this.companyStyles as CompanyStyle[]; }
}

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepCompanyStyleListByCompany extends RepCompanyStyleList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentIdParent | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.company = ContentIdParent.fromJSON(json?.company as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, CompanyStyle], index: number): boolean {
		return pair[1].parentId === (this.company as ContentIdParent).id;
	}
	override getCompanyId() { return this.company?.parent as ulong; }
}