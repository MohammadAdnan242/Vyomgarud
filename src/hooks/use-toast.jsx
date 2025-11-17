import { useState, useCallback } from "react";

let setToastStateFn = null;

// Global Toast Component
export const ToastContainer = () => {
  const [toast, setToast] = useState(null);

  setToastStateFn = setToast;

  if (!toast) return null;

  return (
    <div className="fixed top-5 right-5 z-50">
      <div className="bg-white text-black shadow-lg rounded-md px-4 py-3 min-w-[250px] border border-black/10">
        <h4 className="font-semibold">{toast.title}</h4>
        {toast.description && (
          <p className="text-sm mt-1 text-black/70">{toast.description}</p>
        )}
      </div>
    </div>
  );
};

// Hook
export const useToast = () => {
  const toast = useCallback(({ title, description }) => {
    if (!setToastStateFn) return;

    setToastStateFn({ title, description });

    // Auto hide after 3 seconds
    setTimeout(() => {
      setToastStateFn(null);
    }, 3000);
  }, []);

  return { toast };
};
