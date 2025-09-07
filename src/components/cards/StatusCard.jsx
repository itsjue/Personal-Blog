import { X } from 'lucide-react';

function StatusCard(props) {
    const {title, description, bgColor} = props

    return (
        <div className={`w-fit flex flex-col ${bgColor} text-white p-4 rounded-xl`}>
            <div className="flex justify-between">
                <h2 className="text-xl font-semibold">{title}</h2>
                <X size={24}/>
            </div>
            <p className="text-sm mt-1">{description}</p>
        </div>
    )
}

export default StatusCard