import { DispatchJob, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { RepDispatchJobDelete } from "../../../../commands/Dispatch/DispatchJob/Responses/RepDispatchJobDelete";

describe('RepDispatchJobDelete', () => {
	it('should create instance with empty constructor', () => {
		const reply = new RepDispatchJobDelete();
		expect(reply).toBeInstanceOf(RepDispatchJobDelete);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			job: {
				id: 777
			},
			reqId: 3
		};
		const reply = new RepDispatchJobDelete(json);
		expect(reply.job).toBeInstanceOf(DispatchJob);
		expect(reply.job.id).toBe(777);
		expect(reply.reqId).toBe(3);
	});

	it('should get object with getObject method', () => {
		const json: JsonObject = {
			job: {
				id: 888
			}
		};
		const reply = new RepDispatchJobDelete(json);
		const object = reply.getObject();
		expect(object).toBeInstanceOf(DispatchJob);
		expect(object.id).toBe(888);
	});

	it('should get company ID with getCompanyId method', () => {
		const json: JsonObject = {
			job: {
				id: 999,
				companyId: 123
			}
		};
		const reply = new RepDispatchJobDelete(json);
		const companyId = reply.getCompanyId();
		expect(companyId).toBe(123);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			job: {
				id: 777
			},
			reqId: 3
		};
		const reply = new RepDispatchJobDelete(json);
		const output = reply.toJSON();
		expect(output.job).toBeDefined();
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const reply = new RepDispatchJobDelete();
		expect(reply.action()).toBe("DispatchJob.Delete");
		expect(reply.actionShort()).toBe("DispatchJobDelete");
		expect(reply.actionNormalized()).toBe("dispatch_job_delete");
	});
});
