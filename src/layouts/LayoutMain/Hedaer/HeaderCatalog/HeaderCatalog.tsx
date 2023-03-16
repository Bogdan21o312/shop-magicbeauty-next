import {tabsData} from "@/layouts/LayoutMain/Hedaer/HeaderCatalog/HeaderCatalogItems";
import {
    main,
    catalogBodyItem,
    catalogBodyLink,
    mainContainer,
    catalogBodySubItem,
    catalogBodySubLink,
    catalogBodySubList,
} from "./HeaderCatalog.module.scss"
import Link from "next/link";
import {CatalogTabs} from "@/layouts/LayoutMain/Hedaer/HeaderCatalog/CatalogTabs";

export const HeaderCatalog = () => {

    return (
        <div className={main}>
            <div className={mainContainer}>
                <CatalogTabs
                    tabs={tabsData.map(({id, title, content}) => ({
                        id,
                        title,
                        content: (
                            <>
                                {content.map(({id: linkId, text}) => (
                                    <li key={linkId} className={catalogBodyItem}>
                                        <Link className={catalogBodyLink} key={linkId} href={`#${linkId}`}>
                                            {text}
                                        </Link>
                                    </li>
                                ))}
                            </>
                        ),
                        links: (
                            <>
                                <ul className={catalogBodySubList}>
                                    {content.map(({id: linkId, text}) => (
                                        <li key={linkId} className={catalogBodySubItem}>
                                            <Link className={catalogBodySubLink} href={`#${linkId}`}>
                                                {text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <ul className={catalogBodySubList}>
                                    {content.map(({id: linkId, text}) => (
                                        <li key={linkId} className={catalogBodySubItem}>
                                            <Link className={catalogBodySubLink} href={`#${linkId}`}>
                                                {text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <ul className={catalogBodySubList}>
                                    {content.map(({id: linkId, text}) => (
                                        <li key={linkId} className={catalogBodySubItem}>
                                            <Link className={catalogBodySubLink} href={`#${linkId}`}>
                                                {text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <ul className={catalogBodySubList}>
                                    {content.map(({id: linkId, text}) => (
                                        <li key={linkId} className={catalogBodySubItem}>
                                            <Link className={catalogBodySubLink} href={`#${linkId}`}>
                                                {text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <ul className={catalogBodySubList}>
                                    {content.map(({id: linkId, text}) => (
                                        <li key={linkId} className={catalogBodySubItem}>
                                            <Link className={catalogBodySubLink} href={`#${linkId}`}>
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
