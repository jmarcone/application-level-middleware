const secure = (req, res, next) => {
    const { query: {token} } = req;

    if (!token) 
        return res.status(403).send("No token found. You shall not pass!");
    next();
}

export default secure;
