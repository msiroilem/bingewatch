const { Show } = require('../models')

const GetAllShows = async (req, res) => {
  try {
    const show = await Show.findAll()
    res.send(show)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

const FindShow = async (req, res) => {
  try {
    const res = await Show.findAll({
      where: { tvdb_id: req.params.tvdb_id }
    })
    res.send(res)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

const FindShowById = async (req, res) => {
  try {
    const show = await Show.findOne({
      where: { id: req.params.show_id }
    })
    if (show) {
      return res.send(show)
    }
    return res.send({ msg: 'not found' })
  } catch (error) {
    return res.status(500).send({ msg: error })
  }
}

const FindShowByTVDBId = async (req, res) => {
  try {
    const show = await Show.findOne({
      where: { tvdb_id: req.params.tvdb_id }
    })
    if (show) {
      return res.send(show)
    }
    return res.send({ msg: 'not found' })
  } catch (error) {
    return res.status(500).send({ msg: error })
  }
}

const CreateShow = async (req, res) => {
  try {
    const show = await Show.create({ ...req.body })
    return res.send(show)
  } catch (error) {
    return res.status(409).send({ msg: 'already existing' })
  }
}

const DeleteShow = async (req, res) => {
  try {
    await Show.destroy({ where: { id: req.params.show_id } })
    res.send({ msg: 'Show deleted', payload: req.params.show_id, status: 'Ok' })
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

module.exports = {
  GetAllShows,
  FindShow,
  FindShowById,
  FindShowByTVDBId,
  CreateShow,
  DeleteShow
}
