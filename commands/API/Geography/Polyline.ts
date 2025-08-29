import { LatLng } from "@trakit/objects";

/**
 * 
 */
const DEFAULT_PRECISION = 6;

/**
 * Encodes a single coordinate value using the Google's Encoded Polyline algorithm.
 * @param {!number} value
 * @param {!number} factor			
 */
function ROUTE_ENCODE_CHAR(value: number, factor: number) {
	var chars = [],
		shifted = (value * factor) << 1;
	if (shifted < 0) shifted = ~shifted;
	while (shifted >= 0x20) {
		chars.push((0x20 | (shifted & 0x1f)) + 0x3f);
		shifted >>= 0x05;
	}
	chars.push(shifted + 0x3f);
	return chars.map((c) => String.fromCharCode(c)).join("");
}
/**
 * Our implementation to encode a polyline using Google's Encoded Polyline algorithm.
 * This version allows you to change the precision of the encoding.
 * We use 6 decimal places by default. Google uses 5.
 * https://developers.google.com/maps/documentation/utilities/polylinealgorithm
 * @param route		The array of coordinates representing a path.
 * @param precision			Optional number of decimal places to use to calculate the results.  Default is 5.
 * @returns
 */
export function ROUTE_ENCODE(route: LatLng[], precision = DEFAULT_PRECISION) {
	var factor = Math.pow(10, precision || 5),
		output = ROUTE_ENCODE_CHAR(route[0].lat, factor) + ROUTE_ENCODE_CHAR(route[0].lng, factor);

	for (var i = 1; i < route.length; i++) {
		var a = route[i], b = route[i - 1];
		output += ROUTE_ENCODE_CHAR(a.lat - b.lat, factor) + ROUTE_ENCODE_CHAR(a.lng - b.lng, factor);
	}

	return output;
}

/**
 * Our implementation to decode a polyline using Google's Encoded Polyline algorithm.
 * This version allows you to change the precision of the encoding.
 * We use 6 decimal places by default. Google uses 5.
 * @param encodedPoints 
 * @param precision 
 * @returns 
 */
export function ROUTE_DECODE(route: string, precision = DEFAULT_PRECISION) {
	var index = 0,
		length = route.length,
		lat = index,
		lng = index,
		path = [],
		factor = Math.pow(10, precision || DEFAULT_PRECISION);
	function diff() {
		var shift = 0,
			result = 0;
		do {
			var byte = route.charCodeAt(index++) - 0x3f;
			result |= (byte & 0x1f) << shift;
			shift += 0x05;
		} while (byte >= 0x20);
		return result & 1
			? ~(result >> 1)
			: result >> 1;
	}
	while (index < length) {
		path.push(new LatLng(
			(lat += diff()) / factor,
			(lng += diff()) / factor
		));
	}
	return path;
}