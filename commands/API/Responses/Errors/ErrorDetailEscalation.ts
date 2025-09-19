import { PermissionEscalation } from "@trakit/objects";
import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";

/**
 * Details of a permission escallation error thrown when modifying a resource or user that would grant the following extra permissions.
 **/
export class ErrorDetailEscalation extends ErrorDetail {
	override get kind() { return ErrorDetailType.escalation; }
	/**
	 * A list of escallated permission details.
	 **/
	escalations: PermissionEscalation[];

	constructor(json: any) {
		super();
		this.escalations = json?.escalations?.map((e: any) => PermissionEscalation.fromJSON(e)) ?? [];
	}
}