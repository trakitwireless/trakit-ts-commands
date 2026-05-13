import { ISerializable, JsonObject } from "@trakit/objects";
/**
 * A container class used to house the "handle" identifying a session.
 */
export declare class ParamHandle implements ISerializable {
    /**
     * A "handle" identifying a session.
     */
    handle: string;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamHandle.d.ts.map