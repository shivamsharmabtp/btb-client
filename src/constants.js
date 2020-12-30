module.exports = {
    BASE_PATH : '/btb/api',
    getImgFromThumbnail : (thumbnails, size) => {
        let pics, url = 'https://i.ytimg.com/vi/mHO3Bspyxqo/mqdefault.jpg';
        if(thumbnails && thumbnails.length){
            pics = thumbnails[0];
        }else{
            pics = thumbnails
        }
        if(pics){
            if(size === 'min' && pics.default){
                url = pics.default.url
            }else if(size === 'medium'){
                if(pics.medium)
                    url = pics.medium.url;
                else if(pics.standard){
                    url = pics.standard.url;
                }
            }
        }

        return url;        
    },
    linkify : (text) => {
        var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        return text.replace(urlRegex, function(url) {
            let shortUrl = url;
            if(shortUrl.length > 35)
                shortUrl = url.substring(0, 35) + '...';
            return '<a style="color:##1a0dab" href="' + url + '">' + shortUrl + '</a>';
        });
    }
}