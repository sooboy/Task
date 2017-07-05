(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "jquery"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    require("jquery");
    var Template;
    (function (Template) {
        //  生成project列表
        function ProjectItem(o) {
            var t = $("<div><p>make a project Item " + o.id + ", he's name is " + o.name + "</p></div>");
            t.find("p").click(function () {
                console.log(o.id, "title has beeb click");
                var title = $(this).text();
                console.log(title);
                $(this).hide();
                $(this).parent().prepend($("<input>")
                    .val(title)
                    .blur(function () {
                    var title = $(this).val();
                    $(this).hide();
                    $(this).parent().find("p").text(String(title)).show();
                })
                    .keyup(function (e) {
                    if (e.keyCode == 13) {
                        var title = $(this).val();
                        $(this).hide();
                        $(this).parent().find("p").text(String(title)).show();
                    }
                })
                    .css({ width: "400px", height: "30px" }));
            });
            return t;
        }
        Template.ProjectItem = ProjectItem;
        // 对于展开的project列表
        function ExpondProject(o) {
            var t = $("\n        <div>\n            <p>project name is " + o.name + "</p>\n            " + (o.items && o.items.template().html()) + "\n        </div>\n      ");
            return t;
        }
        Template.ExpondProject = ExpondProject;
    })(Template = exports.Template || (exports.Template = {}));
});
