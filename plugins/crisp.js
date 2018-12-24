export default ({ app }) => {
    /*
    ** Only run on client-side and only in production mode
    */
    if (process.env.NODE_ENV !== 'production') return
    
    (function () { 
        window.$crisp = []
        window.CRISP_WEBSITE_ID = "ec666006-85ac-4674-9f3c-bfc86a953e60"
        const d = document
        const s = d.createElement("script")
        s.src = "https://client.crisp.chat/l.js"
        s.async = 1
        d.getElementsByTagName("head")[0].appendChild(s)
    })()
}