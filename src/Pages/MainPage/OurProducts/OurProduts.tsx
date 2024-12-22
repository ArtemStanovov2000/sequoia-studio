import { FC } from "react";
import { createUseStyles } from "react-jss";
import { createTransparentColor } from "../../../utils/createTransparentColor";
import { COLORS } from "../../../utils/colors";
import OurProductCart from "./OurProductCart/OurProductCart";
import fluffyCotton from "../../../assets/images/ourProduct/fluffyCotton.jpeg"
import interiorDesign from "../../../assets/images/ourProduct/interiorDesign.jpeg"
import modern from "../../../assets/images/ourProduct/modern.jpeg"
import rubberPlant from "../../../assets/images/ourProduct/rubberPlant.jpeg"
import viewModern from "../../../assets/images/ourProduct/viewModern.jpeg"
import woodenHouse from "../../../assets/images/ourProduct/woodenHouse.jpeg"
import SliderButton from "./SliderButton/SliderButton";

const useStyles = createUseStyles({
    section: {
        position: "relative",
        height: "841px"
    },
    contentBox: {
        position: "absolute",
        zIndex: 2,
        width: "1270px",
        left: `calc((100% - 1170px)/2)`,
    },
    title: {
        fontSize: "96px",
        lineHeight: "110px",
        fontFamily: "Gilroy",
        fontWeight: "300",
        marginTop: "0",
        marginBottom: "60px",
        textTransform: "uppercase",
        color: COLORS.cream.basic
    },
    ourProdutsListBox: {
        display: "flex",
        gap: "50px",
        alignItems: "center"
    },
    ourProdutsList: {
        display: "flex",
        margin: 0,
        padding: 0,
        gap: "20px"
    },
    button: {

    },
    topShadow: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        zIndex: 1,
        background: `linear-gradient(${createTransparentColor(COLORS.brown.basic, 0.3)}, ${createTransparentColor(COLORS.brown.basic, 0.9)})`
    }
});

const OurProduct: FC = () => {
    const classes = useStyles()

    return (
        <section className={classes.section}>
            <div className={classes.contentBox}>
                <h2 className={classes.title}>Наши работы</h2>
                <div className={classes.ourProdutsListBox}>
                    <ul className={classes.ourProdutsList}>
                        <OurProductCart img={fluffyCotton} />
                        <OurProductCart img={interiorDesign} />
                        <OurProductCart img={modern} />
                    </ul>
                    <SliderButton/>
                </div>
            </div>
            <div className={classes.topShadow}></div>
        </section>
    )
}

export default OurProduct