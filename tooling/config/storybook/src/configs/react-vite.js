import { getAbsolutePath } from "@v1/utils/filesystem";
const config = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        getAbsolutePath("@storybook/addon-links"),
        {
            name: getAbsolutePath("@storybook/addon-essentials"),
            options: {
                backgrounds: false,
            },
        },
        getAbsolutePath("@storybook/addon-onboarding"),
        getAbsolutePath("@storybook/addon-interactions"),
        getAbsolutePath("@storybook/addon-themes"),
        getAbsolutePath("@storybook/addon-a11y"),
    ],
    framework: {
        name: getAbsolutePath("@storybook/react-vite"),
        options: {
            strictMode: true,
        },
    },
    staticDirs: [getAbsolutePath("@v1/assets")],
    docs: {
        autodocs: "tag",
    },
};
export default config;
