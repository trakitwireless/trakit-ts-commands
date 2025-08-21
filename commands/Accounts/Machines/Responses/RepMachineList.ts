import { Reply } from "../../../API/Responses/Reply";
import { RepMachineList } from "./RepMachineList";

/**
 * A container for the requested {@link machines}.
 **/
export abstract class RepMachineList extends Reply {
	/**
	 * The list of requested {@link Machine}s.
	 **/
	machines: Machine[];
	}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepMachineListByCompany extends RepMachineList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId;}