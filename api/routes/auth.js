import express from 'express';

import {
  login,
  logout,
  register,
} from '../controllers/auth.js';

// import register from "../controllers/auth.js"
// const express = require('express');
const router = express.Router()
// const {register, login, logout} = require('../controllers/auth.js');


router.post("/register",register)
router.post("/login",login)
router.post("/logout",logout)



export default router