/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <reference types="node" />
/**
 * @module
 * @description
 * Entry point for all public APIs of the language service package.
 */
export { createLanguageService } from './src/language_service';
export * from './src/ts_plugin';
export { TypeScriptServiceHost, createLanguageServiceFromTypescript } from './src/typescript_host';
export { VERSION } from './src/version';
//# sourceMappingURL=language-service.js.map