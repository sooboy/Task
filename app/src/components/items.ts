// items 是item的列表 
import {Base} from './base'
import {ItemInterface} from './item'

export interface ItemsInterface extends Base{
    // 没个待做list可以有个名字
     name?:string;
    //  本质上是一个Item的数组
     [index:number]:ItemInterface;
}