import { nothing, ReportFilterMode, ReportParameter } from "@trakit/objects";
import { ParamMerge } from "../../API/Requests/Parameters/ParamMerge";
import { ParamReportScorecardRules } from "./ParamReportScorecardRules";

/**
 * Parameters used to create or update an {@link ReportResult}.
 **/
export class ParamReportOptions extends ParamMerge {
	/**
	 * Creates a new instance of ParamReportOptions from the provided JSON.
	 * @param json The JSON to parse.
	 * @returns 
	 */
	static fromJSON(json?: JsonObject): ParamReportOptions | nothing {
		return json
			? new ParamReportOptions(json)
			: null;
	}
	/// <summary>
	/// A list of parameters to better shape the <see cref="ReportResult"/>.
	/// </summary>
	parameters: ReportParameter[] | nothing;
	/// <summary>
	/// A targeting expression for including/excluding <see cref="Asset"/>s.
	/// </summary>
	targets: string | nothing;
	/// <summary>
	/// The mechanism to use for filtering based on <see cref="Place"/>s and regions.
	/// </summary>
	filtering: ReportFilterMode | nothing;
	/// <summary>
	/// A targeting expression for limiting results which only include data from <see cref="Asset"/>s interacting with the targeted <see cref="Place"/>s.
	/// </summary>
	places: string | nothing;
	/// <summary>
	/// A list of provinces and states, where only <see cref="Asset"/>s within those regions will be included in the <see cref="ReportResult"/>.
	/// </summary>
	regions: string[] | nothing;
	/// <summary>
	/// Rules used to generate <see cref="ReportDataScorecard"/> for the <see cref="ReportResult"/>.
	/// </summary>
	scorecardRules: ParamReportScorecardRules | nothing;
	
	constructor(json?: JsonObject) {
		super();
		this.parameters = json?.parameters?.map((e: any) => new ReportParameter(e));
		this.targets = json?.targets;
		this.filtering = json?.filtering;
		this.places = json?.places;
		this.regions = json?.regions;
		if (json?.scorecardRules) this.scorecardRules = new ParamReportScorecardRules(json.scorecardRules);
	}

	override toJSON(): any {
		const json: JsonObject = {};
		if (this.parameters?.length) json.parameters = this.parameters.map((e) => e.toJSON());
		if (this.targets) json.targets = this.targets;
		if (this.filtering) json.filtering = this.filtering;
		if (this.places) json.places = this.places;
		if (this.regions?.length) json.regions = [...this.regions];
		if (this.scorecardRules) json.scorecardRules = this.scorecardRules.toJSON();
		return json;
	}
}