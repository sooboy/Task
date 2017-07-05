import "jquery";

import { ProjectInterface, Project } from "./components/project";
import { ItemsInterface } from "./components/items";
import { ItemInterface } from "./components/item";

var dom = {
  createProjectBtn: $(".createProjectBtn"),
  projects: $(".project_list"),
  newProjectModal: {
    status: false,
    body: $(".newProjectModal"),
    title: $(".titleProjectInput"),
    submit: $(".submitProjectBtn"),
    addUser: $(".projectAddUser"),
    usersPlace: $(".projectUsers")
  }
};

class projectListItem {
  _dom: JQuery;
  data: ProjectInterface;
  editBtn: JQuery;
  deleteBtn: JQuery;
  constructor(project: ProjectInterface, edit: JQuery, deleteBtn: JQuery) {
    this.deleteBtn = deleteBtn;
    this.data = project;
    this.editBtn = edit;
  }
  template(): JQuery {
    var edit = this.editBtn.click(function() {
      // console.log(this.data.name, "edit has been click");
      // $(this).parent().remove();
    });
    var deleten = this.deleteBtn.click(function() {
      // console.log(this.data.name, "delete has been click");
      $(this).parent().remove();
    });
    this._dom = this.data.template().append(edit, deleten);

    return this._dom;
  }
}
class Dashbord {
  projects: projectListItem[];
  constructor(public dom: any) {
    this.projects = [];
    this.init();
  }

  //   初始化
  init() {
    this.getProject();
    console.log("添加 创建按钮功能");
    this.dom.createProjectBtn.click(() => {
      this.dom.newProjectModal.status = !this.dom.newProjectModal.status;
      if (this.dom.newProjectModal.status) {
        this.dom.newProjectModal.body.show();
      } else {
        this.dom.newProjectModal.body.hide();
      }
    });
    console.log("添加 生成列表功能");
    this.projectsHTML();
    this.dispatch();
  }

  getProject() {
    //  todo 模拟产生一个projects
    for (let i = 0; i < 5; i++) {
      this.projects.push(
        new projectListItem(
          Project.createProject(i, "name" + i),
          $("<button>编辑</botton>"),
          $("<button>删除</botton>")
        )
      );
    }
  }
  projectsHTML() {
    this.dom.projects.html("");
    for (var v of this.projects) {
      this.dom.projects.append(v.template());
    }
  }
  addProject(p: projectListItem) {
    this.projects.push(p);
    this.projectsHTML();
  }

  dispatch() {
    this.dom.newProjectModal.submit.click(() => {
      console.log(this.dom.newProjectModal.title.val());
      this.addProject(
        new projectListItem(
          Project.createProject(0, this.dom.newProjectModal.title.val()),
          $("<button>编辑</botton>"),
          $("<button>删除</botton>")
        )
      );
    });
    this.dom.newProjectModal.addUser.click(() => {
      console.log("add user");
      this.dom.newProjectModal.usersPlace.append(
        $("<div></div>").append(
          $("<input>"),
          $("<button>删除</button>").click(function() {
            $(this).parent().remove();
          })
        )
      );
    });
  }
}

new Dashbord(dom);
