import { FC } from "react";
import { createUseStyles } from "react-jss";
import { COLORS } from "../../utils/colors";

const useStyles = createUseStyles({
    pagesLabelItem: {
        listStyleType: "none",
        height: "100%",
    },
    pagesLabel: {
        fontSize: "20px",
        lineHeight: "23px",
        color: COLORS.cream.basic,
        display: "flex",
        alignItems: "center",
        height: "100%",
        fontFamily: "Gilroy",
        paddingLeft: "50px",
        paddingRight: "50px",
        cursor: "pointer"
    },
});

type Props = {
    label: string
}

const PagesLabel: FC<Props> = ({ label }) => {
    const classes = useStyles()

    return (
        <li className={classes.pagesLabelItem}>
            <a className={classes.pagesLabel}>{label}</a>
        </li>
    )
}

export default PagesLabel