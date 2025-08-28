/**
 * Object definitions that work with our various APIs.
 * {@link https://github.com/trakitwireless/trakit-ts-commands|TypeScript documentation.}
 * Last updated on Thu Feb 27 2025 11:59:01 
 * @copyright Trak-iT Wireless Inc. 2025
 */
import { TrakitCommander } from "clients/TrakitCommander";
import { ErrorCode } from "./commands/API/Responses/Errors/ErrorCode";
import { TrakitObjectCommander } from "./clients/TrakitObjectCommander";


/**
 * Version number for this release.
 */
export const version = 5.03;

/**
 * Abstract command execution classes.
 */
export {
    TrakitCommander,
    TrakitObjectCommander,
};
    
/**
 * Command request payload and response content classes.
 */
export {
    //#region API
    ErrorCode,
    //#endregion API

    //#region Accounts
    //#endregion Accounts
    
    //#region Assets
    //#endregion Assets

    //#region Behaviours
    //#endregion Behaviours

    //#region Billing
    //#endregion Billing

    //#region Company
    //#endregion Company

    //#region Dispatch
    //#endregion Dispatch

    //#region Hosting
    //#endregion Hosting
    
    //#region Images
    //#endregion Images

    //#region Maintenance
    //#endregion Maintenance

    //#region Places
    //#endregion Places

    //#region Providers
    //#endregion Providers

    //#region Reports
    //#endregion Reports
};