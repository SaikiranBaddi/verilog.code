import React from 'react';
import { adsConfig } from '../../config/ads';

export const AdPlaceholder = ({ slot = 'default', className = '' }) => {
  // If ads are disabled in configuration, render absolutely nothing
  if (!adsConfig.enabled) {
    return null;
  }

  // When enabled = true in future, render Google AdSense or Ad network banner block
  const slotId = adsConfig.slots[slot] || adsConfig.slots.inArticle;

  return (
    <div className={`w-full my-6 flex flex-col items-center justify-center p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/50 min-h-[90px] ${className}`}>
      <span className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-1">Sponsored Advertisement</span>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', textAlign: 'center' }}
        data-ad-client={adsConfig.client}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdPlaceholder;
