'use client'

import { useRouter } from "next/navigation"
import DashboardForm from "@/app/components/dashboardForm/DashboardForm"

const DashboardModal = () => {
    const router = useRouter()

    const closeModal = () => {
        router.back();
    };
    return (
        <div className="bg-slate-400/50 absolute top-0 bottom-0 left-0 right-0">
            <div className="bg-white rounded-md shadow-lg w-3/5 h-3/4 p-4 absolute left-1/2 -translate-x-1/2 top-1/2 transform -translate-y-1/2 overflow-auto">
                <button onClick={closeModal} className="bg-red-300 absolute right-0 mr-4">
                    <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="832" width="32" height="32"><path d="M674.6112 305.9712l43.4176 43.4176L555.4176 512l162.6112 162.6112-43.4176 43.4176L512 555.4176l-162.6112 162.6112-43.4176-43.4176L468.5824 512 305.9712 349.3888l43.4176-43.4176L512 468.5824z" fill="#383838" p-id="833"></path></svg>
                </button>
                <div><DashboardForm handleGoBack={closeModal}></DashboardForm></div>
            </div>
        </div>
    )
}
export default DashboardModal