"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chart = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@ai-sdk/react");
const react_3 = require("@assistant-ui/react");
const react_ai_sdk_1 = require("@assistant-ui/react-ai-sdk");
const location_sub_profile_converter_1 = require("../../../../lib/converters/location-sub-profile-converter");
const financial_data_generator_1 = require("../../../../lib/random/financial-data-generator");
const location_spending_over_time_1 = require("./location-spending-over-time");
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
    component: location_spending_over_time_1.LocationSpendingVsMonthChart,
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
const data = financial_data_generator_1.FinancialDataGenerator.generateRandomLocationMetricsFinancialSubProfile(150, 2023);
const cities = location_sub_profile_converter_1.LocationFinancialMetricsConverter.getUniqueCities(data);
const Template = (args) => (<div className="w-[900px]">
    <location_spending_over_time_1.LocationSpendingVsMonthChart {...args}/>
  </div>);
exports.Default = Template.bind({});
exports.Default.args = {
    currency: "USD",
    records: data,
    height: 290,
    locale: "en-US",
    enableAssistantMode: true,
    locations: cities,
    selectedSpendingPeriod: "spentLastTwoWeeks",
};
exports.Chart = Template.bind({});
exports.Chart.args = {
    ...exports.Default.args,
    records: data,
    currency: "USD",
    locations: cities,
    selectedSpendingPeriod: "spentLastTwoWeeks",
};
