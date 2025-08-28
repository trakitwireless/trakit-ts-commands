import { Payload } from "../Payload";

/**
 * An abstract meant to help with validating "merge" operations.
 * This class is the beginning of the chain for all {@link Payload} contents.
 */
export abstract class ParamMerge {
	/**
	 * Converts the object to JSON.
	 */
	abstract toJSON(): any;
}
/*
/// <summary>
/// Returns true if the JSON contains the given key.
/// Also when true, adds the key to the givenKeys list.
/// </summary>
/// <param name="key"></param>
/// <returns></returns>
jsonKey(key: string): boolean {
	const success = key in this._json;
	if (success) this.addKeys(key);
	return success;
}
/// <summary>
/// Returns true if the JSON contains a non-null value for the given key.
/// Also when true, adds the key to the givenKeys list.
/// </summary>
/// <param name="key"></param>
/// <returns></returns>{
/// <summary>
/// Returns true if the value at the JSON object's given key matches the given kind.
/// Also when true, adds the key to the givenKeys list.
/// </summary>
/// <param name="key"></param>
/// <param name="kind"></param>
/// <returns></returns>
jsonValue(key: string, kind?: string): [boolean, any] {
	const value = this._json[key],
		success = !kind
			? !utility.isNothing(value)
			: typeof value === kind;
	if (success) this.addKeys(key);
	return [success, value];
}
/// <summary>
/// Returns true if the value at the JSON object's given key is a number (false for numeric strings).
/// Also when true, adds the key to the givenKeys list.
/// </summary>
/// <param name="key"></param>
/// <returns></returns>
/// <summary>
/// Returns true if the value at the JSON object's given key is a floating point number (false for numeric strings).
/// Also when true, adds the key to the givenKeys list.
/// </summary>
/// <param name="key"></param>
/// <param name="number"></param>
/// <returns></returns>
jsonNumber(key: string): [boolean, number] {
	const num = parseFloat(this._json[key]),
		success = !isNaN(num);
	if (success) this.addKeys(key);
	return [success, num];
}
/// <summary>
/// Returns true if the value at the JSON object's given key is an integer (false for numeric strings).
/// Also when true, adds the key to the givenKeys list.
/// </summary>
/// <param name="key"></param>
/// <param name="number"></param>
/// <returns></returns>
jsonInteger(key:string): [boolean, number] {
	const num = parseFloat(this._json[key]),
		success = !isNaN(num) && Number.isInteger(num);
	if (success) this.addKeys(key);
	return [success, num];
}
/// <summary>
/// Returns true if the value at the JSON object's given key can be parsed into a date.
/// Also when true, adds the key to the givenKeys list.
/// </summary>
/// <param name="key"></param>
/// <param name="date"></param>
/// <returns></returns>
jsonDate(key: string): [boolean, Date] {
	const date = new Date(Date.parse(this._json[key])),
		success = !isNaN(date.valueOf());
	if (success) this.addKeys(key);
	return [success, date];
}
/// <summary>
/// Returns true if the value at the JSON object's given key can be parsed into a time.
/// Also when true, adds the key to the givenKeys list.
/// </summary>
/// <param name="key"></param>
/// <param name="time"></param>
/// <returns></returns>
jsonTime(key: string): [boolean, TimeSpan] {
	const time = new TimeSpan(this._json[key]),
		success = !isNaN(time.valueOf());
	if (success) this.addKeys(key);
	return [success, time];
}
/// <summary>
/// Returns true if the value at the JSON object's given key can be parsed as an enum value.
/// Also when true, adds the key to the givenKeys list.
/// </summary>
/// <typeparam name="T"></typeparam>
/// <param name="key"></param>
/// <param name="value"></param>
/// <param name="caseInsensitive"></param>
/// <returns></returns>
jsonEnum<T extends { [s: string]: string | number; }>(key: string, type: T, caseInsensitive = true): [boolean, string | number] {
	let keys = Object.keys(type),
		values = Object.values(type),
		[success, enumValue] = this.jsonValue(key),
		index: number = -1;
	if (success) {
		if (caseInsensitive) {
			keys = keys.map(k => k.toLowerCase());
			values = values.map(v => String(v).toLowerCase());
			enumValue = String(enumValue).toLowerCase();
		}
		index = keys.indexOf(String(enumValue));
		if (index < 0) index = values.indexOf(enumValue);
		success = index >= 0;
	}
	return [success, type[index]];
}
// /// <summary>
// /// Returns true if the value at the JSON object's given key can be parsed as the given type.
// /// Also when true, adds the key to the givenKeys list.
// /// </summary>
// /// <typeparam name="T"></typeparam>
// /// <param name="key"></param>
// /// <param name="value"></param>
// /// <param name="caseInsensitive"></param>
// /// <returns></returns>
// public bool jsonClass<T>(key:string, out T value, bool caseInsensitive = true) where T : class {
// 	const success = _json.keyIsClass(key, out value);
// 	if (success) this.addKeys(key);
// 	return success;
// }
// /// <summary>
// /// Returns true if the value at the JSON object's given key can be parsed as a colour.
// /// Also when true, adds the key to the givenKeys list.
// /// </summary>
// /// <param name="key"></param>
// /// <param name="colour"></param>
// /// <param name="removeAlpha"></param>
// /// <returns></returns>
// jsonColour(key:string, out Color colour, bool removeAlpha = true): boolean {
// 	const success = drawing.tryParseColour(_json?[key]?.ToString(), out colour)
// 				&& (!removeAlpha || colour.A < byte.MaxValue);
// 	colour = Color.FromArgb(colour.R, colour.B, colour.G);
// 	if (success) this.addKeys(key);
// 	return success;
// }

/// <summary>
/// Returns true if the key was given as an input, and the key was valid for this validation.
/// </summary>
/// <param name="key"></param>
/// <returns></returns>
hasKey(key: string): boolean {
	return this.givenKeys.includes(key);
}
/// <summary>
/// Adds all the given keys from the "givenKeys" list, but does not add duplicates.
/// </summary>
/// <param name="keys"></param>
/// <returns></returns>
addKeys(...keys: string[]) {
	if (keys?.length > 0) {
		for (const key of keys.filter(k => !this.givenKeys.includes(k))) {
			this.givenKeys.push(key);
		}
	}
}
/// <summary>
/// Removes all the given keys from the "givenKeys" list.
/// </summary>
/// <param name="keys"></param>
/// <returns></returns>
removeKeys(...keys: string[]) {
	if (keys?.length > 0) {
		this.givenKeys = this.givenKeys.filter(k => !keys.includes(k));
	}
}
*/