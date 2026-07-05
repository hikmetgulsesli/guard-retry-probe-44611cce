// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Status Utility - Guard Retry Probe
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, CheckCheck, CheckCircle2, ClipboardList, History, Info, ListTodo, RefreshCw, Settings } from "lucide-react";


export type StatusUtilityGuardRetryProbeActionId = "history-1" | "settings-2" | "refresh-status-3";

export interface StatusUtilityGuardRetryProbeProps {
  actions?: Partial<Record<StatusUtilityGuardRetryProbeActionId, () => void>>;

}

export function StatusUtilityGuardRetryProbe({ actions }: StatusUtilityGuardRetryProbeProps) {
  return (
    <>
      {/* TopAppBar Component (from JSON + Context) */}
      <header className="bg-background dark:bg-background border-b border-outline-variant dark:border-outline-variant docked full-width top-0 flex justify-between items-center w-full px-md py-sm max-w-full mx-auto">
      <div className="flex items-center gap-md">
      <h1 className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary">Guard Retry Probe</h1>
      <span className="font-body-sm text-body-sm text-on-surface-variant ml-md pl-md border-l border-outline-variant">
                      Last updated: <span className="font-code-md text-code-md" id="timestamp">2024-05-18 14:32:01 UTC</span>
      </span>
      </div>
      <div className="flex items-center gap-sm">
      <button aria-label="history" className="p-xs text-on-surface-variant hover:bg-surface-variant transition-colors active:scale-95 transition-transform rounded" type="button" data-action-id="history-1" onClick={actions?.["history-1"]}>
      <History className="text-lg" aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="settings" className="p-xs text-on-surface-variant hover:bg-surface-variant transition-colors active:scale-95 transition-transform rounded" type="button" data-action-id="settings-2" onClick={actions?.["settings-2"]}>
      <Settings className="text-lg" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-start p-lg max-w-5xl mx-auto w-full gap-xl">
      {/* 1. Status Cards */}
      <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-md">
      {/* Card 1: Probe Connectivity */}
      <div className="card-level-1 rounded-DEFAULT p-md flex flex-col gap-sm">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Probe Connectivity</span>
      <BadgeHelp  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-center gap-sm mt-xs">
      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
      <span className="font-code-md text-code-md text-on-surface">Active</span>
      </div>
      </div>
      {/* Card 2: Guard System */}
      <div className="card-level-1 rounded-DEFAULT p-md flex flex-col gap-sm">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Guard System</span>
      <BadgeHelp className="text-primary" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-center gap-sm mt-xs">
      <div className="w-2 h-2 rounded-full bg-primary"></div>
      <span className="font-code-md text-code-md text-on-surface">Ready</span>
      </div>
      </div>
      {/* Card 3: Retry Queue */}
      <div className="card-level-1 rounded-DEFAULT p-md flex flex-col gap-sm">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Retry Queue</span>
      <ClipboardList className="text-secondary" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-center gap-sm mt-xs">
      <span className="font-code-md text-code-md text-on-surface">0 pending</span>
      </div>
      </div>
      </section>
      {/* 2. Controls */}
      <section className="flex flex-col items-center gap-md my-md w-full max-w-md">
      <button className="w-full bg-primary text-on-primary font-headline-sm text-headline-sm py-sm px-lg rounded-DEFAULT hover:bg-primary-container active:scale-95 transition-colors flex items-center justify-center gap-sm border border-primary" id="ACT_REFRESH_STATUS" type="button" data-action-id="refresh-status-3" onClick={actions?.["refresh-status-3"]}>
      <RefreshCw aria-hidden={true} focusable="false" />
                      Refresh Status
                  </button>
      <div className="flex items-center gap-sm p-sm rounded-DEFAULT border border-outline-variant bg-surface-container-low w-full justify-center">
      <span className="font-label-caps text-label-caps text-on-surface-variant">PAUSED</span>
      <label className="relative inline-flex items-center cursor-pointer" htmlFor="ACT_TOGGLE_STATUS">
      <input defaultChecked={true} className="sr-only peer" id="ACT_TOGGLE_STATUS" type="checkbox" />
      <div className="w-11 h-6 bg-surface-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border border-outline-variant peer-checked:bg-primary"></div>
      </label>
      <span className="font-label-caps text-label-caps text-primary">READY</span>
      </div>
      </section>
      {/* 3. Activity List */}
      <section className="w-full card-level-1 rounded-DEFAULT border border-outline-variant flex flex-col overflow-hidden max-w-3xl">
      <div className="bg-surface-container border-b border-outline-variant px-md py-sm flex justify-between items-center">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase">System Logs</h3>
      <ListTodo className="text-on-surface-variant text-sm" aria-hidden={true} focusable="false" />
      </div>
      <div className="p-0 overflow-y-auto max-h-64 scrollbar-thin">
      <ul className="flex flex-col font-code-md text-code-md">
      <li className="px-md py-sm border-b border-outline-variant/30 flex items-start gap-md hover:bg-surface-container-high transition-colors">
      <span className="text-on-surface-variant w-24 shrink-0">14:32:01.05</span>
      <CheckCircle2 className="text-primary text-[16px]" aria-hidden={true} focusable="false" />
      <span className="text-on-surface">Status check completed. All probes responding normally.</span>
      </li>
      <li className="px-md py-sm border-b border-outline-variant/30 flex items-start gap-md hover:bg-surface-container-high transition-colors">
      <span className="text-on-surface-variant w-24 shrink-0">14:31:58.92</span>
      <BadgeHelp className="text-primary text-[16px]" aria-hidden={true} focusable="false" />
      <span className="text-on-surface">Handshake verified with Guard API endpoint.</span>
      </li>
      <li className="px-md py-sm border-b border-outline-variant/30 flex items-start gap-md hover:bg-surface-container-high transition-colors">
      <span className="text-on-surface-variant w-24 shrink-0">14:31:45.11</span>
      <Info className="text-secondary text-[16px]" aria-hidden={true} focusable="false" />
      <span className="text-on-surface-variant">Retry queue flushed successfully. 0 items remaining.</span>
      </li>
      <li className="px-md py-sm border-b border-outline-variant/30 flex items-start gap-md hover:bg-surface-container-high transition-colors">
      <span className="text-on-surface-variant w-24 shrink-0">14:30:00.00</span>
      <RefreshCw className="text-secondary text-[16px]" aria-hidden={true} focusable="false" />
      <span className="text-on-surface-variant">Scheduled telemetry ping initiated.</span>
      </li>
      </ul>
      </div>
      </section>
      {/* 4. Feedback Area */}
      <section className="mt-auto w-full max-w-3xl flex items-center justify-center py-md">
      <div className="flex items-center gap-sm text-on-surface-variant/70 font-body-sm text-body-sm bg-surface-container-lowest px-md py-xs rounded-full border border-outline-variant/20">
      <CheckCheck className="text-[14px]" aria-hidden={true} focusable="false" />
      <span>No recent errors detected in the last 24 hours.</span>
      </div>
      </section>
      </main>
      
    </>
  );
}
