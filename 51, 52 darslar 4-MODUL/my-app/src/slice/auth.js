import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false, //serverga so'rov yuborilganda ishleydi//boshlang'ich holati false
    loggedIn: false, //user ro'yhatda bormi yo'qmi dasturga kirganmi kirmaganmi?//boshlang'ich holati false
    user: null, //yani foydalanuvchini malumotlari //boshlang'ich holati null
}; //bu boshlang'ich qiymatlar createSlice funksyasi yaratgan authSlice funksiyasida namedan keyin chaqirilgan birinchi name yozlishini sababi bu nami huddi reduser funksiyasi nomiday gap chaqirib ishlatish uchun kerak

export const authSlice = createSlice({
    // createSlice ikkita parametr qabul qiladi birinchisi nomi ikkinchisi boshlang'ich qiymat huddi statelar kabi boshlang'ich qiymat bu holatda tashqarida yozilgan (initialState)

    name: "auth", //nomi
    initialState, //boshlang'ich qiymati
    reducers: {
        //LOGIN bu login.jsx uchin

        loginUserStart: (state) => {
            //bu state boshlang'ich qiymat yani stateni isloading qiymatini true qildik boshlang'ich qiymati esa aslida false edi yani bu stateda hamma boshlang'ich qiymatlar bo'ladi va bu qiymatlarni birini o'zgartirish yoki ishlov berish kerak bo'lsa shu satatedan keyin nuqta qo'yilganda boshlan'ich qiymatlar chiaqadi va ichidan keraklisini tanlab quyidagi holatday ishlov berish mumkun
            state.isLoading = true;
        }, //user start bo'lganda yoki secces bo'ladi yoki failure bo'ladi shulardan birini chiqarish uchun

        loginUserSucces: (state) => {},
        loginUserFailure: (state) => {},

        //REGISTER bu register.jsx uchun
        registerUserStart: (state) => {
            state.isLoading = true;
        }, //user start bo'lganda yoki secces bo'ladi yoki failure bo'ladi shulardan birini chiqarish uchun

        registerUserSucces: (state) => {},
        registerUserFailure: (state) => {},
    },
});

export const { loginUserStart, registerUserStart } = authSlice.actions; //yani funksiylarni object qilib default export qilish yani reduserni bu reduxni ona funksiyasi buni ichida bir nechta bola funksiyalar bo'lishi mumkun shu sabab har bir funksiya default qilib export qilinishi kerak shunda app ichida hohlagan failga chaqirib ishlatish mumkun va reduserni o'ziniham alohida export qilib qo'yish kerak buni sababi bola funksiya export bo'lgan bilan ona funksiya export qilinmasa bola funksiya ishlamasligida//bu reduser funksiya appni ichidamas demak bu reduser va ichidagi bola funksiyalar qachonki appni componentlariga chaqilsa va o'sha appni componentlarida ishlatilganda faqat o'sha joyda render bo'ladi yani satate bo'lib componentma component yurmeydi shu sabab app tez ishlaydi bu seo saytni seo qilish uchunham juda muhum hissoblanadi
export default authSlice.reducer;

//// 12. dars JWT token// yani json web token nima bu jwt saytlarda ro'yhatdan o'tish uchun kerak yani userni malumotlarini saqlab turish uchun kerak
//"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo0NzQyMX0sImlhdCI6MTcyMjU1ODIyNCwiZXhwIjoxNzI3NzQyMjI0fQ.rEBQtEc4IgtodfClJv4Yb647Nkl66A7a9Ap2XtGXt70"//birinchi nuqtagacha Header ikkinchi nuqtagcah foydalanuvchi haqida Payload ohirida esa jwtni kalit so'zlari bu jwt har bir user uchun unikal bo'ladi yani hammaniki har hil fronted uchun tokenlar bilan userni malumotlari get qilib olinadi postman ilovasida va bu jwt token saytga kirgan userlani malumotini saqlab beradi va bu uzun jwt tokenni o'zi bilan userni malumotlarini tashqaridan olib bo'lmaydi(hackerlar)chunki saytda bu jvt tokenlarga kirish uchun mahfiy kalit so'z bo'ladi////////////////serverdan userni malumotlarini shu tokenlar bilan postmanda olsa bo'ladi masalan userni malumotlari saqlaneydigan serverdagi papkaga get so'rov jo'natamiz keyga authorization belgiladi valuega esa Token deb nom beriladi va tokenga userni tokeni olinadi va token yozuvini pastiga qo'yilib  get so'rov send qilinadi
//jwt backentda generate qilinadi yani registratsa uchun jwt token kerak
// 4-modul 12. dars JWT token darsida qilindi
