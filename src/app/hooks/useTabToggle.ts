import { useState } from "react";

export const useTabsToggle = () => {
    const [activeTab, setActiveTab] = useState(null);

    const getTabProps = (tabId: any) => {
        const isActive = activeTab === tabId;

        const onClick = () => {
            if (isActive) {
                setActiveTab(null);
            } else {
                setActiveTab(tabId);
            }
        };

        return { isActive, onClick };
    };

    return { activeTab, setActiveTab, getTabProps };
};
