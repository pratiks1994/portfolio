import React from "react";
import {experimental_useFormStatus as useFormStatus } from 'react-dom'
import { FaPaperPlane } from "react-icons/fa";


function SubmitBtn() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className="h-11 w-32 rounded-full text-white  hover:bg-gray-800 bg-gray-950 flex justify-center gap-3 hover:scale-[1.02] dark:bg-white/10 group transition-all items-center font-semibold">
            {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white "></div>
            ) : (
                <>
                    Send
                    <FaPaperPlane className="text-gray-300 text-xs group-hover:scale-110  group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </>
            )}
        </button>
    );
}

export default SubmitBtn;
