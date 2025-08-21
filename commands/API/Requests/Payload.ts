/// Used to split the Payload class name into pieces to help create commands
const Payload_SPLITTER = /Pay([A-Z][a-z]+)+?((?:Batch)?(?:Get|List|Merge|Delete|Restore|Suspend|Revive|Cancel|Change))(By.+)?/;

/**
 * Base class for all command parameters.
 * All command parameter classes use this as the base.
 * <remarks>
 * This class exists solely to create an inheritance chain.
 * Child classes should contain members required to execute a command.
 * </remarks>
 **/
export class Payload {
	/**
	 * Splits this class' name into parts helpful to {@link TrakitCommander{TClient}.Command{TReply}(Payload)}.
	 **/
	public getNameParts(): string[] {
		return [...this.constructor.name.matchAll(Payload_SPLITTER)].map(m => m[1] ?? "");
	}

	/**
	 * Identifier used by external system to correlate requests to responses.
	 **/
	reqId: int | undefined;
}