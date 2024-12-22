import { FC } from "react";
import { createUseStyles } from "react-jss";
import { COLORS } from "../../../../utils/colors";

type Props = {
    label: string,
    img: string
}

const ProductCart: FC<Props> = ({ label, img }) => {
    const useStyles = createUseStyles({
        cart: {
            height: "452px",
            width: "569px",
            listStyleType: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${img})`,
            backgroundSize: "100% 100%",
        },
        desc: {
            fontSize: "48px",
            lineHeight: "55px",
            fontFamily: "Gilroy",
            textTransform: "uppercase",
            color: COLORS.cream.basic,
            zIndex: 2
        }
    });

    const classes = useStyles()

    return (
        <li className={classes.cart}>
            <p className={classes.desc}>{label}</p>
        </li>
    )
}

export default ProductCart