const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
  try {
    // Récupération du token depuis l'en-tête de la requête
    const token = req.header('Authorization').replace('Bearer ', '');

    // Décodage du token pour récupérer l'id de l'utilisateur
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded._id;

    // Vérification que l'utilisateur existe
    const user = await User.findOne({ _id: userId, 'tokens.token': token });

    if (!user) {
      throw new Error();
    }

    // Ajout de l'utilisateur à la requête
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Non autorisé à accéder à cette ressource' });
  }
};

module.exports = auth;
