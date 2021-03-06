import { TemplateInterface } from "./template";
// base  提供最基本的继承
export interface Base {
  // id 标记
  id: number;
  // 标题
  title?: string;
  // 状态
  status?: Status;
  // 时间
  openTime?: number;
  startTime?: number;
  endTime?: number;

  //   配置文件
  option?: Object;

  // template 生成html
  template(o?: TemplateInterface): JQuery;
}

export enum Status {
  Pending,
  Doing,
  Done
}
