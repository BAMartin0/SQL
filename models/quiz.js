//Quiz - we'll create a model that will have the following columns: an array of questions, score, the quiz will be tied to the user.

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Question = require('./models/question')

class Quiz extends Model{ }

Quiz.init(
  {
    // score: {
    //   type: DataTypes.INTEGER,
    // },
    id: 

    quiz_id

  },
    {
        hooks: {
            afterCreate: async (quiz, options) => {
                try {
                    const questions = await Question.findAll(
                        {
                            order: sequelize.random(),
                            limit: 10
                        }
                    )

                    if (questions.length < 10) {
                        throw new Error('not enough questions in the database')
                    }
                    await quiz.addQuestions(questions)
                    
                } catch (error) {
                    console.error(error);
                }
            }
        },
        
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "quiz",
  }
);