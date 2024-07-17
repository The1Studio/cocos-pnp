export const LANDSCAPE_META = `<meta name="ad.orientation" content="landscape"><meta name="ad.size" content="width=480,height=320">`
export const PORTRAIT_META = `<meta name="ad.orientation" content="portrait"><meta name="ad.size" content="width=320,height=480">`

export const AD_SDK_SCRIPT = `<script type="text/javascript" src="https://tpc.googlesyndication.com/pagead/gadgets/html5/api/exitapi.js"></script>`

export const SDK_EXIT_A_TAG = `<script>window.addEventListener('gameStatusChanged',(event)=>{const isWinning=event.detail.isWinning;if(isWinning){window.ExitApi.exit()}else{console.log("The player is not winning yet.")}});</script>`
