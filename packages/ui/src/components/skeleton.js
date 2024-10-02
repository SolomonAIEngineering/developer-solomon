"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skeleton = Skeleton;
const utils_1 = require("../utils");
function Skeleton({ className, ...props }) {
    return (<div className={(0, utils_1.cn)("animate-pulse bg-primary/10", className)} {...props}/>);
}
