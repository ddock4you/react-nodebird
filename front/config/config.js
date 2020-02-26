const backUrl =
    process.env.NODE_ENV === "production"
        ? "http://15.165.196.57"
        : "http://localhost:3065";

export { backUrl };
