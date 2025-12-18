import { DispatchJob, JsonObject } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { RepDispatchJobGet } from "../../../../commands/Dispatch/DispatchJob/Responses/RepDispatchJobGet";

describe('RepDispatchJobGet', () => {
	it('should create instance with empty constructor', () => {
		const reply = new RepDispatchJobGet();
		expect(reply).toBeInstanceOf(RepDispatchJobGet);
	});

	it('should create instance with JSON data', () => {
		const json: JsonObject = {
			job: {
				id: 777,
				name: "Test Job"
			},
			reqId: 3
		};
		const reply = new RepDispatchJobGet(json);
		expect(reply.job).toBeInstanceOf(DispatchJob);
		expect(reply.job.id).toBe(777);
		expect(reply.job.name).toBe("Test Job");
		expect(reply.reqId).toBe(3);
	});

	it('should get object with getObject method', () => {
		const json: JsonObject = {
			job: {
				id: 888,
				name: "Another Job"
			}
		};
		const reply = new RepDispatchJobGet(json);
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
		const reply = new RepDispatchJobGet(json);
		const companyId = reply.getCompanyId();
		expect(companyId).toBe(123);
	});

	it('should serialize toJSON matching input shape', () => {
		const json: JsonObject = {
			job: {
				id: 777,
				name: "Test Job"
			},
			reqId: 3
		};
		const reply = new RepDispatchJobGet(json);
		const output = reply.toJSON();
		expect(output.job).toBeDefined();
		expect(output.reqId).toBe(3);
	});

	it('should return correct action metadata', () => {
		const reply = new RepDispatchJobGet();
		expect(reply.action()).toBe("DispatchJob.Get");
		expect(reply.actionShort()).toBe("DispatchJobGet");
		expect(reply.actionNormalized()).toBe("dispatch_job_get");
	});
});
