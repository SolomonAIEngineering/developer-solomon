"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyBalanceChangeByUserSchema = void 0;
const zod_1 = require("zod");
exports.MonthlyBalanceChangeByUserSchema = zod_1.z.object({
    Month: zod_1.z.number().int(),
    UserId: zod_1.z.string().uuid(),
    BalanceChange: zod_1.z.number(),
    ProfileType: zod_1.z.string(),
});
