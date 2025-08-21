import { ErrorDetailBadBase } from "./ErrorDetailBadBase";

/**
 * These details contain a list of bad keys, labels or tags, or parameter names that caused the failure.
 **/
export class ErrorDetailBadKeys extends ErrorDetailBadBase<string> {}