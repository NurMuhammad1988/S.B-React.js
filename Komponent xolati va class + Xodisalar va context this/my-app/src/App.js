import "./App.css";
import { Component,Fragment } from "react";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            text: "Texts ?",
            age: " ",
        };
    }

    clickIncrement = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
        }));
    };

    clickDecrement = () => {
        this.setState((prevState) => ({
            counter: prevState.counter - 1,
        }));
    };

    clickRestart = () => {
        this.setState({
            counter: 0,
        });
    };

    changeHandler = (e) => {
        this.setState({
            age: e.target.value,
        });
    };

    render() {
        const { firstName, lastName, link } = this.props;
        const { age, counter, text } = this.state;
        return (
            <div className="w-100 mx-auto">
                <div className="border p-3 mt-5 ">
                    <h4 className="text-warning">
                        Mening ismim - {firstName}, sharifim - {lastName},
                        yoshim - {age}
                    </h4>

                    <a href={link}>Youtube kanalim</a>

                    <p className="text-danger">{text}</p>

                    <div className="mt-3">
                        <button
                            onClick={this.clickIncrement}
                            className="btn btn-success"
                        >
                            Increment +
                        </button>

                        <button
                            onClick={this.clickDecrement}
                            className="btn btn-danger mx-2"
                        >
                            Decrement -
                        </button>

                        <button
                            onClick={this.clickRestart}
                            className="btn btn-warning text-danger  "
                        >
                            Restart =0
                        </button>

                        <p className="text-warning mt-3">{counter}</p>
                    </div>

                    <form>
                        <span className="text-white mx-2 ">Yoshingiz</span>
                        <input
                            type="number"
                            className="bg-black border-0 text-danger form-control"
                            onChange={this.changeHandler}
                        />
                    </form>
                    
                </div>
            </div>
        );
    }
}

const App = () => {
    return (
        <Fragment>//divmas fragment ichiga yozilishi key berish uchun kerak fragment reactdan import qilinadi
            <User firstName="Nur" lastName="Yorov" link="youtube.com" />
            <User firstName="Nur2" lastName="Yorov2" link="youtube.com" />
        </Fragment>
    );
};

export default App;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////bu pastdagi asosiy commentli holati tepadagi esa kodni o'qish uchun komentsiz holati yani bu component holati va class va hodisalar va context this darsi

// import "./App.css";//css da hech narsa yo'q chunki bootstrapdan foydalanilgan bootstrap esa publik papkadagi asosiy html failda cdn.js sayti  linki orqali joylashtirilgan
// import { Component } from "react"; //bu degani yanni jsda classdan voris olish mumkun edi lekin reactda clas componentni reactdan import qilib olinadi chunki bu class component hissoblanadi

// ////reactda hech qanday elementni yoki o'zgaruvchini to'g'ridan to'g'ri o'zgartirib bo'lmaydi

// ////class componentlar reactda eskirgan hozirda asosan function componentlar ishlatiladi
// class User extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {////yani state holat yanin default holat bu ibjectligini sababi keyinchalik o'zgartirish uchun
//             //// state yani holat bu state reactda har doim object bo'ladi yani bu yerda oddiy objetc this.state yani aynan bu object ni o'zgartirish uchun this bilan o'zgaradi // yani reactda o'zgaruvchini o'zgartirish uchun state bilan object ko'rinishida ochib o'zgartirish mumkun
//             counter: 0,
//             text: "Texts ?",
//             age: " ",
//         };

//         // this.clickIncrement = this.clickIncrement.bind(this); ////bind bu metod hissoblanadi
//         //// this.clickIncrement=this.clickIncrement.bind(this)//yani bu clickIncrement ni chaqirishni birinchi yo'li shunday yozib clickIncrement ni metod sifatida ishlatish mumkun yani callback funksiyasis callback funksiyasiz yozilgani pastda turipti//lekin callback funksiyali ishlatgan yahshi chunki yangi standart 2022
//     }

//     // clickIncrement() {
//     //     //bu callback funksiyasiz ishlatilishi lekin callback funksiyali ishlatgan yahshi chunki yangi standart 2022
//     //     this.setState((prevState) => ({
//     //         counter: prevState.counter + 1,
//     //     }));
//     // }

//     clickIncrement = () => {
//         this.setState((prevState) => ({
//             //yani prevsateda counterni oldingi holati bor set qotgan taqdirdaham//prevState  metodi bu oldingi holati muhum bo'lgan holatlarda ishlatiladi yani raqamlarni o'tqizib yubormaydi serverdan malumot sekin kelgan paytdaham user tez bosgandaham malumotlarni o'tqizib yubormaydi
//             counter: prevState.counter + 1,
//         }));
//     };

//     clickDecrement = () => {
//         this.setState((prevState) => ({
//             ////setSatate faqatgina o'ziga manabu tarzda counter: prevState.counter - 1, buyurilgan narsa o'zgartiradi masalan coutnterni pastidagi textni o'zgartirmaydi
//             counter: prevState.counter - 1,
//         }));
//     };

