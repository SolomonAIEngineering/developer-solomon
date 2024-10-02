"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disabled = exports.EmptyDataset = exports.SingleDataPoint = exports.DataWithComparison = exports.VolatileData = exports.LargeHeight = exports.SmallHeight = exports.LargeDataset = exports.Stack = exports.Group = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@ai-sdk/react");
const react_3 = require("@assistant-ui/react");
const react_ai_sdk_1 = require("@assistant-ui/react-ai-sdk");
const generator_1 = require("../../../lib/random/generator");
const bar_chart_multi_1 = require("./bar-chart-multi");
/**
 * A wrapper component that provides the necessary context for the AssistantModalWrapper.
 *
 * @component
 */
const AssistantProviderWrapper = ({ children, }) => {
    const assistant = (0, react_2.useAssistant)({
        api: "/api/assistant", // Adjust this if your API endpoint is different
    });
    const runtime = (0, react_ai_sdk_1.useVercelUseAssistantRuntime)(assistant);
    return (<react_3.AssistantRuntimeProvider runtime={runtime}>
      {children}
    </react_3.AssistantRuntimeProvider>);
};
exports.default = {
    component: bar_chart_multi_1.BarChartMulti,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        currency: {
            control: "select",
            options: ["USD", "EUR", "GBP", "JPY"],
        },
        height: {
            control: { type: "range", min: 200, max: 600, step: 10 },
        },
    },
    decorators: [
        (Story) => (<AssistantProviderWrapper>
        <Story />
      </AssistantProviderWrapper>),
    ],
};
const payloads = (0, generator_1.generatePayloadArray)({
    count: 5,
    minValue: 100,
    maxValue: 500,
}).map((value, index) => {
    // create a hashma
    const dataPoint = {
        date: value.date,
        current: value.value,
        previous: index * 100,
    };
    return dataPoint;
});
const Template = (args) => (<div className="w-[900px]">
    <bar_chart_multi_1.BarChartMulti {...args}/>
  </div>);
exports.Default = Template.bind({});
exports.Default.args = {
    currency: "USD",
    data: payloads,
    height: 290,
    locale: "en-US",
    enableAssistantMode: true,
};
exports.Group = Template.bind({});
exports.Group.args = {
    ...exports.Default.args,
    currency: "EUR",
    enableAssistantMode: true,
};
exports.Stack = Template.bind({});
exports.Stack.args = {
    ...exports.Default.args,
    currency: "EUR",
    enableAssistantMode: true,
    chartType: "stack",
};
exports.LargeDataset = Template.bind({});
exports.LargeDataset.args = {
    ...exports.Default.args,
    data: payloads,
};
exports.SmallHeight = Template.bind({});
exports.SmallHeight.args = {
    ...exports.Default.args,
    height: 200,
};
exports.LargeHeight = Template.bind({});
exports.LargeHeight.args = {
    ...exports.Default.args,
    height: 500,
};
exports.VolatileData = Template.bind({});
exports.VolatileData.args = {
    ...exports.Default.args,
    data: payloads,
};
exports.DataWithComparison = Template.bind({});
exports.DataWithComparison.args = {
    ...exports.Default.args,
    data: payloads,
    enableComparison: true,
};
exports.SingleDataPoint = Template.bind({});
exports.SingleDataPoint.args = {
    ...exports.Default.args,
    data: payloads,
};
exports.EmptyDataset = Template.bind({});
exports.EmptyDataset.args = {
    ...exports.Default.args,
    data: [],
};
exports.Disabled = Template.bind({});
exports.Disabled.args = {
    ...exports.Default.args,
    disabled: true,
};
