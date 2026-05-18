  import { Router } from "express";
  import { authToken } from "../middlewares/authMiddlewares";
  
  import {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    loginUser
  } from "../controllers/userController";

  const router = Router();

  router.post("/auth/login", loginUser);

  router.post("/", createUser);
  router.get("/", authToken, getUsers);
  router.get("/:id", authToken, getUserById);
  router.put("/:id", authToken, updateUser);
  router.delete("/:id", authToken, deleteUser);
  
  export default router;