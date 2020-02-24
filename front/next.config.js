module.exports = {
    distDir: ".next",
    webpack(config) {
        console.log("config", config);
        return config;
    }
};
