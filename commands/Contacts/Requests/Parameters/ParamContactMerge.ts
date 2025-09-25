import { nothing, ulong, utility } from "@trakit/objects";
import { ParamSelfContactMerge } from "../../../Accounts/Self/Requests/Parameters/ParamSelfContactMerge";

/**
 * Parameters used to create or update an {@link Contact}.
 **/
export class ParamContactMerge extends ParamSelfContactMerge {
	/**
	 * The unique identifier of the {@link Contact} you want to update.
	 * Leave this as `null` when creating a new {@link Contact}.
	 **/
	id: ulong | nothing;
	/**
	 * The {@link Company} to which this {@link Contact} belongs.
	 * After creation, this value is read-only.
	 **/
	company: ulong | nothing;

	constructor(json: any) {
		super(json);
		this.id = json?.id;
		this.company = json?.company;
	}

	override toJSON(): any {
		const json: any = {
			...super.toJSON(),
		};
		if (utility.isntNaN(this.id)) {
			json["id"] = this.id;
			json["v"] = [...this.v];
		} else if (utility.isntNaN(this.company)) {
			json["company"] = this.company;
		}
		return json;
	}
}