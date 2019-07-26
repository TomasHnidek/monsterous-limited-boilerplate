/* eslint import/prefer-default-export: 0 */

export const log = msg => (process.env.BROWSER) ? window.console.dir(msg) : null;