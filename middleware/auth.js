const authenticateToken = (req, res, next) => {
    const accessToken = req.query.token;

    if (!accessToken) {
        return res.status(401).json({ message: 'Necesitas un token de acceso' });
    }

    if (accessToken !== 'psiCareToken') {
        return res.status(403).json({ message: 'Token de acceso inválido' });
    }

    next();
};

export default authenticateToken;