import { FC } from "react";
import { createUseStyles } from "react-jss";
import { COLORS } from "../../utils/colors";
import Header from "../../Compounds/Header/Header";
import TitleSection from "./TitleSection/TitleSection";
import background from "../../assets/images/background.jpeg"
import ProductCartSection from "./ProductCartSection/ProductCartSection";
import OurProduct from "./OurProducts/OurProduts";
import InviteDesigner from "./InviteDesigners/InviteDesigners";
import Order from "./Order/Order";
import Footer from "../../Compounds/Footer/Footer";

const useStyles = createUseStyles({
    main: {
        backgroundColor: COLORS.brown.basic
    },
    box: {
        width: "1440px",
        marginLeft: "auto",
        marginRight: "auto",
        position: "relative"
    },
    secondPage: {
        backgroundImage: `url(${background})`,
        backgroundSize: "100% 100%",
    }
});

const MainPage: FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.main}>
            <div className={classes.box}>
                <Header />
                <TitleSection />
                <div className={classes.secondPage}>
                    <ProductCartSection />
                    <OurProduct />
                    <InviteDesigner />
                    <Order />
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default MainPage