import { PageHeader } from "@/components/layout/page-header"
import { Calendar, Clock, AlertCircle } from "lucide-react"

const dates = [
    {
        event: "Paper Submission Deadline",
        date: "February 1, 2025",
        description: "Submit your full paper for review.",
        status: "Upcoming",
        color: "text-red-500"
    },
    {
        event: "Notification of Acceptance",
        date: "February 20, 2025",
        description: "Authors will be notified of the review results.",
        status: "Upcoming",
        color: "text-orange-500"
    },
    {
        event: "Camera-Ready Paper Submission",
        date: "March 1, 2025",
        description: "Final version of accepted papers due.",
        status: "Upcoming",
        color: "text-yellow-500"
    },
    {
        event: "Early Bird Registration Ends",
        date: "February 15, 2025",
        description: "Last day to register at a discounted rate.",
        status: "Upcoming",
        color: "text-blue-500"
    },
    {
        event: "Conference Dates",
        date: "March 16-17, 2025",
        description: "The main event in New York City.",
        status: "Upcoming",
        color: "text-green-500"
    }
]

export default function ImportantDatesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Important Dates"
                description="Mark your calendar for these key deadlines."
            />
            <div className="container py-12 px-4 md:px-6">
                <div className="max-w-3xl mx-auto space-y-8">
                    {dates.map((item, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-6 p-6 border rounded-lg bg-card shadow-sm items-start md:items-center">
                            <div className="flex-shrink-0 flex flex-col items-center justify-center p-4 bg-muted rounded-md min-w-[120px] text-center">
                                <Calendar className="h-6 w-6 mb-2 text-primary" />
                                <span className="font-bold text-sm">{item.date}</span>
                            </div>
                            <div className="flex-1 space-y-1">
                                <h3 className="text-xl font-bold">{item.event}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                            <div className="flex-shrink-0">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted ${item.color}`}>
                                    {item.status}
                                </span>
                            </div>
                        </div>
                    ))}

                    <div className="flex items-start p-4 mt-8 bg-blue-50 text-blue-800 rounded-md dark:bg-blue-950 dark:text-blue-200">
                        <AlertCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-sm">
                            <strong>Note:</strong> All deadlines are at 11:59 PM Eastern Standard Time (EST). Deadlines are strict and no extensions will be granted.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
