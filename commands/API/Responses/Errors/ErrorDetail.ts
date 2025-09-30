import { JsonObject } from "@trakit/objects";
import { ErrorDetailBadIds } from "./ErrorDetailBadIds";
import { ErrorDetailBadIndexes } from "./ErrorDetailBadIndexes";
import { ErrorDetailBadKeys } from "./ErrorDetailBadKeys";
import { ErrorDetailBatch } from "./ErrorDetailBatch";
import { ErrorDetailConnection } from "./ErrorDetailConnection";
import { ErrorDetailContactInUse } from "./ErrorDetailContactInUse";
import { ErrorDetailCount } from "./ErrorDetailCount";
import { ErrorDetailEnum } from "./ErrorDetailEnum";
import { ErrorDetailEscalation } from "./ErrorDetailEscalation";
import { ErrorDetailExternals } from "./ErrorDetailExternals";
import { ErrorDetailFormTemplateInUse } from "./ErrorDetailFormTemplateInUse";
import { ErrorDetailInput } from "./ErrorDetailInput";
import { ErrorDetailLocked } from "./ErrorDetailLocked";
import { ErrorDetailMinMax } from "./ErrorDetailMinMax";
import { ErrorDetailParent } from "./ErrorDetailParent";
import { ErrorDetailParse } from "./ErrorDetailParse";
import { ErrorDetailPhone } from "./ErrorDetailPhone";
import { ErrorDetailSecret } from "./ErrorDetailSecret";
import { ErrorDetailStack } from "./ErrorDetailStack";
import { ErrorDetailThrottled } from "./ErrorDetailThrottled";
import { ErrorDetailType } from "./ErrorDetailType";
import { ErrorDetailUserGroupInUse } from "./ErrorDetailUserGroupInUse";

/**
 * An object which contains details about the error.
 * <remarks>
 * Child classes should contain members that best work to describe the details of the error.
 * This class exists to create an inheritance chain.
 * </remarks>
 **/
export abstract class ErrorDetail {
	/**
	 * Creates an instance of an ErrorDetail subclass based on the "kind" property in the JSON.
	 * @param json	The JSON to parse.
	 * @returns		An instance of an ErrorDetail subclass, or null if the JSON is null or does not contain a recognized "kind" property.
	 */
	static fromJSON(json: JsonObject): ErrorDetail | null {
		switch (json?.kind) {
			case ErrorDetailType.badIds: 			return new ErrorDetailBadIds(json);
			case ErrorDetailType.badIndexes:		return new ErrorDetailBadIndexes(json);
			case ErrorDetailType.badKeys:			return new ErrorDetailBadKeys(json);
			case ErrorDetailType.batch:				return new ErrorDetailBatch(json);
			case ErrorDetailType.connection:		return new ErrorDetailConnection(json);
			case ErrorDetailType.contactInUse:		return new ErrorDetailContactInUse(json);
			case ErrorDetailType.count:				return new ErrorDetailCount(json);
			case ErrorDetailType.enum:				return new ErrorDetailEnum(json);
			case ErrorDetailType.escalation:		return new ErrorDetailEscalation(json);
			case ErrorDetailType.externals:			return new ErrorDetailExternals(json);
			case ErrorDetailType.formTemplateInUse:	return new ErrorDetailFormTemplateInUse(json);
			case ErrorDetailType.input:				return new ErrorDetailInput(json);
			case ErrorDetailType.locked:			return new ErrorDetailLocked(json);
			case ErrorDetailType.minMax:			return new ErrorDetailMinMax(json);
			case ErrorDetailType.parent:			return new ErrorDetailParent(json);
			case ErrorDetailType.parse:				return new ErrorDetailParse(json);
			case ErrorDetailType.phone:				return new ErrorDetailPhone(json);
			case ErrorDetailType.secret:			return new ErrorDetailSecret(json);
			case ErrorDetailType.stack:				return new ErrorDetailStack(json);
			case ErrorDetailType.throttled:			return new ErrorDetailThrottled(json);
			case ErrorDetailType.userGroupInUse:	return new ErrorDetailUserGroupInUse(json);
		}
		return null;
	}

	/**
	 * A hint for deserializing the error's details.
	 **/
	abstract get kind(): ErrorDetailType;
}