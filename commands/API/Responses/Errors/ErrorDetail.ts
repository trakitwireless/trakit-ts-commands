import { ISerializable, JsonObject } from "@trakit/objects";
import { ErrorDetailType } from "./ErrorDetailType";

/**
 * An object which contains details about the error in the command failure.
 * Subclasses should contain members that best work to describe the details of the error.
 */
export abstract class ErrorDetail implements ISerializable {
	/**
	 * Creates an instance of an {@link ErrorDetail} subclass based on the `kind` property in the JSON.
	 * Implementation is in {@link ErrorDetail_fromJSON.ts}
	 * @param json	The JSON to parse.
	 * @returns		An instance of an {@link ErrorDetail} subclass, or null if the JSON is null or does not contain a recognized `kind` property.
	 */
	static fromJSON: (json: JsonObject) => ErrorDetail | null;

	/**
	 * A hint for deserializing the error's details.
	 */
	abstract get kind(): ErrorDetailType;

	/**
	 * Serializes the error detail to a JSON object.
	 * @returns The JSON object representing the error detail.
	 */
	toJSON(): JsonObject {
		return {
			"kind": this.kind,
		};
	}
}