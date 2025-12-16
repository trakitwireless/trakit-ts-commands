import { email, expression, JsonObject, nothing, utility } from "@trakit/objects";
import { ParamMerge } from "../../../../API/Requests/Parameters/ParamMerge";

/**
 * Parameters used to create or update an {@link ReportSchedule}.
 */
export class ParamReportNotify extends ParamMerge {
	/**
	 * Creates a new instance of ParamReportNotify from JSON.
	 * @param json The JSON to parse.
	 * @returns A new instance of ParamReportNotify or null.
	 */
	static fromJSON(json?: JsonObject): ParamReportNotify | nothing {
		return json
			? new ParamReportNotify(json)
			: null;
	}

	/// <summary>
	/// List of <see cref="User"/>s to send emailed report.
	/// Each email will only contain the <see cref="ReportResult"/> for the <see cref="Asset"/>s each <see cref="User"/> is allowed to view.
	/// </summary>
	users: string[] | nothing;
	/// <summary>
	/// A targeting expression to identify which <see cref="Asset"/>s receive the <see cref="ReportResult"/>.
	/// </summary>
	assets: string | nothing;
	
	constructor(json?: JsonObject) {
		super();
		this.users = json?.users ? [...json.users as email[]] : null;
		this.assets = json?.assets as expression
	}

	override toJSON(): any {
		const json: any = {};
		if (this.users?.length) json.users = [...this.users];
		if (!utility.isNothing(this.assets)) json.assets = this.assets;
		return json;
	}
}