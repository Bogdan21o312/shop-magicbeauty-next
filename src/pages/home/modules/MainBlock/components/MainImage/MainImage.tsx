import {Ibg} from "@/UI";
import {main, tips, clImageIbg, clImage, icon, icon01, icon03, icon02, body} from "./MainImage.module.scss"
import {Plus} from "@/assets/config";
import {FC} from "react";
import {IMainImage} from "@/pages/home/modules/MainBlock/components/MainImage/IMainImage";
import {Tooltip} from "@/UI/Tooltip";

export const MainImage: FC<IMainImage> = ({mainImage, mainAlt}) => {
    return (
        <div className={main}>
            <div className={body}>
                <div className={clImage}>
                    <Ibg src={mainImage} alt={mainAlt} modClass={clImageIbg}/>
                </div>
                <div className={tips}>
                    <Tooltip
                        position="top"
                        offsetY={10}
                        offsetX={0}
                        behavior="hover"
                        renderContent={() => (
                            <div>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever
                            </div>
                        )}
                    >
                        <div className={`${icon} ${icon01}`}><Plus/></div>
                    </Tooltip>
                    <Tooltip
                        position="top"
                        offsetY={10}
                        offsetX={0}
                        behavior="hover"
                        renderContent={() => (
                            <div>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever
                            </div>
                        )}
                    >
                        <div className={`${icon} ${icon02}`}><Plus/></div>
                    </Tooltip>
                    <Tooltip
                        position="top"
                        offsetY={10}
                        offsetX={0}
                        behavior="hover"
                        renderContent={() => (
                            <div>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever
                            </div>
                        )}
                    >
                        <div className={`${icon} ${icon03}`}><Plus/></div>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};
