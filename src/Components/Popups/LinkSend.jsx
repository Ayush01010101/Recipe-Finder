import React from 'react';
import { createPortal } from 'react-dom';

export default function PortalComponent({ email }) {
  return createPortal(
    <div className='h-full fixed inset-0 font-medium bg-black/10 flex justify-center items-center'>
      <div className="p-2 bg-white flex flex-col rounded-2xl justify-center items-center min-h-[30vh]  max-w-[70vw] flex-wrap text-wrap">
        <p className='text-wrap'>
          Verification link has been sent to {email}. Check spam folder if it's not in inbox.
        </p>
      </div>
    </div>,
    document.querySelector("#portal")
  );
}