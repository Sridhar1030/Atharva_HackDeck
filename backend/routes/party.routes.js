import express from "express";
import { registerParty , voteForParty } from "../controllers/party.controller.js";

const router = express.Router();

router.post("/register", registerParty);
router.post('/vote/:partyId', voteForParty);


export default router;
