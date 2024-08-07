//store papkadagi bu indexda reduxni configlari saqlanadi
import { configureStore } from "@reduxjs/toolkit"; //npm install @reduxjs/toolkit reduxdan shu command bilan chaqirildi
import someName from "../reducers/countSlice";//?????????????????bunga nomni farqi yo'q ekan default qilib export qilingani uchun bu joyda nima nom bilan bo'lsaham chaqirsa kelavorar ekan faqat distruptatsa qilib chaqirilib qo'yilmasa bo'ldi

export default configureStore({
    reducer: someName,//yani bu configureStore redux toolkidni kutubhonasidan chaqirilgan object hissoblanadi va buni ichida reduxni configlari saqlanadi masalan bu holatda reducer: object hissoblanadi va somenameni qabul qiladi va configureStore o'z ichidagi (node moduls) manga nomlaum funksiyalar bilan bu reducerda reducers/contSlicedan kelgan funksiyalarni ishlatib beradi
    devTools: process.env.NODE_ENV !== "production",//chrome uchun redux devtools canfugratsiyasi
});

//Reducer: Redux-da reduktor ilova va amalning joriy holatini argument sifatida qabul qiladigan va amal asosida yangi holatni qaytaradigan funksiyadir

// import { configureStore } from "@reduxjs/toolkit";
// import someName from "../reducers/countSlice";
// export default configureStore({
//     reducer: someName,
//     devTools: process.env.NODE_ENV !== "production",
// });
