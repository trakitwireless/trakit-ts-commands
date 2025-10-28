import { JsonObject, ulong } from "@trakit/objects";
import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";

/**
 * Details for how many and which {@link FormResult}s are still using this {@link FormTemplate}.
 **/
export class ErrorDetailFormTemplateInUse extends ErrorDetail {
	override get kind() { return ErrorDetailType.formTemplateInUse; }
	/**
	 * A list of {@link FormResult.id}s currently being referenced.
	 **/
	formResults: ulong[];

	constructor(json: JsonObject) {
		super();
		this.formResults = json?.formResults as ulong[] ?? [];
	}

	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			"formResults": [...this.formResults],
		};
	}
}