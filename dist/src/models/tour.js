"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const tourSchema = new mongoose_1.default.Schema({
    userEmail: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    publicAddress: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    price: {
        type: String,
        required: true,
    },
    checkin: {
        type: String,
        required: false,
    },
    checkout: {
        type: String,
        required: false,
    },
    localizedCityName: {
        type: String,
        required: false,
    },
    listingName: {
        type: String,
        required: false,
    },
    listingGuestLabel: {
        type: String,
        required: false,
    },
    listingPreviewAmenityNames: [
        {
            type: String,
            required: false,
        },
    ],
    facilities: [{ type: String, required: false }],
    images: [{ type: String, required: false }],
});
const Tour = mongoose_1.default.model("Tour", tourSchema);
exports.default = Tour;
