import { ISerializable, JsonObject } from "@trakit/objects";
/**
 * A container class used to house the "code" identifying a resource.
 */
export declare class ParamCode implements ISerializable {
    /**
     * A "code" identifying a resource.
     * <override required="always" />
     */
    code: string;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamCode.d.ts.map