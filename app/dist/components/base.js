(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Status;
    (function (Status) {
        Status[Status["Pending"] = 0] = "Pending";
        Status[Status["Doing"] = 1] = "Doing";
        Status[Status["Done"] = 2] = "Done";
    })(Status = exports.Status || (exports.Status = {}));
});
