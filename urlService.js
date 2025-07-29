import logger from
'./logging/loggerMiddleware';
let urlDatabase = {};
export const shortenUrl = (originalUrl) => {
    logger('Shorten URL attempt',{
        originalUrl
    });
    const shortId= Math.random().toString(36).substring(2, 8);
    urlDatabase[shortId] = {originalUrl,clicks: 0};
    logger('URL shortened',{
        shortId,
        originalUrl
    });
    return  {shortId};
};
export const getOriginalUrl = (shortId) => {
    logger('Get original URL attempt',{
        shortId
    });
    if (urlDatabase[shortId]) {
        urlDatabase[shortId].clicks+=1;    
        return
            urlDatabase[shortId].originalUrl;
    }
    return null;
};
export const getAnalytics=() => {
    logger('Get analytics');
    return urlDatabase
};