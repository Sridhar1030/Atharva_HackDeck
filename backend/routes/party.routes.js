import express from "express";
import { getAllParties, registerParty , voteForParty } from "../controllers/party.controller.js";

const router = express.Router();

router.post("/register", registerParty);
router.post('/vote/:partyId', voteForParty);
router.get('/',getAllParties)


export default router;
