const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true"
});
const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = withBundleAnalyzer({
    distDir: ".next",
    webpack(config) {
        console.log("config", config);
        console.log("rules", config.module.rules[0]);
        const prod = process.env.NODE_ENV === "production";
        const plugins = [
            ...config.plugins,
            new webpack.ContextReplacementPlugin(
                /moment[/\\]locale$/,
                /^\.\/ko$/
            )
        ];
        if (prod) {
            plugins.push(prod && new CompressionPlugin());
        }
        return {
            ...config,
            mode: prod ? "production" : "development",
            // 배포환경 구분
            // hidden-source-map -> 소스코드 숨기면서 에러 시 소스맵 제공
            // eval -> 빠르게 웹팩 적용
            devtool: prod ? "hidden-source-map" : "eval",
            plugins
        };
    }
});
