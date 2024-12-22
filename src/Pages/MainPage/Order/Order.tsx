import { FC } from "react";
import { createUseStyles } from "react-jss";
import { createTransparentColor } from "../../../utils/createTransparentColor";
import { COLORS } from "../../../utils/colors";
import Button from "../../../shared/Button/Button";

const useStyles = createUseStyles({
    section: {
        height: "777px",
        position: "relative",
    },
    topShadow: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        zIndex: 1,
        background: `linear-gradient(${createTransparentColor(COLORS.brown.basic, 0.9)}, ${createTransparentColor(COLORS.brown.basic, 0.35)})`
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
        marginTop: "120px",
        marginBottom: "60px",
        textTransform: "uppercase",
        color: COLORS.cream.basic
    },
    inputBox: {
        display: "grid",
        width: "570px",
        gap: "15px",
        marginBottom: "60px"
    },
    input: {
        fontSize: "20px",
        lineHeight: "23px",
        fontFamily: "Gilroy",
        color: COLORS.cream.basic,
        backgroundColor: "inherit",
        border: "none",
        borderBottom: `1px solid ${COLORS.cream.basic}`,
        padding: "10px",
        "&:focus": {
            outline: "none"
        }
    }
});

const Order: FC = () => {
    const classes = useStyles()

    return (
        <section className={classes.section}>
             <div className={classes.topShadow}></div>
             <div className={classes.box}>
                <h2 className={classes.title}>Хотите сделать заказ?</h2>
                <div className={classes.inputBox}>
                    <input className={classes.input} placeholder="Ф.И.О."/>
                    <input className={classes.input} type="phone" placeholder="Телефон"/>
                    <input className={classes.input} placeholder="E-mail"/>
                </div>
                <Button label={"Получить консультацию"}/>
             </div>
        </section>
    )
}

export default Order