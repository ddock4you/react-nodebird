const backUrl =
    process.env.NODE_ENV === "production"
        ? "http://15.165.196.57"
        : "http://localhost:3065";

const frontUrl = (process.env.NODE_ENV = "production"
    ? "http://15.165.132.128"
    : "http://localhost:3060");

export { backUrl, frontUrl };
