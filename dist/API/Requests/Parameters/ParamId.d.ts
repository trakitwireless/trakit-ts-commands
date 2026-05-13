import { ISerializable, JsonObject, ulong } from "@trakit/objects";
/**
 * A container class used to house the id of the object requested.
 */
export declare class ParamId implements ISerializable {
    /**
     * Identifier given as input for the command.
     */
    id: ulong;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamId.d.ts.map