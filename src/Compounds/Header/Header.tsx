import { FC } from "react";
import { createUseStyles } from "react-jss";
import { COLORS } from "../../utils/colors";
import Logo from "./Logo/Logo";
import PagesLabel from "../../shared/PagesLabel/PagesLabel";
import { createTransparentColor } from "../../utils/createTransparentColor";

const useStyles = createUseStyles({
    header: {
        backgroundColor: createTransparentColor(COLORS.brown.basic, 0.7),
        height: "95px",
        position: "absolute",
        top: "0",
        width: "100%",
        zIndex: 10
    },
    box: {
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
        width: "1170px"
    },
    pagesLabelList: {
        display: "flex",
        margin: 0,
        padding: 0,
        height: "100%",
    }
});

const Header: FC = () => {
    const classes = useStyles()

    return (
        <header className={classes.header}>
            <div className={classes.box}>
                <Logo />
                <ul className={classes.pagesLabelList}>
                    <PagesLabel label="Категории" />
                    <PagesLabel label="Работы" />
                    <PagesLabel label="Дизайнерам" />
                    <PagesLabel label="Заказать" />
                </ul>
            </div>
        </header>
    )
}

export default Header