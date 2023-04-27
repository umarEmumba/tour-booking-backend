"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tours_1 = require("../controllers/tours");
const router = express_1.default.Router();
router.post("/", tours_1.addTour);
router.get("/", tours_1.getTours);
router.delete("/:id", tours_1.deleteTour);
exports.default = router;
