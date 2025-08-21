
/**
 * Interface for requests on objects that can be suspended.
 **/
export interface IPaySuspendable {
	/**
	 * When true, the command will also return suspended objects.
	 **/
	includeSuspended: boolean;
}