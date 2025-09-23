import { int } from '@trakit/objects';
import { Reply } from '../Responses/Reply';

// Used to split the Payload class name into pieces to help create commands
const Payload_SPLITTER = /Pay((?:[A-Z][a-z]+)+?)(Batch)?(Get|List|Merge|Delete|Restore|Suspend|Revive|Cancel|Change)(?:By(.+))?/;

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
	reqId: int | undefined;

	constructor(json?: any) {
		this.reqId = json?.reqId;
	}

	/**
	 * Splits this class' name into parts helpful to breaking down how the command request should be sent.
	 * The returned array contains:
	 * - [0]: Name of the object being acted upon (ie: `Asset`, `ProviderGeneral`, `User`, etc.)
	 * - [1]: A flag for batch operations. This will be `Batch` if the operation is a batch operation, or an empty string otherwise.
	 * - [2]: The action being performed (ie: `Get`, `List`, `Merge`, `Delete`, etc.)
	 * - [3]: The filter type, if any (ie: `Asset`, `Company`, `CompanyAndLabels`, etc.). This will be an empty string if no filter is used.
	 */
	getNameParts(): [
		string,
		"" | "Batch",
		"Get" | "List" | "Merge" | "Delete" | "Restore" | "Suspend" | "Revive" | "Cancel" | "Change",
		string
	] {
		return [...this.constructor.name.match(Payload_SPLITTER) as string[]]
			.slice(1)
			.map(m => m ?? "") as [
				string,
				"" | "Batch",
				"Get" | "List" | "Merge" | "Delete" | "Restore" | "Suspend" | "Revive" | "Cancel" | "Change",
				string
			];
	}

	/**
	 * Creates a reply object from the given JSON data.
	 * Each Payload will have a corresponding Reply type.
	 * @param json 
	 * @returns 
	 */
	abstract createReply(json: any): Reply;
}