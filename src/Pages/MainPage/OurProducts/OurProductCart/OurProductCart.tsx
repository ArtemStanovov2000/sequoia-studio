import { FC } from "react";
import { createUseStyles } from "react-jss";

type Props = {
    img: string
}

const OurProductCart: FC<Props> = ({img}) => {
    const useStyles = createUseStyles({
        cart: {
            height: "535px",
            width: "370px",
            listStyleType: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${img})`,
            backgroundSize: "100% 100%",
        },
    });

    const classes = useStyles()

    return (
        <li className={classes.cart}></li>
    )
}

export default OurProductCart