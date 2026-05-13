import { codified, JsonObject, LatLng, PlaceType } from "@trakit/objects";
import { describe, expect, it } from 'vitest';
import { ParamMergeSubscribable } from "../../../../src/API/Requests/Parameters/ParamMergeSubscribable";
import { ParamPlaceMerge } from "../../../../src/Places/Requests/Parameters/ParamPlaceMerge";

describe('ParamPlaceMerge', () => {
	describe('Constructor', () => {
		it('should create instance with empty constructor', () => {
			const param = new ParamPlaceMerge();
			expect(param).toBeInstanceOf(ParamPlaceMerge);
			expect(param).toBeInstanceOf(ParamMergeSubscribable);
		});

		it('should create instance with full JSON data for new place', () => {
			const json: JsonObject = {
				company: 100,
				name: "Test Place",
				notes: "Test notes",
				kind: PlaceType.radial,
				address: "123 Main St",
				icon: 5,
				labels: ["label1", "label2"] as codified[],
				colour: "#FF0000",
				anchor: { latitude: 45.5, longitude: -73.5 },
				radius: 500.0,
				pictures: [1, 2, 3],
				reference: "EXT-123"
			};
			const param = new ParamPlaceMerge(json);
			expect(param.company).toBe(100);
			expect(param.name).toBe("Test Place");
			expect(param.notes).toBe("Test notes");
			expect(param.kind).toBe(PlaceType.radial);
			expect(param.address).toBe("123 Main St");
			expect(param.icon).toBe(5);
			expect(param.labels).toEqual(["label1", "label2"]);
			expect(param.colour).toBe("#FF0000");
			expect(param.anchor).toBeInstanceOf(LatLng);
			expect(param.radius).toBe(500.0);
			expect(param.pictures).toEqual([1, 2, 3]);
			expect(param.reference).toBe("EXT-123");
		});

		it('should create instance with update data including id', () => {
			const json: JsonObject = {
				id: 999,
				name: "Updated Place"
			};
			const param = new ParamPlaceMerge(json);
			expect(param.id).toBe(999);
			expect(param.name).toBe("Updated Place");
		});

		it('should handle polygon shape', () => {
			const json: JsonObject = {
				kind: PlaceType.polygon,
				shape: [
					{ latitude: 45.5, longitude: -73.5 },
					{ latitude: 45.6, longitude: -73.6 },
					{ latitude: 45.7, longitude: -73.7 }
				]
			};
			const param = new ParamPlaceMerge(json);
			expect(param.shape).toHaveLength(3);
			expect(param.shape![0]).toBeInstanceOf(LatLng);
		});

		it('should handle rectangle shape', () => {
			const json: JsonObject = {
				kind: PlaceType.rectangle,
				shape: [
					{ latitude: 45.5, longitude: -73.5 },
					{ latitude: 45.6, longitude: -73.6 }
				]
			};
			const param = new ParamPlaceMerge(json);
			expect(param.shape).toHaveLength(2);
		});
	});

	describe('toJSON', () => {
		it('should serialize new place with required fields', () => {
			const param = new ParamPlaceMerge();
			param.company = 200;
			param.name = "New Place";
			param.kind = PlaceType.radial;
			param.icon = 10;
			param.radius = 300.0;
			param.anchor = LatLng.fromJSON({ latitude: 40.0, longitude: -74.0 } as JsonObject);

			const json = param.toJSON();
			expect(json.company).toBe(200);
			expect(json.name).toBe("New Place");
			expect(json.kind).toBe(PlaceType.radial);
			expect(json.icon).toBe(10);
			expect(json.radius).toBe(300.0);
			expect(json.anchor).toBeDefined();
			expect(json.id).toBeUndefined();
		});

		it('should serialize update with id and version', () => {
			const param = new ParamPlaceMerge();
			param.id = 555;
			param.v = [1, 2, 3];
			param.name = "Updated Name";

			const json = param.toJSON();
			expect(json.id).toBe(555);
			expect(json.v).toEqual([1, 2, 3]);
			expect(json.name).toBe("Updated Name");
			expect(json.company).toBeUndefined();
		});

		it('should serialize all optional fields when present', () => {
			const param = new ParamPlaceMerge();
			param.company = 300;
			param.name = "Full Place";
			param.notes = "Some notes";
			param.kind = PlaceType.polygon;
			param.address = "456 Elm St";
			param.icon = 15;
			param.labels = ["tag1", "tag2"] as codified[];
			param.colour = "#00FF00";
			param.anchor = LatLng.fromJSON({ latitude: 50.0, longitude: -80.0 } as JsonObject);
			param.shape = [
				LatLng.fromJSON({ latitude: 50.0, longitude: -80.0 } as JsonObject),
				LatLng.fromJSON({ latitude: 51.0, longitude: -81.0 } as JsonObject),
				LatLng.fromJSON({ latitude: 52.0, longitude: -82.0 } as JsonObject)
			];
			param.pictures = [10, 20];
			param.reference = "REF-456";

			const json = param.toJSON();
			expect(json.company).toBe(300);
			expect(json.name).toBe("Full Place");
			expect(json.notes).toBe("Some notes");
			expect(json.kind).toBe(PlaceType.polygon);
			expect(json.address).toBe("456 Elm St");
			expect(json.icon).toBe(15);
			expect(json.labels).toEqual(["tag1", "tag2"]);
			expect(json.colour).toBe("#00FF00");
			expect(json.anchor).toBeDefined();
			expect(json.shape).toHaveLength(3);
			expect(json.pictures).toEqual([10, 20]);
			expect(json.reference).toBe("REF-456");
		});

		it('should not serialize empty or null optional fields', () => {
			const param = new ParamPlaceMerge();
			param.company = 400;
			param.name = "Minimal Place";
			param.kind = PlaceType.radial;
			param.icon = 20;

			const json = param.toJSON();
			expect(json.notes).toBeUndefined();
			expect(json.address).toBeUndefined();
			expect(json.labels).toBeUndefined();
			expect(json.colour).toBeUndefined();
			expect(json.anchor).toBeUndefined();
			expect(json.radius).toBeUndefined();
			expect(json.shape).toBeUndefined();
			expect(json.pictures).toBeUndefined();
			expect(json.reference).toBeUndefined();
		});

		it('should not serialize empty arrays', () => {
			const param = new ParamPlaceMerge();
			param.company = 500;
			param.name = "Place";
			param.kind = PlaceType.radial;
			param.icon = 25;
			param.labels = [];
			param.shape = [];
			param.pictures = [];

			const json = param.toJSON();
			expect(json.labels).toBeUndefined();
			expect(json.shape).toBeUndefined();
			expect(json.pictures).toBeUndefined();
		});
	});

	describe('Validation Methods', () => {
		it('validPoints should return true for valid polygon (3+ points)', () => {
			const param = new ParamPlaceMerge();
			param.kind = PlaceType.polygon;
			param.shape = [
				LatLng.fromJSON({ latitude: 1, longitude: 1 } as JsonObject),
				LatLng.fromJSON({ latitude: 2, longitude: 2 } as JsonObject),
				LatLng.fromJSON({ latitude: 3, longitude: 3 } as JsonObject)
			];
			expect(param.validPoints()).toBe(true);
		});

		it('validPoints should return false for invalid polygon (< 3 points)', () => {
			const param = new ParamPlaceMerge();
			param.kind = PlaceType.polygon;
			param.shape = [
				LatLng.fromJSON({ latitude: 1, longitude: 1 } as JsonObject),
				LatLng.fromJSON({ latitude: 2, longitude: 2 } as JsonObject)
			];
			expect(param.validPoints()).toBe(false);
		});

		it('validPoints should return true for valid rectangle (2 points)', () => {
			const param = new ParamPlaceMerge();
			param.kind = PlaceType.rectangle;
			param.shape = [
				LatLng.fromJSON({ latitude: 1, longitude: 1 } as JsonObject),
				LatLng.fromJSON({ latitude: 2, longitude: 2 } as JsonObject)
			];
			expect(param.validPoints()).toBe(true);
		});

		it('validPoints should return false for invalid rectangle (not 2 points)', () => {
			const param = new ParamPlaceMerge();
			param.kind = PlaceType.rectangle;
			param.shape = [
				LatLng.fromJSON({ latitude: 1, longitude: 1 } as JsonObject)
			];
			expect(param.validPoints()).toBe(false);
		});

		it('validPoints should return true for radial with valid anchor', () => {
			const param = new ParamPlaceMerge();
			param.kind = PlaceType.radial;
			param.anchor = LatLng.fromJSON({ latitude: 45, longitude: -73 } as JsonObject);
			expect(param.validPoints()).toBe(true);
		});

		it('validRadius should return true for radial with valid radius', () => {
			const param = new ParamPlaceMerge();
			param.kind = PlaceType.radial;
			param.radius = 500.0;
			expect(param.validRadius()).toBe(true);
		});

		it('validRadius should return false for non-radial types', () => {
			const param = new ParamPlaceMerge();
			param.kind = PlaceType.polygon;
			param.radius = 500.0;
			expect(param.validRadius()).toBe(false);
		});
	});

	describe('toJSON', () => {
		it('should serialize toJSON matching input shape for create', () => {
			const json: JsonObject = {
				company: 100,
				name: "Test Place",
				notes: "Test notes",
				kind: PlaceType.radial,
				address: "123 Main St",
				icon: 5,
				labels: ["label1", "label2"] as codified[],
				colour: "#FF0000",
				anchor: { latitude: 45.5, longitude: -73.5 },
				radius: 500.0,
				pictures: [1, 2, 3],
				reference: "EXT-123"
			};
			const param = new ParamPlaceMerge(json);
			const output = param.toJSON();
			expect(output.company).toBe(100);
			expect(output.name).toBe("Test Place");
			expect(output.notes).toBe("Test notes");
			expect(output.kind).toBe(PlaceType.radial);
			expect(output.address).toBe("123 Main St");
			expect(output.icon).toBe(5);
			expect(output.labels).toEqual(["label1", "label2"]);
			expect(output.colour).toBe("#FF0000");
			expect(output.anchor).toBeDefined();
			expect(output.radius).toBe(500.0);
			expect(output.pictures).toEqual([1, 2, 3]);
			expect(output.reference).toBe("EXT-123");
		});

		it('should serialize toJSON matching input shape for update', () => {
			const json: JsonObject = {
				id: 999,
				v: [1, 2, 3],
				name: "Updated Place",
				address: "456 New St"
			};
			const param = new ParamPlaceMerge(json);
			const output = param.toJSON();
			expect(output.id).toBe(999);
			expect(output.v).toEqual([1, 2, 3]);
			expect(output.name).toBe("Updated Place");
			expect(output.address).toBe("456 New St");
			expect(output.company).toBeUndefined();
		});
	});
});