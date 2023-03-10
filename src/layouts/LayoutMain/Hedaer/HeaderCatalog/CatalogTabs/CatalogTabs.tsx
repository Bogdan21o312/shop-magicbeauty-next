import {useEffect} from 'react';
import {useTabsToggle} from "@/hooks/useTabToggle";
import {
    catalog,
    catalogBody, catalogBodyItem,
    catalogBodyItems,
    catalogItems,
    catalogItem,
    active,
    catalogBodySubItems,
} from "@/layouts/LayoutMain/Hedaer/HeaderCatalog/HeaderCatalog.module.scss";

interface Tab {
    id: string;
    title: string;
    content: any;
    links: any
}

interface TabsToggle {
    activeTab: string;
    setActiveTab: (tabId: string) => void;
    getTabProps: (tabId: string) => {
        isActive: boolean;
        onClick: () => void;
    };
}

interface TabsProps {
    tabs: Tab[];
    initialActiveTab?: string;
    lazyLoad?: boolean;
    tabClassName?: string;
    activeTabClassName?: string;
    inactiveTabClassName?: string;
    tabContentClassName?: string;
    onTabChange?: (tabId: string) => void;
}

export const CatalogTabs: React.FC<TabsProps> = ({
                                                     tabs,
                                                     initialActiveTab = tabs[0].id,
                                                     lazyLoad = false,
                                                     tabClassName = '',
                                                     tabContentClassName = '',
                                                     onTabChange = () => {
                                                     },
                                                 }) => {
    const {activeTab, setActiveTab, getTabProps} = useTabsToggle(
        initialActiveTab
    );

    useEffect(() => {
        onTabChange(activeTab);
    }, [activeTab, onTabChange]);

    const activeTabIndex = tabs.findIndex((tab) => tab.id === activeTab);

    return (
        <div className={catalog}>
            <div className={catalogItems}>
                {tabs.map((tab) => {
                    const {isActive, onClick} = getTabProps(tab.id);

                    return (
                        <button
                            key={tab.id}
                            className={`${catalogItem} ${
                                isActive ? active : ''
                            }`}
                            onClick={onClick}
                        >
                            {tab.title}
                        </button>
                    );
                })}
            </div>
            <div className={catalogBody}>
                {tabs.map((tab, index) => {
                    const isActive = activeTabIndex === index;

                    if (lazyLoad && !isActive) {
                        return null;
                    }

                    return (
                        <ul
                            key={tab.id}
                            className={catalogBodyItems}
                        >
                            {tab.content}
                        </ul>
                    );
                })}
                {tabs.map((tab, index) => {
                    const isActive = activeTabIndex === index;
                    if (lazyLoad && !isActive) {
                        return null;
                    }
                    return (
                        <div
                            key={tab.id}
                            className={catalogBodySubItems}
                        >
                            {tab.links}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
