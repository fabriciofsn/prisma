"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homePage = void 0;
class Home {
    home(req, res) {
        return res.json({
            message: "Home Page",
        });
    }
}
exports.homePage = new Home();
