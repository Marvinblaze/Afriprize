export const endpoints = {
    // Onboarding
    login: 'auth/login',
    signin: 'auth/signup',
    verify: 'auth/verification',
    logout: 'logout',

    //profile
    profile: 'user/profile',
    shipping: 'user/saveshipping',
    reset: 'user/resetpassword',
    delete: 'user/delete',
    image: 'user/profile/picture',


    //products

    recommend: 'products/recommended',
    list: 'products/list',
    listsingle: 'products/list/:id',



    //orders
    listorder: 'orders/list',
    saveorder: 'orders/save',


    //
    banks:'transaction/banks',
    fundwallet: 'user/wallet/fund',
    verifyaccount: 'transaction/verifyaccount'
  };
  