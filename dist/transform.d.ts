import { Transform, Module } from "visitor-as/as";
export default class AsBindTransform extends Transform {
  afterCompile(module: Module): void;
}
