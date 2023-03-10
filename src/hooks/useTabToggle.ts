import {useState} from "react";

export const useTabsToggle = (initialActiveTab: string) => {
    const [activeTab, setActiveTab] = useState(initialActiveTab);

    const getTabProps = (tabId: string) => {
        const isActive = activeTab === tabId;

        const onClick = () => {
            if (!isActive) {
                setActiveTab(tabId);
            }
        };

        return {isActive, onClick};
    };

    return {activeTab, setActiveTab, getTabProps};
};
