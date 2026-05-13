import { ISerializable, JsonObject } from "@trakit/objects";
/**
 * A container class used to house the key identifying a {@link Machine}.
 */
export declare class ParamKey implements ISerializable {
    /**
     * The {@link Machine}'s login.
     */
    key: string;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamKey.d.ts.map