import { Loader2, AlertCircle, FileX2 } from "lucide-react";

const LoadingMessage = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 text-slate-500">
            <Loader2 className="w-8 h-8 animate-spin mb-3" />
            <p className="text-base font-medium">Loading data...</p>
            <p className="text-sm text-slate-400 mt-1">
                Please wait a moment.
            </p>
        </div>
    );
};

const ErrorMessage = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 text-red-500">
            <AlertCircle className="w-9 h-9 mb-3" />
            <p className="text-base font-semibold">Something went wrong</p>
            <p className="text-sm text-red-400 mt-1">
                We couldn't load the data.
            </p>
        </div>
    );
};

const NoRecordsMessage = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 text-slate-500">
            <FileX2 className="w-9 h-9 mb-3" />
            <p className="text-base font-semibold">No records found</p>
            <p className="text-sm text-slate-400 mt-1">
                There is no data to display.
            </p>
        </div>
    );
};

export { LoadingMessage, ErrorMessage, NoRecordsMessage }; 