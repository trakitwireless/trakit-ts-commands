import { ISerializable } from "@trakit/objects";
import { JsonObject } from "@trakit/objects";
/**
 * A container class used to house the string identifying a {@link Provider}.
 */
export declare class ParamIdentifier implements ISerializable {
    /**
     * The {@link Provider}'s identifier.
     */
    id: string;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamIdentifier.d.ts.map