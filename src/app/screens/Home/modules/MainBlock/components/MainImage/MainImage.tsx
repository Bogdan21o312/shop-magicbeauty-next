import {Ibg} from "@/app/UI";
import classes from "./MainImage.module.scss"
import {IconPlus} from "@/assets/config";
import {FC} from "react";
import {IMainImage} from "@/app/screens/Home/modules/MainBlock/components/MainImage/IMainImage";
import {Tooltip} from "@/app/UI/Tooltip";

export const MainImage: FC<IMainImage> = ({mainImage, mainAlt}) => {
    return (
        <div className={classes.main}>
            <div className={classes.body}>
                <div className={classes.clImage}>
                    <Ibg src={mainImage} alt={mainAlt} modClass={classes.clImageIbg}/>
                </div>
                <div className={classes.tips}>
                    {/*<Tooltip*/}
                    {/*    position="top"*/}
                    {/*    offsetY={10}*/}
                    {/*    offsetX={0}*/}
                    {/*    behavior="hover"*/}
                    {/*    renderContent={() => (*/}
                    {/*        <div>*/}
                    {/*            Lorem Ipsum is simply dummy text of the printing and typesetting*/}
                    {/*            industry. Lorem Ipsum has been the industry's standard dummy text*/}
                    {/*            ever*/}
                    {/*        </div>*/}
                    {/*    )}*/}
                    {/*>*/}
                        <div className={`${classes.icon} ${classes.icon01}`}><IconPlus/></div>
                    {/*</Tooltip>*/}
                    {/*<Tooltip*/}
                    {/*    position="top"*/}
                    {/*    offsetY={10}*/}
                    {/*    offsetX={0}*/}
                    {/*    behavior="hover"*/}
                    {/*    renderContent={() => (*/}
                    {/*        <div>*/}
                    {/*            Lorem Ipsum is simply dummy text of the printing and typesetting*/}
                    {/*            industry. Lorem Ipsum has been the industry's standard dummy text*/}
                    {/*            ever*/}
                    {/*        </div>*/}
                    {/*    )}*/}
                    {/*>*/}
                        <div className={`${classes.icon} ${classes.icon02}`}><IconPlus/></div>
                    {/*</Tooltip>*/}
                    {/*<Tooltip*/}
                    {/*    position="top"*/}
                    {/*    offsetY={10}*/}
                    {/*    offsetX={0}*/}
                    {/*    behavior="hover"*/}
                    {/*    renderContent={() => (*/}
                    {/*        <div>*/}
                    {/*            Lorem Ipsum is simply dummy text of the printing and typesetting*/}
                    {/*            industry. Lorem Ipsum has been the industry's standard dummy text*/}
                    {/*            ever*/}
                    {/*        </div>*/}
                    {/*    )}*/}
                    {/*>*/}
                        <div className={`${classes.icon} ${classes.icon03}`}><IconPlus/></div>
                    {/*</Tooltip>*/}
                </div>
            </div>
        </div>
    );
};
