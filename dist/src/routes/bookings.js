"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookings_1 = require("../controllers/bookings");
const router = express_1.default.Router();
router.post("/", bookings_1.addBooking);
router.patch("/:id", bookings_1.updateBooking);
router.get("/", bookings_1.getBooking);
exports.default = router;
