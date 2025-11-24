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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var db_js_1 = require("./db.js");
var app = (0, express_1.default)();
app.use(body_parser_1.default.json());
// CREATE
app.post("/api/events", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name_1, date, location_1, result, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name_1 = _a.name, date = _a.date, location_1 = _a.location;
                if (!name_1 || !date || !location_1) {
                    return [2 /*return*/, res.status(400).json({ error: "All fields are required" })];
                }
                return [4 /*yield*/, db_js_1.db.execute("INSERT INTO events (name, date, location) VALUES (?, ?, ?)", [name_1, date, location_1])];
            case 1:
                result = (_b.sent())[0];
                res.status(201).json({ message: "Event created", result: result });
                return [3 /*break*/, 3];
            case 2:
                err_1 = _b.sent();
                res.status(500).json({ error: err_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// READ
app.get("/api/events", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var rows, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db_js_1.db.execute("SELECT * FROM events")];
            case 1:
                rows = (_a.sent())[0];
                res.json(rows);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                res.status(500).json({ error: err_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// UPDATE
app.put("/api/events/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, name_2, date, location_2, result, err_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                id = req.params.id;
                _a = req.body, name_2 = _a.name, date = _a.date, location_2 = _a.location;
                return [4 /*yield*/, db_js_1.db.execute("UPDATE events SET name=?, date=?, location=? WHERE id=?", [name_2, date, location_2, id])];
            case 1:
                result = (_b.sent())[0];
                res.json({ message: "Event updated", result: result });
                return [3 /*break*/, 3];
            case 2:
                err_3 = _b.sent();
                res.status(500).json({ error: err_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// DELETE
app.delete("/api/events/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, db_js_1.db.execute("DELETE FROM events WHERE id=?", [id])];
            case 1:
                result = (_a.sent())[0];
                res.json({ message: "Event deleted", result: result });
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                res.status(500).json({ error: err_4.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.listen(3000, function () { return console.log("✅ Server running on port 3000"); });
