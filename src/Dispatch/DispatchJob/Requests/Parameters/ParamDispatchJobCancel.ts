import { codified, JsonObject, nothing, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";

/**
 * Parameters used to cancel a {@link DispatchJob}, removing it from the dispatcher's and driver's views.
 */
export class ParamDispatchJobCancel extends ParamMergeSubscribable {
	/**
	 * The unique identifier of the {@link DispatchJob} you want to update.
	 */
	id: ulong;
	/**
	 * The reason the {@link DispatchJob} was cancelled.
	 * The given value is added as a {@link DispatchJob.references} with the key `cancelled`.
	 */
	reason: string | nothing;
	/**
	 * The codified status tag names reflecting the conditions of the {@link DispatchJob}.
	 * A new tag `cancelled` is always added.
	 */
	tags: codified[] | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.id = json?.id as ulong;
		this.reason = json?.reason as string;
		this.tags = json?.tags as codified[];
	}

	override toJSON(): JsonObject {
		const json: JsonObject = {
			id: this.id,
		};
		if (this.reason) json.reason = this.reason;
		if (this.tags?.length) json.tags = [...this.tags];
		return json;
	}
}