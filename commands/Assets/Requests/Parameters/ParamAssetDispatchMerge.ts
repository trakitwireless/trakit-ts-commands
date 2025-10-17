import { DispatchDirection, JsonObject, nothing, ulong, utility } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../API/Requests/Parameters/ParamMergeSubscribable";

/**
 * Parameters used to create or update an {@link Asset}.
 **/
export class ParamAssetDispatchMerge extends ParamMergeSubscribable {
	/**
	 * The unique identifier of the {@link Asset} you want to update.
	 * <override required="update" />
	 **/
	id: ulong;
	/**
	 * The list of {@link DispatchJob}s to be assigned to this asset.
	 */
	jobs: ulong[] | nothing;
	/**
	 * Driving directions and route path details.
	 */
	directions: DispatchDirection[] | nothing;
	/**
	 * Indicates whether the jobs should be optimized based on distance and priority.
	 */
	optimize: boolean | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.id = json?.id as ulong;
		this.jobs = (json?.jobs as ulong[])?.map(utility.id) as ulong[];
		this.directions = (json?.directions as any[])?.map((j: any) => DispatchDirection.fromJSON(j)) as DispatchDirection[];
		this.optimize = json?.optimize as boolean;
	}

	override toJSON(): any {
		const json: any = {
			id: this.id,
			v: [...this.v],
			optimize: !!this.optimize,
		};
		if (this.jobs) json.jobs = [...this.jobs];
		if (this.directions) json.directions = this.directions.map(d => d.toJSON());
		return json;
	}
}