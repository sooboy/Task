(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "jquery", "./components/project"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    require("jquery");
    var project_1 = require("./components/project");
    var dom = {
        createProjectBtn: $(".createProjectBtn"),
        projects: $(".project_list"),
        newProjectModal: {
            status: false,
            body: $(".newProjectModal"),
            title: $(".titleProjectInput"),
            submit: $("submitProjectBtn")
        }
    };
    var projectListItem = (function () {
        function projectListItem(project, edit, deleteBtn) {
            this.deleteBtn = deleteBtn;
            this.data = project;
            this.editBtn = edit;
        }
        projectListItem.prototype.template = function () {
            var _this = this;
            var edit = this.editBtn.click(function () {
                console.log(_this.data.name, "edit has been click");
            });
            var deleten = this.deleteBtn.click(function () {
                console.log(_this.data.name, "delete has been click");
            });
            this._dom = this.data.template().append(edit, deleten);
            return this._dom;
        };
        return projectListItem;
    }());
    var Dashbord = (function () {
        function Dashbord(dom) {
            this.dom = dom;
            this.projects = [];
            this.init();
        }
        //   初始化
        Dashbord.prototype.init = function () {
            var _this = this;
            this.getProject();
            console.log("添加 创建按钮功能");
            this.dom.createProjectBtn.click(function () {
                _this.dom.newProjectModal.status = !_this.dom.newProjectModal.status;
                if (_this.dom.newProjectModal.status) {
                    _this.dom.newProjectModal.body.show();
                }
                else {
                    _this.dom.newProjectModal.body.hide();
                }
            });
            console.log("添加 生成列表功能");
            this.projectsHTML();
        };
        Dashbord.prototype.getProject = function () {
            //  todo 模拟产生一个projects
            for (var i = 0; i < 5; i++) {
                this.projects.push(new projectListItem(project_1.Project.createProject(i, "name" + i), $("<button>编辑</botton>"), $("<button>删除</botton>")));
            }
        };
        Dashbord.prototype.projectsHTML = function () {
            for (var _i = 0, _a = this.projects; _i < _a.length; _i++) {
                var v = _a[_i];
                this.dom.projects.append(v.template());
            }
        };
        return Dashbord;
    }());
    new Dashbord(dom);
});
