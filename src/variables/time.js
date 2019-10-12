"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dateformat = require("dateformat");
function timeRender(loggerConfig) {
    var now = new Date();
    return dateformat(now, loggerConfig.timeFormat);
}
exports.default = timeRender;
//# sourceMappingURL=time.js.map