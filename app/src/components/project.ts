// project 代表单个项目
import { Base } from "./base";
import { ItemsInterface } from "./items";
import { Template, TemplateInterface } from "./template";

// ProjectInterface project接口
export interface ProjectInterface {
  // 每个项目都应该有个name
  name: string;
  // ItemsInterface 是project里待做事情列表
  items?: ItemsInterface;
  // tag 是项目对应的标签
  tag?: string;
  //   与之相关的开发
  users?: UserInterface[];
}

export namespace Project {
  class project {
    constructor(public id: number, public name: string) {}

    template(fn?: TemplateInterface): JQuery {
      if (fn) {
        return fn(this);
      } else {
        return Template.ProjectItem(this);
      }
    }
  }
  // 创建一个Project
  export function createProject(id:number,name:string): ProjectInterface {
    return new project(id,name);
  }
}
