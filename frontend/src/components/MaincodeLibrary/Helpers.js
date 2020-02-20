/**Helper.js: These items are meant for the Maincode-Library components **/

/** Shorthands for common icon-classes available from font-awesome ---- **/
export const iconShorthandMap = new Map([
    ['trash', 'fas fa-trash-alt'], ['check', 'fa fa-check'], ['times', 'fas fa-times'],
    ['pen', 'fas fa-pen pen-icon'], ['plus', 'fas fa-plus']
]);
/**---------------------------------------------------------------------**/

/** Gives a general class name depending on some index
 * used to make every second element's style stand out
 */
export function makeColor(colorIndex){ return (colorIndex % 2 === 0) ? "even-index" : "odd-index"}

/** Converts number to danish decimal seperator.
 * @param number in global format, with "." as decimal seperator
 * @returns {string} string representation of the number, in danish format with "," af decimal seperator.
 */
export function formatNumber(number){return number.toString().replace(".", ",")}


/** Compares two elements for use in sorting (COMPARATOR)
 * @param a - some element
 * @param b - the element right after b
 * @param desc - bool for sorting descending, default is ascending
 * @returns {number} for a greater than or equal to b sorting. Global standards.
 */
export function sortItems(a, b, desc=false){
    // equal items sort equally
    if (a === b) {
        return 0;
    }
    // nulls sort after anything else
    else if (a === null) {
        return 1;
    }
    else if (b === null) {
        return -1;
    }
    // otherwise, if we're ascending, lowest sorts first
    else if (!desc) {
        return a < b ? -1 : 1;
    }
    // if descending, highest sorts first
    else {
        return a < b ? 1 : -1;
    }
}