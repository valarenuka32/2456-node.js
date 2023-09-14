const jwt = require("jsonwebtoken");
const config = require("../config/config");

const auth = () => async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return next(res.status(401).json({
                status: 401,
                message: "please authenticate!"
            }));
        }

        const decoded = jwt.verify(
            token.replace("bearer", ""),
        )
    } catch (error) {
        return next(new Error(error));
    }
};

module.exports = auth;