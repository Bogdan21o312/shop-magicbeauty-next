import {Ibg} from "@/UI";
import classes from "./MainImage.module.scss"
import {Plus} from "@/assets/config";
import {FC} from "react";
import {IMainImage} from "@/modules/MainBlock/components/MainImage/IMainImage";
import {Tooltip} from "@/UI/Tooltip";

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
                        <div className={`${classes.icon} ${classes.icon01}`}><Plus/></div>
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
                        <div className={`${classes.icon} ${classes.icon02}`}><Plus/></div>
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
                        <div className={`${classes.icon} ${classes.icon03}`}><Plus/></div>
                    {/*</Tooltip>*/}
                </div>
            </div>
        </div>
    );
};
