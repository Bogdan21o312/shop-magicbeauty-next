import {tabsData} from "@/app/layouts/LayoutMain/Hedaer/HeaderCatalog/HeaderCatalogItems";
import classes from "./HeaderCatalog.module.scss"
import Link from "next/link";
import {CatalogTabs} from "@/app/layouts/LayoutMain/Hedaer/HeaderCatalog/CatalogTabs";
import {useIsTouchDevice, useMediaQuery} from "@/app/hooks";
import {CustomLink} from "@/app/UI/CustomLink/CustomLink";

export const HeaderCatalog = () => {
    const isTouch = useIsTouchDevice()
    const matches = useMediaQuery()

    return (
        <div className={classes.main}>
            <div className={classes.mainContainer}>
                <CatalogTabs
                    tabs={tabsData.map(({id, title, content}) => ({
                        id,
                        title,
                        content: (
                            <>
                                {content.map(({id: linkId, text}) => (
                                    <li key={linkId} className={classes.catalogBodyItem}>
                                        <CustomLink className={classes.catalogBodyLink} key={linkId} href={`#${linkId}`}>
                                            {text}
                                        </CustomLink>
                                    </li>
                                ))}
                            </>
                        ),
                        links: (
                            <>
                                <ul className={classes.catalogBodySubList}>
                                    {content.map(({id: linkId, text}) => (
                                        <li key={linkId} className={classes.catalogBodySubItem}>
                                            <CustomLink className={classes.catalogBodySubLink} href={`#${linkId}`}>
                                                {text}
                                            </CustomLink>
                                        </li>
                                    ))}
                                </ul>
                                <ul className={classes.catalogBodySubList}>
                                    {content.map(({id: linkId, text}) => (
                                        <li key={linkId} className={classes.catalogBodySubItem}>
                                            <CustomLink className={classes.catalogBodySubLink} href={`#${linkId}`}>
                                                {text}
                                            </CustomLink>
                                        </li>
                                    ))}
                                </ul>
                                <ul className={classes.catalogBodySubList}>
                                    {content.map(({id: linkId, text}) => (
                                        <li key={linkId} className={classes.catalogBodySubItem}>
                                            <CustomLink className={classes.catalogBodySubLink} href={`#${linkId}`}>
                                                {text}
                                            </CustomLink>
                                        </li>
                                    ))}
                                </ul>
                                <ul className={classes.catalogBodySubList}>
                                    {content.map(({id: linkId, text}) => (
                                        <li key={linkId} className={classes.catalogBodySubItem}>
                                            <CustomLink className={classes.catalogBodySubLink} href={`#${linkId}`}>
                                                {text}
                                            </CustomLink>
                                        </li>
                                    ))}
                                </ul>
                                <ul className={classes.catalogBodySubList}>
                                    {content.map(({id: linkId, text}) => (
                                        <li key={linkId} className={classes.catalogBodySubItem}>
                                            <CustomLink className={classes.catalogBodySubLink} href={`#${linkId}`}>
                                                {text}
                                            </CustomLink>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ),
                    }))}
                    lazyLoad={true}
                    tabClassName="tab"
                    activeTabClassName="active"
                    inactiveTabClassName="inactive"
                    tabContentClassName="tab-content"
                />
            </div>
        </div>
    );
};
