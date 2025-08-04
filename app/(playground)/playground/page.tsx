"use client";

import { useState } from "react";
import TabButton from "@/app/components/Tab/TabButton";
import TabGroup from "@/app/components/Tab/TabGroup";

export default function Playground() {
  const [currentTab, setCurrentTab] = useState("try-out");

  const handleTabChange = (activeId: string) => {
    setCurrentTab(activeId);
  };

  return (
    <div className="flex w-full flex-1 gap-4">
      <aside className="w-80 h-full shadow-1 rounded-3xl bg-white p-4">
        <TabGroup activeId="try-out" onChange={handleTabChange}>
          <TabButton id="try-out">Try Out</TabButton>
          <TabButton id="api-spec">API Spec.</TabButton>
        </TabGroup>

        {/* 현재 활성 탭 표시 (예시) */}
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">현재 활성 탭: {currentTab}</p>
        </div>
      </aside>

      <div className="flex-1 border rounded-3xl bg-white p-6">
        {/* 탭에 따른 콘텐츠 렌더링 */}
        {currentTab === "try-out" ? (
          <div>
            <h2 className="text-xl font-semibold mb-4">Try Out</h2>
            <p>여기에 Try Out 관련 콘텐츠가 표시됩니다.</p>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-4">API Spec.</h2>
            <p>여기에 API 스펙 관련 콘텐츠가 표시됩니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
