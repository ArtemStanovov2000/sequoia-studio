import { FC } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    button: {
        width: "50px",
        height: "50px",
        cursor: "pointer"
    }
});

const SliderButton: FC = () => {
    const classes = useStyles()

    return (
        <svg className={classes.button} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="24.5" transform="rotate(-180 25 25)" stroke="#EBE2DA" />
            <path d="M21.3401 13.2398L20.2234 14.4421C20.0743 14.6023 20 14.7869 20 14.9955C20 15.2037 20.0743 15.3881 20.2234 15.5483L29.0017 24.9999L20.2237 34.451C20.0746 34.6113 20.0002 34.7957 20.0002 35.0041C20.0002 35.2126 20.0746 35.3971 20.2237 35.5573L21.3404 36.7594C21.4892 36.92 21.6605 37 21.8542 37C22.0477 37 22.219 36.9197 22.3678 36.7594L32.7767 25.553C32.9256 25.3928 33 25.2083 33 24.9999C33 24.7915 32.9256 24.6073 32.7767 24.4471L22.3678 13.2398C22.2189 13.0796 22.0476 13 21.8542 13C21.6606 13 21.4892 13.0796 21.3401 13.2398Z" fill="#EBE2DA" />
        </svg>
    )
}

export default SliderButton