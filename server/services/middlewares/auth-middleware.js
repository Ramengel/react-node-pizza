const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");

exports.checkLogin = [
    check("email", "Incorrect email")
        .isEmail()
        .normalizeEmail(),

    check("password", "Min length 6").isLength({
        min: 6
    }),
    async (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(401).json({
                errors: errors.array(),
                message: "Wrong data for login"
            });
        }

        next();
    }
]

exports.checkOrder = async (req, res, next) => {
    try {
      const token = req.headers.authorization;
  
      if (!token) {
        req.user = false;
        next();
        return
      }
  
      await jwt.verify(token, config.get("jwtSecret"), async (err, decoded) => {
        if (err) {
            req.user = false;
            next();
            return
        }

        req.user = decoded;
        req.token = token;

        next();
        return
      });
    } catch (e) {
        req.user = false;
        next();
        return
    }
};

exports.checkToken = async (req, res, next) => {
    try {
      const token = req.headers.authorization;
  
      if (!token) return res.status(401).json({ message: "Not authorized" });
  
      await jwt.verify(token, config.get("jwtSecret"), async (err, decoded) => {
        if (err) {
          res.status(401).json({
            message: "Not authorized",
            error: {
              name: "TokenExpiredError",
              message: "jwt expired",
              expiredAt: decoded.exp
            }
          });
        }

        req.user = decoded;
        req.token = token;

        next();
      });
    } catch (e) {
      res.status(401).json({ message: "Not authorized" });
    }
};
  
exports.checkRegistration = [
    check("email", "Incorrect email")
        .isEmail()
        .normalizeEmail(),

    check("password", "Min length 6").isLength({
        min: 6
    }),
    async (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(401).json({
                errors: errors.array(),
                message: "Wrong data for registration"
            });
        }

        next();
    }
]