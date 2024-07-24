import { Stack } from "@mui/material";
import { category } from "../../constants";
import { colors } from "../../constants/colors";

const Category = ({ selectedCategoryHandler, selectedCategory }) => {
    return (
        <Stack direction={"row"} sx={{ margin: "auto", display: "flex" }}>
            {category.map((item) => (
                <button
                    key={item.name}
                    className="category-btn"
                    style={{
                        borderRadius: "0",
                        background:
                            item.name === selectedCategory && colors.secondary,

                        color: item.name === selectedCategory && "#fff",
                    }}
                    onClick={() => selectedCategoryHandler(item.name)}
                >
                    <span
                        style={{
                            color:
                                item.name === selectedCategory
                                    ? "#fff"
                                    : colors.secondary,
                            marginRight: "15px",
                        }}
                    >
                        {item.icon}
                    </span>

                    <span style={{ opacity: "1", marginRight: "20px" }}>
                        {item.name}
                    </span>
                </button>
            ))}
        </Stack>
    );
};

export default Category;