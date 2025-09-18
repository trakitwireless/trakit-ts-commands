import { double, nothing, ReportScorecardParameter } from "@trakit/objects";
import { ParamMerge } from "commands/API/Requests/Parameters/ParamMerge";

/**
 * Parameters used to create or update an {@link ReportResult}.
 **/
export class ParamReportScorecardRules extends ParamMerge {
	/// <summary>
	/// Base score for the <see cref="ReportDataScorecard"/>.
	/// </summary>
	baseScore: double | nothing;
	/// <summary>
	/// Infraction parameters used to generate the final <see cref="ReportDataScorecard.score"/>.
	/// </summary>
	parameters: ReportScorecardParameter[] | nothing;
	
	constructor(json: any) {
		super();
		this.baseScore = json?.baseScore;
		this.parameters = json?.parameters?.map((e: any) => new ReportScorecardParameter(e));
	}

	override toJSON(): any {
		const json: any = {};
		if (this.baseScore) json.baseScore = this.baseScore;
		if (this.parameters?.length) json.parameters = this.parameters?.map((e) => e.toJSON());
		return json;
	}
}