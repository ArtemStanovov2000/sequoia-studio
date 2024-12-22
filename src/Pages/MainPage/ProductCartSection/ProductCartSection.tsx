import { FC } from "react";
import { createUseStyles } from "react-jss";
import ProductCart from "./ProductCart/ProductCart";
import kitchen from "../../../assets/images/productCart/kitchen.jpeg"
import bedrooms from "../../../assets/images/productCart/bedrooms.jpeg"
import offices from "../../../assets/images/productCart/offices.jpeg"
import tables from "../../../assets/images/productCart/tables.jpeg"
import stairs from "../../../assets/images/productCart/stairs.jpeg"
import decor from "../../../assets/images/productCart/decor.jpeg"
import { createTransparentColor } from "../../../utils/createTransparentColor";
import { COLORS } from "../../../utils/colors";


const useStyles = createUseStyles({
    section: {
        display: "flex",
        justifyContent: "center",
        paddingTop: "130px",
        paddingBottom: "130px",
        position: "relative",
        height: "1380px"
    },
    productList: {
        margin: 0,
        padding: 0,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        width: "1170px",
        justifyContent: "space-between",
        rowGap: "16px",
        position: "absolute",
    },
    topShadow: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        zIndex: 1,
        background: `linear-gradient(${createTransparentColor(COLORS.brown.basic, 0.8)}, ${createTransparentColor(COLORS.brown.basic, 0.3)})`
    }
});

const ProductCartSection: FC = () => {
    const classes = useStyles()

    return (
        <section className={classes.section}>
            <ul className={classes.productList}>
                <ProductCart img={kitchen} label="Кухни" />
                <ProductCart img={bedrooms} label="Спальни" />
                <ProductCart img={offices} label="Кабинеты" />
                <ProductCart img={tables} label="Столы" />
                <ProductCart img={stairs} label="Лестницы" />
                <ProductCart img={decor} label="Декор" />
            </ul>
            <div className={classes.topShadow}></div>
        </section>
    )
}

export default ProductCartSection