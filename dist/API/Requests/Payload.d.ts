import { int, ISerializable, JsonObject, nothing, SyncName } from '@trakit/objects';
import { Reply } from '../Responses/Reply';
export type ActionType = "Get" | "List" | "Merge" | "Delete" | "Restore" | "Suspend" | "Reactivate";
/**
 * Base class for all command parameters.
 * All command parameter classes use this as the base.
 * <remarks>
 * This class exists solely to create an inheritance chain.
 * Child classes should contain members required to execute a command.
 * </remarks>
 */
export declare abstract class Payload implements ISerializable {
    /**
     * Identifier used by external system to correlate requests to responses.
     */
    reqId: int | nothing;
    constructor(json?: JsonObject);
    /**
     * Splits this class' name into parts helpful to breaking down how the command request should be sent.
     * The returned array contains:
     * - [0]: The action being performed (ie: `Get`, `List`, `Merge`, `Delete`, etc.)
     * - [1]: Name of the object being acted upon (ie: `Asset`, `ProviderGeneral`, `User`, etc.)
     * - [2]: The filter type, if any (ie: `Asset`, `Company`, `CompanyAndLabels`, etc.). This will be an empty string if no filter is used.
     * - [3]: True if this will be a batch operation, or false otherwise.
     */
    getAction(): {
        kind: ActionType;
        object: SyncName;
        filter: string;
        batch: boolean;
    };
    /**
     * Creates a reply object from the given JSON data.
     * Each Payload will have a corresponding Reply type.
     * @param json
     * @returns
     */
    abstract createReply(json: JsonObject): Reply;
    /**
     * Payloads are serialized conditionally before being sent to the server.
     * @returns
     */
    toJSON(): JsonObject;
}
//# sourceMappingURL=Payload.d.ts.map