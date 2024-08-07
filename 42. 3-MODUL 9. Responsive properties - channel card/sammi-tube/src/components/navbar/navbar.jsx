import { Stack, Box } from "@mui/material";
import { logo } from "../../constants";
// import { colors } from "../../constants/colors";// ko'zim uchun qilindi kursdan keyin bu background: colors.primary, stleni qaytadan yoqib qo'yish keral!!!!!!!!!!!!!!!!!!!!!
import { Link } from "react-router-dom";
import { SearchBar } from "../";

const Navbar = () => {
    return (
        <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            p={2}
            sx={{
                position: "sticky",
                top: 0,
                zIndex: 999,
                // background: colors.primary,
                // ko'zim uchun qilindi kursdan keyin bu background: colors.primary, stleni qaytadan yoqib qo'yish keral!!!!!!!!!!!!!!!!!!!!!
            }}
        >
            <Link to={"/"}>
                <img src={logo} alt="logo" height={30} />
            </Link>
            <SearchBar />
            <Box />
        </Stack>
    );
};

export default Navbar;
