import classes from "./Advantages.module.scss"
import {Cargo, Choose, DiscountMark, SuccessMark} from "@/assets/config";

export const Advantages = () => {

    return (
        <div className={classes.main}>
            <div className={classes.items}>
                <div className={classes.item}>
                    <div className={classes.icon}><SuccessMark/></div>
                    <div className={classes.text}>Гарантія 100% повернення
                        грошових коштів</div>
                </div>
                <div className={classes.item}>
                    <div className={classes.icon}><Cargo/></div>
                    <div className={classes.text}>Доставка по всьому світу
                        грошових коштів</div>
                </div>
                <div className={classes.item}>
                    <div className={classes.icon}><Choose/></div>
                    <div className={classes.text}>Можливість оформлення
                        замовлення без реєстрації.
                        грошових коштів</div>
                </div>
                <div className={classes.item}>
                    <div className={classes.icon}><DiscountMark/></div>
                    <div className={classes.text}>Знижки постійним
                        покупцям.
                        грошових коштів</div>
                </div>
            </div>
        </div>
    );
};
