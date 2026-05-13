import { guid, ISerializable, JsonObject } from "@trakit/objects";
/**
 * A container class used to house the guid identifying a resource.
 */
export declare class ParamGuid implements ISerializable {
    /**
     * The global unique identifier.
     */
    guid: guid;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamGuid.d.ts.map