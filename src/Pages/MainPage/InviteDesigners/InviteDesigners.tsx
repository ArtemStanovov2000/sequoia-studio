import { FC } from "react";
import { createUseStyles } from "react-jss";
import decorativeVase from "../../../assets/images/decorativeVase.jpeg"
import { createTransparentColor } from "../../../utils/createTransparentColor";
import { COLORS } from "../../../utils/colors";

const useStyles = createUseStyles({
    section: {
        height: "960px",
        backgroundImage: `url(${decorativeVase})`,
        backgroundSize: "100% 100%",
        position: "relative",
    },
    topShadow: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        zIndex: 1,
        background: `linear-gradient(${createTransparentColor(COLORS.brown.basic, 0.9)}, ${createTransparentColor(COLORS.brown.basic, 0.5)})`
    },
    box: {
        position: "absolute",
        zIndex: 2,
        width: "1170px",
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
    advantageList: {
        margin: 0,
        padding: 0,
        display: "flex"
    },
    advantage: {
        listStyleType: "none",
        fontSize: "20px",
        lineHeight: "23px",
        fontFamily: "Gilroy",
        fontWeight: "300",
        color: COLORS.cream.basic,
        paddingLeft: "15px",
        paddingTop: "10px",
        paddingBottom: "10px",
        width: "370px",
        borderLeft: `1px solid ${COLORS.cream.basic}`
    }
});

const InviteDesigner: FC = () => {
    const classes = useStyles()

    return (
        <section className={classes.section}>
            <div className={classes.topShadow}></div>
            <div className={classes.box}>
                <h2 className={classes.title}>Приглашаем дизайнеров</h2>
                <ul className={classes.advantageList}>
                    <li className={classes.advantage}>Мы изготовим мебель и детали<br></br>интерьера по вашим эскизами<br></br>или фото в оговоренные сроки</li>
                    <li className={classes.advantage}>Наш многолетний опыт<br></br>гарантирует высокое качество<br></br>и соответствие вашему замыслу</li>
                    <li className={classes.advantage}>Для обсуждения<br></br>сотрудничества свяжитесь<br></br>с нами по контактам на сайте</li>
                </ul>
            </div>
        </section>
    )
}

export default InviteDesigner