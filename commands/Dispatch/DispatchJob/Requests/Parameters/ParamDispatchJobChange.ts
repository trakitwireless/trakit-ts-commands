import { ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
import { ParamDispatchStepChange } from "./ParamDispatchStepChange";

/**
 * Parameters used to complete, or change the {@link DispatchStep}s of an existing {@link DispatchJob}.
 **/
export class ParamDispatchJobChange extends ParamMergeSubscribable {
	/**
	 * The unique identifier of the {@link DispatchJob} you want to update.
	 **/
	id: ulong;
	/**
	 * Name of the driver who completed the {@link DispatchJob}.
	 **/
	driver: string;
	/**
	 * The codified status tag names reflecting the conditions of the {@link DispatchJob}.
	 **/
	tags: string[];
	/**
	 * A list of notes and signatories from the completion of the {@link DispatchJob}.
	 **/
	steps: ParamDispatchStepChange[];

	constructor(json: any) {
		super(json);
		this.id = json?.id;
		this.driver = json?.driver ?? "";
		this.tags = json?.tags ?? [];
		this.steps = (json?.steps ?? []).map((s: any) => new ParamDispatchStepChange(s));
	}

	override toJSON(): any {
		const json: any = {
			id: this.id,
		};
		if (this.driver) json.driver = this.driver;
		if (this.tags?.length) json.tags = [...this.tags];
		if (this.steps?.length) json.steps = this.steps.map((s) => s.toJSON());
		return json;
	}
}