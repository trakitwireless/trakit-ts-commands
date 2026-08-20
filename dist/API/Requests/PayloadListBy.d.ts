import { JsonObject, nothing, ulong } from '@trakit/objects';
import { Payload } from './Payload';
/**
 *
 */
export declare abstract class PayloadListBy extends Payload {
    /**
     * The maximum number of items to return.
     * If not specified, the server will return all.
     */
    limit: ulong | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayloadListBy.d.ts.map