export const endpoints = {
    // Onboarding
    login: 'auth/login',
    signin: 'auth/signup',
    verify: 'auth/verification',
    forgetpassword: 'auth/resetpassword',
    updatepassword:'auth/resetpassword',

    //profile
    profile: 'user/profile',
    shipping: 'user/saveshipping',
    reset: 'user/resetpassword',
    delete: 'user/delete',
    image: 'user/profile/picture',


    //products

    recommend: 'products/recommended',
    list: 'products/list',
    listsingle: 'products/list/b6836828-0366-4961-af8f-8008664d73f8',


    //orders
    listorder: 'orders/user/list',
    saveorder: 'orders/save',
    trackorder: 'orders/track',


    //
    banks:'transaction/banks',
    fundwallet: 'user/wallet/fund',
    verifyaccount: 'transaction/verifyaccount',
    createaccount: 'transaction/createtransfer',
    transactions: 'transaction/list',
    fastselling: 'raffle/sellingfast',
    



    //raffles
    listraffles: 'raffle/list',

    listads: 'raffle/ad/list'
  };
  