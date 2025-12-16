import { ParamId } from "./Parameters/ParamId";

/**
 * Interface for requests on a list of objects by billing profile.
 */
export interface IPayListByBillingProfile {
	/**
	 * The billing profile to filter the list by.
	 */
	billingProfile: ParamId;
}