import Link from "next/link";
import { Web3 } from "web3";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ElectionPill from "../../components/election-pill";

export default function Elections() {
  const tabs = ["elections", "results"];

  return (
    <div>
      <div className="py-5">
        <TabGroup>
          <TabList className="bg-white dark:bg-slate-100 rounded-[30px] w-full max-w-md mx-auto flex py-1 px-1 justify-center text-primary dark:text-muted items-center">
            {tabs.map((tab) => (
              <Tab
                key={tab}
                className="rounded-3xl uppercase w-1/2 py-5  font-semibold text-accent dark:text-slate-900 focus:outline-none data-[selected]:bg-primary data-[selected]:text-white dark:data-[selected]:text-slate-100 dark:data-[selected]:bg-slate-900 data-[hover]:bg-slate-200 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="py-5">
            <TabPanel>
              <ElectionPill />
            </TabPanel>
            <TabPanel>Content 2</TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
