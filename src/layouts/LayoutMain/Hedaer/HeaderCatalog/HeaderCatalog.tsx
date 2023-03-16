import {tabsData} from "@/layouts/LayoutMain/Hedaer/HeaderCatalog/HeaderCatalogItems";
import classes from "./HeaderCatalog.module.scss"
import Link from "next/link";
import {CatalogTabs} from "@/layouts/LayoutMain/Hedaer/HeaderCatalog/CatalogTabs";

export const HeaderCatalog = () => {

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
                                        <Link className={classes.catalogBodyLink} key={linkId} href={`#${linkId}`}>
                                            {text}
                                        </Link>
                                    </li>
                                ))}
                            </>
                        ),
                        links: (
                            <>
                                <ul className={classes.catalogBodySubList}>
                                    {content.map(({id: linkId, text}) => (
                                        <li key={linkId} className={classes.catalogBodySubItem}>
                                            <Link className={classes.catalogBodySubLink} href={`#${linkId}`}>
                                                {text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <ul className={classes.catalogBodySubList}>
                                    {content.map(({id: linkId, text}) => (
                                        <li key={linkId} className={classes.catalogBodySubItem}>
                                            <Link className={classes.catalogBodySubLink} href={`#${linkId}`}>
                                                {text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <ul className={classes.catalogBodySubList}>
                                    {content.map(({id: linkId, text}) => (
                                        <li key={linkId} className={classes.catalogBodySubItem}>
                                            <Link className={classes.catalogBodySubLink} href={`#${linkId}`}>
                                                {text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <ul className={classes.catalogBodySubList}>
                                    {content.map(({id: linkId, text}) => (
                                        <li key={linkId} className={classes.catalogBodySubItem}>
                                            <Link className={classes.catalogBodySubLink} href={`#${linkId}`}>
                                                {text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <ul className={classes.catalogBodySubList}>
                                    {content.map(({id: linkId, text}) => (
                                        <li key={linkId} className={classes.catalogBodySubItem}>
                                            <Link className={classes.catalogBodySubLink} href={`#${linkId}`}>
                                                {text}
                                            </Link>
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
