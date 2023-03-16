import {main, items, item, icon, text} from "./Advantages.module.scss"
import {Cargo, Choose, DiscountMark, SuccessMark} from "@/assets/config";

export const Advantages = () => {

    return (
        <div className={main}>
            <div className={items}>
                <div className={item}>
                    <div className={icon}><SuccessMark/></div>
                    <div className={text}>Гарантія 100% повернення
                        грошових коштів</div>
                </div>
                <div className={item}>
                    <div className={icon}><Cargo/></div>
                    <div className={text}>Доставка по всьому світу
                        грошових коштів</div>
                </div>
                <div className={item}>
                    <div className={icon}><Choose/></div>
                    <div className={text}>Можливість оформлення
                        замовлення без реєстрації.
                        грошових коштів</div>
                </div>
                <div className={item}>
                    <div className={icon}><DiscountMark/></div>
                    <div className={text}>Знижки постійним
                        покупцям.
                        грошових коштів</div>
                </div>
            </div>
        </div>
    );
};
