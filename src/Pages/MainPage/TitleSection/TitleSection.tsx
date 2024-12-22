import { FC } from "react";
import { createUseStyles } from "react-jss";
import room from "../../../assets/images/room.jpeg"
import { createTransparentColor } from "../../../utils/createTransparentColor";
import { COLORS } from "../../../utils/colors";
import Button from "../../../shared/Button/Button";
import AboutItem from "./AboutItem/AboutItem";

const useStyles = createUseStyles({
    section: {
        height: "961px",
        backgroundImage: `url(${room})`,
        backgroundSize: "100% 100%",
        position: "relative",
    },
    topShadow: {
        width: "100%",
        height: "683px",
        position: "absolute",
        top: "0",
        zIndex: 0,
        background: `linear-gradient(${createTransparentColor(COLORS.brown.basic, 0.85)}, ${createTransparentColor(COLORS.brown.basic, 0.3)})`
    },
    bottomShadow: {
        width: "100%",
        height: "278px",
        position: "absolute",
        bottom: "0",
        zIndex: 0,
        background: `linear-gradient(${createTransparentColor(COLORS.brown.basic, 0.3)}, ${createTransparentColor(COLORS.brown.basic, 0.8)})`
    },
    contentBlock: {
        paddingTop: "170px",
        zIndex: 1,
        position: "absolute",
        left: `calc((100% - 1170px)/2)`,
        width: "1170px"
    },
    title: {       
        fontSize: "128px",
        lineHeight: "158px",
        fontFamily: "Particle",
        margin: 0,
        fontWeight: "300",
        color: COLORS.cream.basic
    },
    desc: {       
        fontSize: "36px",
        lineHeight: "40px",
        fontFamily: "Gilroy",
        margin: "20px 0 60px 0",
        fontWeight: "300",
        color: COLORS.cream.basic
    },
    aboutList: {
        margin: 0,
        marginTop: "170px",
        padding: 0,
        display: "flex",
        gap: "40px"
    }
});

const TitleSection: FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.section}>
            <div className={classes.contentBlock}>
                <h1 className={classes.title}>Sequoia Studio</h1>
                <p className={classes.desc}>Создаем авторскую мебель по индивидуальному<br></br>дизайну и размеру из ценных пород древесины</p>
                <Button label={"Получить консультацию"}/>
                <ul className={classes.aboutList}>
                    <AboutItem label={"Натуральные материалы"}/>
                    <AboutItem label={"Любые идеи для интерьера"}/>
                    <AboutItem label={"Любые параметры изделий"}/>
                    <AboutItem label={"Большой опыт мастеров"}/>
                </ul>
            </div>
            <div className={classes.topShadow}></div>
            <div className={classes.bottomShadow}></div>
        </div>
    )
}

export default TitleSection