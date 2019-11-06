module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {  // 테이블명은 users
        nickname: {
            type: DataTypes.STRING(20), // 20글자 이하
            allowNull: false,  // 필수 (true면 선택)
        },
        userId: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true, // 고유한 값
        },
        password: {
            type: DataTypes.STRING(100), // 100글자 이하
            allowNull: false,
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci', // 한글이 저장됨
    });

    User.associate = (db) => {
        db.User.hasMany(db.Post, { as: 'Posts' });
        db.User.hasMany(db.Comment);
        db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' });
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers' });
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings' });  // through 가 중간 테이블명 , as 는 가져오고싶은 것들..
    };

    return User;
};