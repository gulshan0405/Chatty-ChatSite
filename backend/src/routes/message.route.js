import express from "express"
import { protectRoute } from "../middleware/auth.middleware";
import { getMessages, getUserForSidebar } from "../controller/message.controller";

const router =express.Router();

router.get("/users",protectRoute,getUserForSidebar);
router.get("/:id",protectRoute,getMessages)
router.post("/send:id",protectRoute,sendMessage)
export default router;