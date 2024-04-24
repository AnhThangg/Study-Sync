const proposeIdeaModel = (sequelize, DataTypes) => {
    return sequelize.define(
        'proposeIdea',
        {
            ideaCode: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            ideaName: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            ideaDescription: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            ideaGoalSubject: {
                type: DataTypes.DATE,
                allowNull: false
            },
            ideaExpectedResearch: {
                type: DataTypes.STRING,
                allowNull: false
            },
            otherNotes: {
                type: DataTypes.STRING,
                allowNull: false
            },
            mentorCode: {
                type: DataTypes.STRING,
                allowNull: false
            },
            
        }
    )
}
module.exports = {
    proposeIdeaModel
}