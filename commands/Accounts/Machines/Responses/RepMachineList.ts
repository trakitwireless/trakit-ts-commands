import { Machine, nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentId } from "commands/API/Responses/Content/ContentId";

/**
 * A container for the requested {@link machines}.
 **/
export abstract class RepMachineList extends Reply {
	/**
	 * The list of requested {@link Machine}s.
	 **/
	machines: Machine[] | nothing;

	constructor(json: any) {
		super(json);
		this.machines = json?.machines?.map((m: any) => new Machine(m));
	}
}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepMachineListByCompany extends RepMachineList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: any) {
		super(json);
		this.company = ContentId.fromJSON(json?.company);
	}
}