import { useState } from "react";
import { logo } from "../constants";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { signUserFailure, signUserStart, signUserSucces } from "../slice/auth";
import AuthService from "../service/auth";

// saytdagi 10,11,13,14 darslarni qayta qayta qayta takrorla va commentlar!!!

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch(); //holatni yangilash va yangi holatni qaytarish uchun yani bu holatda loginUserStartni holatini qaytaradi bu react reduxda yozilgan funksiya
    const { isLoading } = useSelector((state) => state.auth); //isloading authda bitt a bo'lhani uchun pastdagi loading buttonlar bir hil ishlepti masalan loginga bosilsa registor buttonham loading bo'lib qolepti

    const registerHandler = async (e) => {
        e.preventDefault();
        dispatch(signUserStart()); //shu registerUserStart ishlaganda loginHandler chaqirilgan buttondan boshqa joy yangilanmasin//registerUserStart auth.jsda yozilgan redux funksiya shu sabab () chaqirilishi kerak
        const user = { username: name, email, password };//yani bu holatda username usestateni namesiga teng va bu email va passwordlar usestatedan kelepti yani boshlang'ich qiymatlari bo'sh va bunga user malumotlar yozib registerhandlerga click qilganda useRegister try bo'lib yani serverga malumot jo'natishga harakat qiladi va parametrida user nomli objectni olib boradi va slida bu user serverda yozib qo'yilgan userni ichidaga tushadigan yangi userlar papkasi axison buni string qilib serverga jo'natadi //username bilan usestatedagi name bir biriga tushmagani uchun username = name qilindi bu satatelaeni setlari inputlargasetstate qilib berilgan shu sabab input bu statelarni tanepti yani inputdagi o'zgarishlarni ushlab olepti

        try {
            const response = await AuthService.userRegister(user);
            console.log(response);
            console.log(user); //foydalanuvchi ro'yhatdan o'tganligini ko'rish uchun
            dispatch(signUserSucces(response.user)); //register actions
        } catch (error) {   
            console.log(error.response.data);
            dispatch(signUserFailure(error.response.data.errors)); //register actions//error.response.data signUserFailureni parametriga borib tushadi////yani get so'rov catchga tushganda response o'zgaruvchi ichida serverdan keletgan datani errors yani serverda yozilgan errors arrayni ichidagini ko'rsatadi
        }
    };

    return (
        <div className="text-center mt-5">
            <main className="form-signin w-25 m-auto">
                <form>
                    <img
                        className="mb-2"
                        src={logo}
                        alt="logo"
                        width="72"
                        height="60"
                    />
                    <h1 className="h3 mb-3 fw-normal">Please register</h1>

                    <Input
                        label={"Username"} //label
                        state={name} //value
                        setState={setName} //onChange e. target
                        // type default "text"
                    />

                    <Input
                        label={"Email address"} //label
                        type={"email"}
                        state={email} //value
                        setState={setEmail} //onChange e. target
                    />

                    <Input
                        label={"Password"} //label
                        type={"password"}
                        state={password} //value
                        setState={setPassword} //onChange e. target
                    />

                    <button
                        className="w-100 btn btn-primary mt-2"
                        disabled={isLoading} //buttonga onclick bo'lganda bu buttonni disabled qiladi yani o'chiradi qotiradi
                        onClick={registerHandler}
                        type="submit"
                    >
                        {isLoading ? "Loading..." : "Register"}
                        {/* agar isloading true bo'lsa yani user login qilgan bo'lsa Loading textini chiqar agar yokida isloading bo'sh bo'lsa yani hali user login qilmagan bo'lsa Register textini hciqar */}
                    </button>
                </form>
            </main>
        </div>
    );
};

export default Register;
