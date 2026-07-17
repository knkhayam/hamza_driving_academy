"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "../lib/i18n/dictionaries/en";

type CookieNoticeProps = {
  dict: Dictionary;
};

const STORAGE_KEY = "hda-cookie-notice-dismissed";

export function CookieNotice({ dict }: CookieNoticeProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== "1") {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-line bg-bg-elevated p-4 shadow-[0_-8px_30px_rgba(0,0,0,0.12)]"
    >
      <div className="container flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="m-0 max-w-3xl text-sm text-ink-muted">{dict.cookie.message}</p>
        <button
          type="button"
          className="btn btn-primary shrink-0 !min-h-10"
          onClick={() => {
            try {
              localStorage.setItem(STORAGE_KEY, "1");
            } catch {
              /* ignore */
            }
            setVisible(false);
          }}
        >
          {dict.cookie.accept}
        </button>
      </div>
    </div>
  );
}
