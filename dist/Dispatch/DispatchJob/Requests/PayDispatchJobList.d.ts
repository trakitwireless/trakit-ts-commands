import { codified, JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByAsset } from "../../../API/Requests/IPayListByAsset";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { IPayListByLabels } from "../../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../../API/Requests/IPayListByReferences";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
/**
 *
 */
export declare abstract class PayDispatchJobList extends Payload implements IPayDeletable {
    /**
     * When true, the command will also return  deleted {@link DispatchJob}s.
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 */
export declare class PayDispatchJobListByCompany extends PayDispatchJobList implements IPayListByCompany {
    /**
     *
     */
    company: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 */
export declare class PayDispatchJobListByCompanyAndLabels extends PayDispatchJobListByCompany implements IPayListByLabels {
    /**
     * Labels used to filter the {@link DispatchJob}s.
     */
    labels: codified[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 */
export declare class PayDispatchJobListByCompanyAndRefPairs extends PayDispatchJobListByCompany implements IPayListByReferences {
    /**
     * Case-insensitive reference pairs used to match {@link Company}s.
     * @see {@link CompanyGeneral.references}
     */
    references: Map<string, string>;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 */
export declare class PayDispatchJobListByAsset extends PayDispatchJobList implements IPayListByAsset {
    /**
     *
     */
    asset: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 */
export declare class PayDispatchJobListByAssetAndLabels extends PayDispatchJobListByAsset implements IPayListByLabels {
    /**
     * Labels used to filter the {@link DispatchJob}s.
     */
    labels: codified[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 */
export declare class PayDispatchJobListByAssetAndRefPairs extends PayDispatchJobListByAsset implements IPayListByReferences {
    /**
     * Case-insensitive reference pairs used to match {@link Asset}s.
     * @see {@link AssetGeneral.references}
     */
    references: Map<string, string>;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 */
export declare class PayDispatchJobListByUnassigned extends PayDispatchJobListByCompany {
}
/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 */
export declare class PayDispatchJobListByUnassignedAndLabels extends PayDispatchJobListByCompanyAndLabels {
}
/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 */
export declare class PayDispatchJobListByUnassignedAndRefPairs extends PayDispatchJobListByCompanyAndRefPairs {
}
//# sourceMappingURL=PayDispatchJobList.d.ts.map