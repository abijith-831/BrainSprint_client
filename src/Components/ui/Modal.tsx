// components/Modal.tsx
"use client";

import React from "react";

interface ModalProps {
  question: string;
  description?: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
}

export default function Modal({
  question,
  description,
  onConfirm,
  onCancel,
  confirmText = "Yes",
  cancelText = "Cancel",
}: ModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-80 text-center">
        <h2 className="text-lg font-semibold mb-4">{question}</h2>
        {description && <p className="text-gray-600 mb-6">{description}</p>}
        <div className="flex justify-center gap-4">
          <button     onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600" >
            {confirmText}
          </button>
          <button  onClick={onCancel}  className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
}
