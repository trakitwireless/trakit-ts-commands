import { int, nothing, utility } from '@trakit/objects';
import { Reply } from '../Responses/Reply';

// Used to split the Payload class name into pieces to help create commands
const Payload_SPLITTER = /Pay((?:[A-Z][a-z]+)+?)(Batch)?(Get|List|Merge|Delete|Restore|Suspend|Revive|Cancel|Change)(?:By(.+))?/;

// type of command
type ActionType = "Get" | "List" | "Merge" | "Delete" | "Restore" | "Suspend" | "Revive" | "Cancel" | "Change";

/**
 * Base class for all command parameters.
 * All command parameter classes use this as the base.
 * <remarks>
 * This class exists solely to create an inheritance chain.
 * Child classes should contain members required to execute a command.
 * </remarks>
 **/
export abstract class Payload {
	/**
	 * Identifier used by external system to correlate requests to responses.
	 */
	reqId: int | nothing;

	constructor(json?: any) {
		this.reqId = json?.reqId;
	}

	/**
	 * Splits this class' name into parts helpful to breaking down how the command request should be sent.
	 * The returned array contains:
	 * - [0]: The action being performed (ie: `Get`, `List`, `Merge`, `Delete`, etc.)
	 * - [1]: Name of the object being acted upon (ie: `Asset`, `ProviderGeneral`, `User`, etc.)
	 * - [2]: The filter type, if any (ie: `Asset`, `Company`, `CompanyAndLabels`, etc.). This will be an empty string if no filter is used.
	 * - [3]: True if this will be a batch operation, or false otherwise.
	 */
	getNameParts(): [
		ActionType,
		string,
		string,
		boolean,
	] {
		const matches = [...this.constructor.name.match(Payload_SPLITTER) as string[]];
		return [
			(matches[3] ?? "Get") as ActionType,
			matches[1] ?? "",
			matches[4] ?? "",
			matches[2] === "Batch",
		];
	}

	/**
	 * Creates a reply object from the given JSON data.
	 * Each Payload will have a corresponding Reply type.
	 * @param json 
	 * @returns 
	 */
	abstract createReply(json: any): Reply;

	/**
	 * Payloads are serialized conditionally before being sent to the server.
	 * @returns 
	 */
	toJSON(): any {
		return utility.isNaN(this.reqId)
			? {}
			: { reqId: this.reqId };
	}
}