"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bookingSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: String,
        required: true,
    },
    numOfAdults: {
        type: String,
        required: false,
    },
    numOfChilds: {
        type: String,
        required: false,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    tourId: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
});
const Booking = mongoose_1.default.model("Booking", bookingSchema);
exports.default = Booking;