//     clickRestart = () => {
//         this.setState({
//             //prevState endi bu yerda shart emas
//             counter: 0,
//         });
//     };

//     changeHandler = (e) => {
//         ////(e)yani bu event hamma inputlarda default holatda bor bo'ladi
//         ////console.log(e.target.value);////inputdagi qiymat yani value shunday tartibda olinadi
//         this.setState({
//             age: e.target.value,
//         });
//     };

//     render() {//bu javascript funksyalar jsxni ichiga yozilmaydi tashqarida yozilib jsxni ichiga chaqiriladi
//         //classda render metodi bilan jsxni render qilish kerak oddiy returnda ishlameydi
//         const { firstName, lastName, link } = this.props;
//         // console.log(this.props);

//         const { age, counter } = this.state; //yani shunday qilib distrubtatsa bilan age counterni this.state deb yozmasdan qisqartirib yozish mumkun va ko'plab joyda chaqirish mumkun

//         return (
//             <div className="w-100 mx-auto">
//                 <div className="border p-3 mt-5 ">
//                     <h4 className="text-warning">
//                         Mening ismim - {firstName}, sharifim - {lastName},
//                         yoshim - {age}
//                     </h4>
//                     <a href={link}>Youtube kanalim</a>
//                     <p className="text-danger">{this.state.text}</p>
//                     <div className="mt-3">
//                         <button
//                             onClick={this.clickIncrement} //onClick shunday yozilib chaqiriladi//
//                             className="btn btn-success"
//                         >
//                             Increment +
//                         </button>

//                         {/*
//                         <button
//                             onClick={()=>this.clickDecrement()}
//                             className="btn btn-danger mx-2"
//                         >
//                         //yani callback funksiyasiz shundayham ishlash mumkun bu ikkinchi yo'li
//                             Decrement -
//                         </button> */}

//                         <button
//                             onClick={this.clickDecrement}
//                             className="btn btn-danger mx-2"
//                         >
//                             Decrement -
//                         </button>

//                         <button
//                             onClick={this.clickRestart}
//                             className="btn btn-warning text-danger  "
//                         >
//                             Restart =0
//                         </button>
//                         <p className="text-warning mt-3">{counter}</p>
//                     </div>
//                     <form>
//                         <span className="text-white mx-2 ">Yoshingiz</span>
//                         <input
//                             type="number"
//                             className="bg-black border-0 text-danger form-control"
//                             onChange={this.changeHandler} //onChange shunday yozilib chaqiriladi//// yani onchange hodisa degani yani inputha malumot yozilganda qanday hodisa bo'lishi shu ochange
//                         />
//                     </form>
//                 </div>
//             </div>
//         );
//     }
// }

// const App = () => {
//     return (
//         <div>
//             <User firstName="Nur" lastName="Yorov" link="youtube.com" />

//             <User firstName="Nur2" lastName="Yorov2" link="youtube.com" />
//         </div>
//     );
// };

// export default App;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////bu shu darsni birinchi qismi yani component holati va class

// import "./App.css";
// import { Component } from "react";

// ////reactda hech qanday elementni yoki o'zgaruvchini to'g'ridan to'g'ri o'zgartirib bo'lmaydi

// ////class componentlar reactda eskirgan hozirda asosan function componentlar ishlatiladi
// class User extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             //// state yani holat bu state reactda har doim object bo'ladi yani bu yerda oddiy objetc this.state yani aynan bu object ni o'zgartirish uchun this bilan o'zgaradi // yani reactda o'zgaruvchini o'zgartirish uchun state bilan object ko'rinishida ochib o'zgartirish mumkun

//             counter: 10,
//         };
//     }

//     clickHandler = () => {
//         this.setState((prevState) => ({
//             counter: prevState.counter + 1,
//         }));
//     };

//     // clickHandler = () => {
//     //     this.setState({
//     //         counter: this.state.counter + 1,
//     //     });
//     // };

//     render() {
//         //classda render metodi bilan jsxni render qilish kerak
//         const { firstName, lastName, link } = this.props;
//         // console.log(this.props);
//         return (
//             <div className="w-50 mx-auto">
//                 <div className="border p-3 mt-5 ">
//                     <h4 className="text-warning">
//                         Mening ismim - {firstName}, sharifim - {lastName}
//                     </h4>
//                     <a href={link}>Youtube kanalim</a>
//                     <div className="mt-3">
//                         <button
//                             onClick={this.clickHandler}
//                             className="btn btn-success"
//                         >
//                             Click
//                         </button>
//                         <p className="text-warning mt-3">
//                             {this.state.counter}
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// const App = () => {
//     return (
//         <div>
//             <User firstName="Nur" lastName="Yorov" link="youtube.com" />

//             <User firstName="Nur2" lastName="Yorov2" link="youtube.com" />
//         </div>
//     );
// };

// export default App;
