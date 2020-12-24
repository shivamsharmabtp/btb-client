module.exports = {
    BASE_PATH : '/btb/api',
    getImgFromThumbnail : (thumbnails, size) => {
        let pics;
        if(thumbnails && thumbnails.length){
            pics = thumbnails[0];
        }else{
            pics = thumbnails
        }
        if(size === 'min'){
            return pics.default.url
        }else if(size === 'medium'){
            let pic = pics.medium;
            if(pic)
                return pic.url;
            else{
                pic = pics.standard;
                return pic.url
            }
        }
        
    },
    linkify : (text) => {
        var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        return text.replace(urlRegex, function(url) {
            let shortUrl = url;
            if(shortUrl.length > 35)
                shortUrl = url.substring(0, 35) + '...';
            return '<a style="color:purple" href="' + url + '">' + shortUrl + '</a>';
        });
    }
}