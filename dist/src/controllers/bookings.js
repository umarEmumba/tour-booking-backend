"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBooking = exports.getBooking = exports.addBooking = void 0;
const booking_1 = __importDefault(require("../models/booking"));
const addBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = req.body;
    const newBooking = new booking_1.default(booking);
    try {
        yield newBooking.save();
        res.status(201).json(newBooking);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
});
exports.addBooking = addBooking;
const getBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const booking = yield booking_1.default.find(req.query);
        res.json(booking);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.getBooking = getBooking;
const updateBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const booking = req.body;
    try {
        const updatedBooking = yield booking_1.default.findByIdAndUpdate(id, Object.assign(Object.assign({}, booking), { id }), { new: true });
        res.json(updatedBooking);
    }
    catch (error) {
        res.status(401).json({ message: error.message });
    }
});
exports.updateBooking = updateBooking;
