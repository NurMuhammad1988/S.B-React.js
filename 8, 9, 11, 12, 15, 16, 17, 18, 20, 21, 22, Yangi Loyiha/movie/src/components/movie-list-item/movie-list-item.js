// //Class component bilan qilingani
// import { Component } from "react";
// import "./movie-list-item.css";

// class MovieListItem extends Component {
//     constructor(props) {
//         super(props); //props bilan ishlaganda classda birinchi super constructor ochish kerak
//         this.state = { favorite: false, like: false }; //endi app filedadi datani hamma idisi false bo'ladi chunki default holati false bo'lib turipti lekin pastda
//     }

    // onFavorite = () => {
    //     // this.setState(prevState => ({
    //     //     favorite: !prevState.favorite
    //     // }))

    //     this.setState(({ favorite }) => ({
    //         //setstate, oldingi holati uchun
    //         favorite: !favorite,//yani agar onclick bo'lganda favorite classi amalda bo'lsa o'chir o'chiq bo'lsa yoqgin (toggeni eslsa ) ! undov shu manoda buyruq beradi 
    //     }));
    // };

    // onLike = () => {
    //     this.setState(({ like }) => ({
    //         like: !like,//yani agar onclick bo'lganda like classi amalda bo'lsa o'chir o'chiq bo'lsa yoqgin (toggeni eslsa ) ! undov shu manoda buyruq beradi 
    //     }));
    // };

//     render() {
//         const { name, viewers, onDelete, onToggleProp, favorite, like } =
//             this.props;
//         return (
//             <li
//                 className={`list-group-item d-flex justify-content-between ${
//                     favorite && "favorite"
//                 } ${like && "like"}`} //agar like true bo'lsa like classi qo'shiladi yani umumiy listga bosilganda qayeriga bosilganda? like classi bor joyga bosilganda like classi bor joy qayer?
// //             >
//                 {/* favorite bu holatda cssdagi style class va data serverda massiv ichida va movielistda map qilinib bu joyga jo'natilgan va distruptatsa bilan el qatori chaqirilgan va if elsni qisqartirib yozish bilan agar true bo'lsa favorite classini qo'sh deyildi shunda data massivda malumot true bo'lsa favorite classi qo'shiladi // interpalatsa bilan becetni ichida agar favorite classi true bo'lsa favorute classini qo'shgin deyildi>>>${ favorite && "favorite" } bu birinchi yo'li hissoblanadi  */}
//                 <span
//                     onClick={onToggleProp}
//                     className="list-group-item-label"
//                     data-toggle="like"
//                 >
//                     {name}
//                 </span>

//                 {/*  endi namelar dynamic tarzda movielist.js filedan kelepti stylelari bilan birga */}

//                 <input
//                     type="number"
//                     className="list-group-item-input"
//                     defaultValue={viewers}
//                     // endi viewerslar dynamic tarzda movielist.js filedan kelepti stylelari bilan birga
//                 />

//                 <div className="d-flex justify-content-center align-items-center">
//                     <button
//                         type="button"
//                         className="btn-cookie btn-sm"
//                         onClick={onToggleProp}
//                         data-toggle="favorite"
//                     >
//                         <i className="fas fa-cookie"></i>
//                     </button>

//                     <button
//                         type="button"
//                         className="btn-cookie btn-sm"
//                         onClick={onDelete}
//                     >
//                         {/* onDelete boshida app.jsdan kelepti va movileistga chaqirilib movielistitemga jo'natilepti bu movielistda bu ondeletni nima vazifa bajarilishi parametrida aytilgan yani datani itemlarini idilariga bosilganda bosilgan idni o'zini tanib udalit qilish */}
//                         <i className="fas fa-trash"></i>
//                     </button>

//                     <i className="fas fa-star"></i>
//                 </div>
//             </li>
//         );
//     }
// }
// export default MovieListItem;
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
//Oddiy arrow funsction bilan qilingani

import "./movie-list-item.css";

const MovieListItem = (props) => {
    const { name, viewers, onDelete, onToggleProp, favorite, like } = props;

    return (
        <li
            className={`list-group-item d-flex justify-content-between ${
                favorite && "favorite"
            } ${like && "like"}`} //agar like true bo'lsa like classi qo'shiladi yani umumiy listga bosilganda qayeriga bosilganda? like classi bor joyga bosilganda like classi bor joy qayer sapanni ichidagi ontogleprop ontoglepropda esa data atributlar map qilingan>>>data-toggle="like" va data-toggle="favorite"
        >
            {/* favorite bu holatda cssdagi style class va data serverda massiv ichida va movielistda map qilinib bu joyga jo'natilgan va distruptatsa bilan el qatori chaqirilgan va if elsni qisqartirib yozish bilan agar true bo'lsa favorite classini qo'sh deyildi shunda data massivda malumot true bo'lsa favorite classi qo'shiladi // interpalatsa bilan becetni ichida agar favorite classi true bo'lsa favorute classini qo'shgin deyildi>>>${ favorite && "favorite" } bu birinchi yo'li hissoblanadi  */}
            <span
                onClick={onToggleProp}
                className="list-group-item-label"
                data-toggle="like"
            >
                {name}
            </span>

            {/*  endi namelar dynamic tarzda movielist.js filedan kelepti stylelari bilan birga */}

            <input
                type="number"
                className="list-group-item-input"
                defaultValue={viewers}
                // endi viewerslar dynamic tarzda movielist.js filedan kelepti stylelari bilan birga
            />

            <div className="d-flex justify-content-center align-items-center">
                <button
                    type="button"
                    className="btn-cookie btn-sm"
                    onClick={onToggleProp}
                    data-toggle="favorite"
                >
                    <i className="fas fa-cookie"></i>
                </button>

                <button
                    type="button"
                    className="btn-cookie btn-sm"
                    onClick={onDelete}
                >
                    {/* onDelete boshida app.jsdan kelepti va movileistga chaqirilib movielistitemga jo'natilepti bu movielistda bu ondeletni nima vazifa bajarilishi parametrida aytilgan yani datani itemlarini idilariga bosilganda bosilgan idni o'zini tanib udalit qilish */}
                    <i className="fas fa-trash"></i>
                </button>

                <i className="fas fa-star"></i>
            </div>
        </li>
    );
};

export default MovieListItem;
