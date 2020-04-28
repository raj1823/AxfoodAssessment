const apiURL="https://admin-stage.priskoll.occdev.axfood.se";
const security="axfood-security";
const tempProductScan="axfood-product-scan";
const baseUrl="axfood";


const apiConfig= {

    loginUserHandle:{
        //loginApi: '/${baseUrl}/${security}/$/login'
        loginApi: '/axfood/axfood-security/login/'
    }
}


export default {
    apiURL,apiConfig
}