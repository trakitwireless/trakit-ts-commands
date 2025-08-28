import { Payload } from "../../../API/Requests/Payload";
import { ParamSelfContactMerge } from "./Parameters/ParamSelfContactMerge";

/**
 * 
 **/
export class PaySelfContact extends Payload {
	/**
	 * 
	 **/
	contact: ParamSelfContactMerge;
}