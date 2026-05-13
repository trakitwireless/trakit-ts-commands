import { ISerializable, JsonObject } from "@trakit/objects";
/**
 * An abstract meant to help with validating "merge" operations.
 * This class is the beginning of the chain for all {@link Payload} contents.
 */
export declare abstract class ParamMerge implements ISerializable {
    /**
     * Converts the object to JSON.
     */
    abstract toJSON(): JsonObject;
}
//# sourceMappingURL=ParamMerge.d.ts.map