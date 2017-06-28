// project 代表单个项目
import { Base } from "./base";
import { ItemsInterface } from "./items";

// ProjectInterface project接口
export interface ProjectInterface {
  // 每个项目都应该有个name
  name: string;
  // ItemsInterface 是project里待做事情列表
  items: ItemsInterface;
  // tag 是项目对应的标签
  tag: string;
}

export namespace Project {
  class project {}
  // 创建一个Project
  export function createProject(): ProjectInterface {
    return;
  }
}
