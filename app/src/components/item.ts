// item 是对单个任务具体描述
import { Base } from "./base";

export interface ItemInterface extends Base {
  // Title 必须属性
  title: string;
  // 每条子项可以继续添加
  items?: ItemInterface[]
}
