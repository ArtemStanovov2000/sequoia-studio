import { FC } from "react";
import { createUseStyles } from "react-jss";
import { COLORS } from "../../utils/colors";
import { createTransparentColor } from "../../utils/createTransparentColor";
import Logo from "./Logo";
import TelegramLogo from "./TelegramLogo";
import VkLogo from "./VkLogo";
import WhatsAppLogo from "./WhatsAppLogo";

const useStyles = createUseStyles({
    footer: {
        height: "249px",
        width: "100%",
        zIndex: 1,
        position: "relative"
    },
    topShadow: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        zIndex: 1,
        background: `linear-gradient(${createTransparentColor(COLORS.brown.basic, 0.35)}, ${createTransparentColor(COLORS.brown.basic, 0.9)})`
    },
    box: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
        width: "1170px",
        position: "absolute",
        left: `calc((100% - 1170px)/2)`,
        zIndex: 2,
    },
    descBox: {
        marginBottom: "25px"
    },
    desc: {
        fontSize: "20px",
        lineHeight: "23px",
        fontFamily: "Gilroy",
        fontWeight: "300",
        color: COLORS.cream.basic,
        marginTop: "7px",
        marginBottom: "7px"
    },
    logoBox: {
        display: "flex",
        gap: "25px"
    }
});

const Footer: FC = () => {
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <div className={classes.topShadow}></div>
            <div className={classes.box}>
                <Logo />
                <div>
                    <div className={classes.descBox}>
                        <p className={classes.desc}>Режим работы: с 8:00 до 22:00</p>
                        <p className={classes.desc}>Адрес: Нижний Новгород, ул. Варварская, 32</p>
                        <p className={classes.desc}>E-mail: sequoia-info@mail.ru</p>
                        <p className={classes.desc}>Телефон: 8 (908) 154-97-55</p>
                    </div>
                    <p className={classes.desc}>© «Sequoiastudio.ru», копирование материалов запрещено.</p>
                </div>
                <div className={classes.logoBox}>
                    <VkLogo/>
                    <WhatsAppLogo/>
                    <TelegramLogo/>
                </div>
            </div>
        </footer>
    )
}

export default Footer