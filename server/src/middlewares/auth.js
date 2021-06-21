import passport from 'passport';
import { sign, verify } from 'jsonwebtoken';

const generateAuthToken = (userId) => `bearer ${sign({ userId }, process.env.JWT_SECRET)}`;

const generateToken = (userId) => sign({ userId }, process.env.JWT_SECRET);

const isAuthTokenRevoked = async (req, res, next) => {
  const authToken = req.headers.authorization;

  if (!authToken) return res.status(401).send('Unauthorized');

  next();
};

const authenticateToken = () => passport.authenticate('jwt', { session: false });

module.exports = {
  generateAuthToken,
  generateToken,
  isAuthTokenRevoked,
  authenticateToken,
};
