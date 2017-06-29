(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./template"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var template_1 = require("./template");
    var Project;
    (function (Project) {
        var project = (function () {
            function project(id, name) {
                this.id = id;
                this.name = name;
            }
            project.prototype.template = function (fn) {
                if (fn) {
                    return fn(this);
                }
                else {
                    return template_1.Template.ProjectItem(this);
                }
            };
            return project;
        }());
        // 创建一个Project
        function createProject(id, name) {
            return new project(id, name);
        }
        Project.createProject = createProject;
    })(Project = exports.Project || (exports.Project = {}));
});
