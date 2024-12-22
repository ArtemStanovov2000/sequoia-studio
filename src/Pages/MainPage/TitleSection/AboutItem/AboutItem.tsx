import { FC } from "react";
import { createUseStyles } from "react-jss";
import { COLORS } from "../../../../utils/colors";

const useStyles = createUseStyles({
    about: {
        listStyleType: "none",
        color: COLORS.cream.basic,
        fontFamily: "Gilroy",
        fontSize: "20px",
        lineHeight: "23x",
        borderLeft: `1px solid ${COLORS.cream.basic}`,
        width: "230px",
        padding: "15px 0 15px 20px",
        textWrap: "wrap",
        flexShrink: "0"
    },
});

type Props = {
    label: string
}

const AboutItem: FC<Props> = ({label}) => {
    const classes = useStyles()

    return (
        <li className={classes.about}>{label}</li>
    )
}

export default AboutItem