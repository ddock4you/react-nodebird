const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer({
    distDir: ".next",
    webpack(config) {
        console.log("config", config);
        console.log("rules", config.module.rules[0]);
        const prod = process.envNODE_ENV === "production";

        return {
            ...config,
            mode: prod ? "production" : "development",
            // 배포환경 구분
            // hidden-source-map -> 소스코드 숨기면서 에러 시 소스맵 제공
            // eval -> 빠르게 웹팩 적용
            devtool: prod ? "hidden-source-map" : "eval"
        };
    }
});
