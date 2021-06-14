const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index')

const router = express.Router();

router.get('/', list)
router.get('/:id', get)
router.post('/', insert)
router.put('/', insert)
router.delete('/:id', remove)

// form #1 to handle promise (async / await)
async function list(req, res) {
  try {
    const listUser = await Controller.list()
    response.success(req, res, listUser, 200)
  } catch (err) {
    response.error(req, res, err, 500)
  }
}

async function get(req, res) {
  try {
    const id = parseInt(req.params.id)
    const listUser = await Controller.get(id)
    response.success(req, res, listUser, 200)
  } catch (err) {
    response.error(req, res, err, 404)
  }
}

async function insert(req, res) {
  try {
    const newUser = await Controller.insert(req.body)
    response.success(req, res, newUser, 200)
  } catch (err) {
    response.error(req, res, err, 404)
  }
}

async function remove(req, res) {
  try {
    const id = parseInt(req.params.id)
    const userRemoved = await Controller.remove(id)
    response.success(req, res, userRemoved, 200)
  } catch (err) {
    response.error(req, res, err, 404)
  }
}

module.exports = router;
