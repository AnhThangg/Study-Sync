const topicModel = (sequelize, DataTypes) =>{
    return sequelize.define(
        'topic',
        {
            topicCode: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            topicName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            topicDescription: {
                type: DataTypes.STRING,
                allowNull: true
            },
            topicGoalSubject: {
                type: DataTypes.STRING,
                allowNull: false
            },
            topicExpectedResearch: {
                type: DataTypes.STRING,
                allowNull: false
            },
            topicTech: {
                type: DataTypes.STRING,
                allowNull: true
            },
            topicStatus: {
                type: DataTypes.STRING,
                allowNull: false
            },
            topicDateStart: {
                type: DataTypes.DATE,
                allowNull: false
            },
            topicDateEnd: {
                type: DataTypes.DATE,
                allowNull: false
            },
            documentCode: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            facultyCode: {
                type: DataTypes.STRING,
                allowNull: false
            },
            teamCode: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            mentorCode: {
                type: DataTypes.STRING,
                allowNull: false
            },
            leader: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }
    )
}
module.exports = {
    topicModel
}