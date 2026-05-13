import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByAsset } from "../../../API/Requests/IPayListByAsset";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { IPayListByReferences } from "../../../API/Requests/IPayListByReferences";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
/**
 *
 */
export declare abstract class PayDispatchTaskList extends Payload implements IPayDeletable {
    /**
     * When true, the command will also return  deleted {@link DispatchTask}s.
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
/**
 * Gets the list of {@link DispatchTask}s for the specified {@link Asset}.
 */
export declare class PayDispatchTaskListByAsset extends PayDispatchTaskList implements IPayListByAsset {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    asset: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 * Gets the list of {@link DispatchTask}s for the specified {@link Asset} only if the specified reference fields match.
 * If no references are specified, it will match any {@link DispatchTask} with no references.
 * If a reference value is null, it will match any {@link DispatchTask} without that reference key.
 */
export declare class PayDispatchTaskListByAssetAndRefPairs extends PayDispatchTaskListByAsset {
    /**
     * Case-insensitive reference pairs used to match jobs.
     * @see {@link DispatchTask.references}
     */
    references: Map<string, string>;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 * Gets the list of {@link DispatchTask}s for the specified {@link Company}.
 */
export declare class PayDispatchTaskListByCompany extends PayDispatchTaskList implements IPayListByCompany {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 * Gets the list of {@link DispatchTask}s for the specified {@link Company} only if the specified reference fields match.
 * If no references are specified, it will match any {@link DispatchTask} with no references.
 * If a reference value is null, it will match any {@link DispatchTask} without that reference key.
 */
export declare class PayDispatchTaskListByCompanyAndRefPairs extends PayDispatchTaskListByCompany implements IPayListByReferences {
    /**
     * Case-insensitive reference pairs used to match jobs.
     * @see {@link DispatchTask.references}
     */
    references: Map<string, string>;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayDispatchTaskList.d.ts.map