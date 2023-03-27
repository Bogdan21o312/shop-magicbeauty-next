import classes from "@/app/layouts/LayoutMain/Hedaer/HedaerCenter/HeaderCenterDesktop/HeaderCenterDesktop.module.scss";
import {IconCart} from "@/assets/config";
import {useState} from "react";
import dynamic from "next/dynamic";
import {Loader} from "@/app/UI";
const ModalWindow = dynamic(() => import('@/app/UI').then((mod) => mod.ModalWindow), {
    ssr: false,
    loading: () => <Loader/>,
})
export const Cart = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    return (
        <>
            {isModalVisible && (
                <ModalWindow title={'title'} visible={isModalVisible} setVisible={setIsModalVisible}>
                    <p>This is the content of the modal window.</p>
                </ModalWindow>
            )}
            <button onClick={showModal} className={classes.cart}>
                <div className={classes.cartIcon}>
                    <IconCart/>
                    <span>0</span>
                </div>
                <div className={classes.cartBody}>
                    <div className={classes.cartBodySum}>0 грн.</div>
                    <div className={classes.cartBodyLink}>Оформити замовлення</div>
                </div>
            </button>
        </>
    );
};
