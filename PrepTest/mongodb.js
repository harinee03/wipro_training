"use strict";
// CustomerModule.ts
// Run: tsc && node dist/CustomerModule.js
// MongoDB Connection + CRUD Operations with Error Handling
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
var mongodb_1 = require("mongodb");
// 🔹 MongoDB connection string (replace with your cluster)
var uri = "mongodb+srv://admin:12345@cluster0.dgy5mlj.mongodb.net/";
var client = new mongodb_1.MongoClient(uri);
function connectDB() {
    return __awaiter(this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client.connect()];
                case 1:
                    _a.sent();
                    console.log("✅ Connected to MongoDB");
                    return [2 /*return*/, client.db("EventDB").collection("customers")];
                case 2:
                    err_1 = _a.sent();
                    console.error("❌ DB connection failed:", err_1);
                    throw err_1;
                case 3: return [2 /*return*/];
            }
        });
    });
}
// 🔹 CREATE
function createCustomer(customer) {
    return __awaiter(this, void 0, void 0, function () {
        var collection, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!customer.name || !customer.email) {
                        console.error("⚠️ Invalid input: Name and Email are required.");
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, connectDB()];
                case 1:
                    collection = _a.sent();
                    return [4 /*yield*/, collection.insertOne(customer)];
                case 2:
                    result = _a.sent();
                    console.log("🟢 Customer added:", result.insertedId);
                    return [2 /*return*/];
            }
        });
    });
}
// 🔹 READ
function readCustomers() {
    return __awaiter(this, void 0, void 0, function () {
        var collection, customers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connectDB()];
                case 1:
                    collection = _a.sent();
                    return [4 /*yield*/, collection.find().toArray()];
                case 2:
                    customers = _a.sent();
                    console.log("📋 Customers List:");
                    console.table(customers);
                    return [2 /*return*/];
            }
        });
    });
}
// 🔹 UPDATE
function updateCustomer(id, updatedData) {
    return __awaiter(this, void 0, void 0, function () {
        var collection, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connectDB()];
                case 1:
                    collection = _a.sent();
                    return [4 /*yield*/, collection.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: updatedData })];
                case 2:
                    result = _a.sent();
                    console.log(result.modifiedCount ? "🟡 Customer updated!" : "⚠️ No match found.");
                    return [2 /*return*/];
            }
        });
    });
}
// 🔹 DELETE
function deleteCustomer(id) {
    return __awaiter(this, void 0, void 0, function () {
        var collection, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connectDB()];
                case 1:
                    collection = _a.sent();
                    return [4 /*yield*/, collection.deleteOne({ _id: new mongodb_1.ObjectId(id) })];
                case 2:
                    result = _a.sent();
                    console.log(result.deletedCount ? "🔴 Customer deleted!" : "⚠️ No match found.");
                    return [2 /*return*/];
            }
        });
    });
}
// 🔹 MAIN EXECUTION (for demo)
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 6]);
                    return [4 /*yield*/, createCustomer({ name: "Harinee", email: "harinee@example.com", city: "Chennai" })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, readCustomers()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 3:
                    err_2 = _a.sent();
                    console.error("❌ Error:", err_2);
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, client.close()];
                case 5:
                    _a.sent();
                    console.log("🔒 DB connection closed");
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    });
}
main();
