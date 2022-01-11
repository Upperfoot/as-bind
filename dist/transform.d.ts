import { Module } from "assemblyscript";
import { Transform } from "assemblyscript/cli/transform";
export default class AsBindTransform extends Transform {
  afterCompile(module: Module): void;
}
