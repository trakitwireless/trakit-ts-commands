import { Reply } from "../Reply";
import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";

/**
 * For batch commands, these are the errors thrown by the sub-command.
 **/
export class ErrorDetailBatch extends ErrorDetail {
    override get kind() { return ErrorDetailType.batch; }
	/**
	 * Index-preserved list of sub-command errors.
	 **/
	errors!: Reply[];
}