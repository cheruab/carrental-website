"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewCarInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let NewCarInput = class NewCarInput {
};
exports.NewCarInput = NewCarInput;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], NewCarInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.Int),
    (0, class_validator_1.Max)(20000),
    (0, class_validator_1.Min)(1500),
    __metadata("design:type", Number)
], NewCarInput.prototype, "monthlyPrice", void 0);
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.Int),
    (0, class_validator_1.Max)(1000),
    (0, class_validator_1.Min)(10, { message: "Daily price can't be that low!" }),
    __metadata("design:type", Number)
], NewCarInput.prototype, "dailyPrice", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], NewCarInput.prototype, "mileage", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], NewCarInput.prototype, "gas", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], NewCarInput.prototype, "gearType", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], NewCarInput.prototype, "thumbnailUrl", void 0);
exports.NewCarInput = NewCarInput = __decorate([
    (0, graphql_1.InputType)()
], NewCarInput);
//# sourceMappingURL=new-car.input.js.map