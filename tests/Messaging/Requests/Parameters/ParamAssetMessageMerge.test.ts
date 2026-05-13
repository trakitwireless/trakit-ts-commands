import { JsonObject, MessageFolder, MessageType } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamMergeSubscribable } from "../../../../src/API/Requests/Parameters/ParamMergeSubscribable";
import { ParamAssetMessageMerge } from "../../../../src/Messaging/Requests/Parameters/ParamAssetMessageMerge";

describe('ParamAssetMessageMerge', () => {
	describe('Constructor', () => {
		it('should create instance with empty constructor', () => {
			const param = new ParamAssetMessageMerge();
			expect(param).toBeInstanceOf(ParamAssetMessageMerge);
			expect(param).toBeInstanceOf(ParamMergeSubscribable);
		});

		it('should create instance with full JSON data for new asset message', () => {
			const json: JsonObject = {
				asset: 100,
				kind: MessageType.email,
				folder: MessageFolder.inbox,
				to: "recipient@example.com",
				subject: "Test Subject",
				body: "Test message body",
				read: false
			};
			const param = new ParamAssetMessageMerge(json);
			expect(param.asset).toBe(100);
			expect(param.kind).toBe(MessageType.email);
			expect(param.folder).toBe(MessageFolder.inbox);
			expect(param.to).toBe("recipient@example.com");
			expect(param.subject).toBe("Test Subject");
			expect(param.body).toBe("Test message body");
			expect(param.read).toBe(false);
		});

		it('should create instance with update data including id', () => {
			const json: JsonObject = {
				id: 999,
				folder: MessageFolder.sent,
				read: true
			};
			const param = new ParamAssetMessageMerge(json);
			expect(param.id).toBe(999);
			expect(param.folder).toBe(MessageFolder.sent);
			expect(param.read).toBe(true);
		});

		it('should handle SMS message type', () => {
			const json: JsonObject = {
				asset: 200,
				kind: MessageType.sms,
				to: "+1234567890",
				body: "SMS text"
			};
			const param = new ParamAssetMessageMerge(json);
			expect(param.kind).toBe(MessageType.sms);
			expect(param.to).toBe("+1234567890");
			expect(param.body).toBe("SMS text");
		});
	});

	describe('toJSON', () => {
		it('should serialize new asset message with required fields', () => {
			const param = new ParamAssetMessageMerge();
			param.asset = 300;
			param.kind = MessageType.email;
			param.folder = MessageFolder.inbox;
			param.subject = "New Message";
			param.body = "Message content";

			const json = param.toJSON();
			expect(json.asset).toBe(300);
			expect(json.kind).toBe(MessageType.email);
			expect(json.folder).toBe(MessageFolder.inbox);
			expect(json.subject).toBe("New Message");
			expect(json.body).toBe("Message content");
			expect(json.id).toBeUndefined();
		});

		it('should serialize update with id and version', () => {
			const param = new ParamAssetMessageMerge();
			param.id = 555;
			param.v = [1, 2, 3];
			param.folder = MessageFolder.sent;
			param.read = true;

			const json = param.toJSON();
			expect(json.id).toBe(555);
			expect(json.v).toEqual([1, 2, 3]);
			expect(json.folder).toBe(MessageFolder.sent);
			expect(json.read).toBe(true);
			expect(json.asset).toBeUndefined();
		});

		it('should serialize all optional fields when present', () => {
			const param = new ParamAssetMessageMerge();
			param.asset = 400;
			param.kind = MessageType.email;
			param.folder = MessageFolder.drafts;
			param.to = "user@example.com";
			param.subject = "Full Message";
			param.body = "Complete message body";
			param.read = false;

			const json = param.toJSON();
			expect(json.asset).toBe(400);
			expect(json.kind).toBe(MessageType.email);
			expect(json.folder).toBe(MessageFolder.drafts);
			expect(json.to).toBe("user@example.com");
			expect(json.subject).toBe("Full Message");
			expect(json.body).toBe("Complete message body");
			expect(json.read).toBe(false);
		});

		it('should not serialize empty or null optional fields', () => {
			const param = new ParamAssetMessageMerge();
			param.asset = 500;

			const json = param.toJSON();
			expect(json.asset).toBe(500);
			expect(json.kind).toBeUndefined();
			expect(json.folder).toBeUndefined();
			expect(json.to).toBeUndefined();
			expect(json.subject).toBeUndefined();
			expect(json.body).toBeUndefined();
			expect(json.read).toBeUndefined();
		});

		it('should handle different message folders', () => {
			const param = new ParamAssetMessageMerge();
			param.asset = 600;
			param.folder = MessageFolder.archive;

			const json = param.toJSON();
			expect(json.folder).toBe(MessageFolder.archive);
		});

		it('should handle different message types', () => {
			const param = new ParamAssetMessageMerge();
			param.asset = 700;
			param.kind = MessageType.sms;
			param.body = "SMS message";

			const json = param.toJSON();
			expect(json.kind).toBe(MessageType.sms);
			expect(json.body).toBe("SMS message");
		});
	});
});