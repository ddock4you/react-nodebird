module.exports = (sequelize, DataTypes) => {
    const Hashtag = sequelize.define(
        "Hashtag",
        {
            name: {
                type: DataTypes.STRING(20),
                allowNull: false
            }
        },
        {
            charset: "utf8mb4", // 한글, 이모티콘
            collate: "utf8mb4_general_ci"
        }
    );
    // 다대 다 관계엔 해당 관계 사이에 테이블이 생김
    Hashtag.associate = db => {
        db.Hashtag.belongsToMany(db.Post, { through: "PostHashTag" });
    };

    return Hashtag;
};
