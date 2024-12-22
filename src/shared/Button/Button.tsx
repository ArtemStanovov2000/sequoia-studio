import { FC } from "react";
import { createUseStyles } from "react-jss";
import { COLORS } from "../../utils/colors";

const useStyles = createUseStyles({
    button: {
        backgroundColor: COLORS.cream.basic,
        fontSize: "20px",
        lineHeight: "23x",
        fontFamily: "Gilroy",
        color: COLORS.brown.basic,
        padding: "20px 50px",
        border: "none",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "inherit",
            color: COLORS.cream.basic,
            border: `1px solid ${COLORS.cream.basic}`,
            padding: "19px 49px",
        },
        "&:active": {
            backgroundColor: COLORS.cream.basic,
            color: COLORS.brown.basic,
            padding: "20px 50px",
            border: "none",
        }
    },
});

type Props = {
    label: string
}

const Button: FC<Props> = ({ label }) => {
    const classes = useStyles()

    return (
        <button className={classes.button}>{label}</button>
    )
}

export default Button