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
exports.deleteTour = exports.getTours = exports.addTour = void 0;
const tour_1 = __importDefault(require("../models/tour"));
const addTour = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tour = req.body;
    const newTour = new tour_1.default(tour);
    try {
        yield newTour.save();
        res.status(201).json(newTour);
    }
    catch (error) {
        res.status(409).json({ meesage: error.meesage });
    }
});
exports.addTour = addTour;
const getTours = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tours = yield tour_1.default.find(req.query);
        res.status(200).json(tours);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.getTours = getTours;
const deleteTour = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield tour_1.default.findByIdAndRemove(id);
        res.json({ message: "Tour deleted successfully!" });
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.deleteTour = deleteTour;
