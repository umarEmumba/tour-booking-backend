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
// lib
// import cors from "cors";
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
// src
const bookings_1 = __importDefault(require("./routes/bookings"));
const tours_1 = __importDefault(require("./routes/tours"));
const app = (0, express_1.default)();
const port = 4000;
dotenv_1.default.config();
// app.use(cors());
app.use(body_parser_1.default.json({ limit: "30mb" }));
app.use(body_parser_1.default.urlencoded({ limit: "30mb", extended: true }));
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () { return res.send("Server working!"); }));
app.use("/bookings", bookings_1.default);
app.use("/tours", tours_1.default);
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
const CONNECTION_URL_DB = process.env.CONNECTION_URL || "";
mongoose_1.default
    .connect(CONNECTION_URL_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => app.listen(() => console.log(`Database connected`)))
    .catch((error) => console.log(error.message));
