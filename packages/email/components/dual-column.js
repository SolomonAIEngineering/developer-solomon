"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DualColumn = void 0;
const react_1 = __importDefault(require("react"));
const section_1 = require("@react-email/section");
const DualColumn = ({ pX = 0, pY = 0, columnOneContent, columnTwoContent, columnOneStyles, columnTwoStyles, styles, }) => {
    const colMaxWidth = pX ? (600 - 2 * pX) / 2 : 600 / 2;
    return (<section_1.Section>
      <section_1.Section style={{
            //   ...twoColumnCol,
            ...columnOneStyles,
            maxWidth: colMaxWidth,
        }}>
        {columnOneContent}
      </section_1.Section>
      <section_1.Section>
        {columnTwoContent}
      </section_1.Section>
    </section_1.Section>);
};
exports.DualColumn = DualColumn;
