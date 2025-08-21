import { Reply } from "../../../API/Responses/Reply";
import { RepMachineList } from "./RepMachineList";

/**
 * A container for the requested <see cref="machines"/>.
 **/
export abstract class RepMachineList extends Reply {
	/**
	 * The list of requested <see cref="Machine"/>s.
	 **/
	machines: Machine[];
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class RepMachineListByCompany extends RepMachineList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;}