const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index')

const router = express.Router();

// form #1 to handle promise (async / await)
router.get('/', async (req, res) => {
  try {
    const listUser = await Controller.list()
    response.success(req, res, listUser, 200)
  } catch (err) {
    response.error(req, res, err, 500)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const listUser = await Controller.get(id)
    response.success(req, res, listUser, 200)
  } catch (err) {
    response.error(req, res, err, 404)
  }
})

router.post('/', async (req, res) => {
  try {
    const newUser = await Controller.insert(req.body)
    response.success(req, res, newUser, 200)
  } catch (err) {
    response.error(req, res, err, 404)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const userRemoved = await Controller.remove(id)
    response.success(req, res, userRemoved, 200)
  } catch (err) {
    response.error(req, res, err, 404)
  }
})

module.exports = router;
