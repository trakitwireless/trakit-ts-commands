import { ParamId } from "./ParamId";

/**
 * An interface that when implemented can be used with validator.byBillingProfile.
 * <category>Billing</category>
 **/
export interface IParamBillingProfile {
	billingProfile: ParamId;
}