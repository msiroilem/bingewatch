const { Review, Show, User, Sequelize } = require('../models')
const { Op } = require('sequelize')

const GetReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      include: [
        { model: Show },
        {
          model: User,

          attributes: {
            exclude: ['password_digest']
          }
        }
      ]
    })
    res.send(reviews)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

const GetAverageReviews = async (req, res) => {
  try {
    const id = req.params.show_id
    const average = await Review.findAll({
      attributes: [
        'show_id',
        [Sequelize.fn('AVG', Sequelize.col('rating')), 'average_rating']
      ],
      group: ['show_id'],
      where: { show_id: id }
    })
    res.send(average)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}
const GetReviewById = async (req, res) => {
  try {
    const id = req.params.review_id
    const review = await Review.findAll({
      where: { id: id },
      include: [
        {
          model: Show,
          as: 'show'
        },
        {
          model: User,
          as: 'user',
          attributes: {
            exclue: ['password_digest']
          }
        }
      ]
    })
    res.send(review)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

const GetReviewByTVDBId = async (req, res) => {
  try {
    const id = req.params.tvdb_id
    const review = await Review.findAll({
      include: [
        {
          model: Show,
          as: 'show',
          where: { tvdb_id: id }
        },
        {
          model: User,
          as: 'user',
          attributes: {
            exclude: ['password_digest']
          }
        }
      ]
    })
    res.send(review)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

const GetAllReviewsOneShow = async (req, res) => {
  try {
    const id = req.params.show_id
    const review = await Review.findAll({
      include: [
        { model: Show, as: 'show' },
        {
          model: User,
          as: 'user',
          attributes: { exclude: ['password_digest'] }
        }
      ],
      where: { show_id: id }
    })
    res.send(review)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

const GetAllReviewsOneUser = async (req, res) => {
  try {
    const id = req.params.user_id
    const review = await Review.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: { exclude: ['password_digest'] },
          where: { id: id }
        },
        { model: Show, as: 'show' }
      ]
    })
    res.send(review)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

const CreateReview = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.body.userId
      }
    })
    if (user) {
      const review = await Review.create({ ...req.body })
      return res.send(review)
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

const UpdateReview = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.body.userId
      }
    })
    if (user) {
      const review = await Review.update(
        { ...req.body },
        { where: { id: req.params.review_id }, returning: true }
      )
      return res.send(review)
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  }
}

const DeleteReview = async (req, res) => {
  try {
    await Review.destroy({ where: { id: req.params.review_id } })
    res.send({
      msg: 'Review deleted',
      payload: req.params.review_id,
      status: 'Ok'
    })
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

module.exports = {
  GetReviews,
  GetAverageReviews,
  GetReviewById,
  GetReviewByTVDBId,
  GetAllReviewsOneShow,
  GetAllReviewsOneUser,
  CreateReview,
  UpdateReview,
  DeleteReview
}
