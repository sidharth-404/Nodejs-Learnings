import express from 'express';
import * as userController from'../controller/userController';

const router=express.Router();

router.post( '/users',userController.createUser);
router.get('/users',userController.getAllUser);
router.get('/users/:id',userController.getByUserId);
router.put('/users/:id',userController.updateUser);
router.delete('/users/:id',userController.deleteUser);

export default router;
