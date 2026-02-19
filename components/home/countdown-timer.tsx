"use client"

import { useEffect, useState } from "react"
import { differenceInSeconds } from "date-fns"

interface CountdownTimerProps {
    targetDate: Date
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
    const [timeLeft, setTimeLeft] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date()
            const diff = differenceInSeconds(targetDate, now)
            if (diff <= 0) {
                clearInterval(timer)
                setTimeLeft(0)
            } else {
                setTimeLeft(diff)
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [targetDate])

    const days = Math.floor(timeLeft / (3600 * 24))
    const hours = Math.floor((timeLeft % (3600 * 24)) / 3600)
    const minutes = Math.floor((timeLeft % 3600) / 60)
    const seconds = timeLeft % 60

    return (
        <div className="grid grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center p-2 bg-background/50 rounded-lg border shadow-sm backdrop-blur-sm">
                <span className="text-2xl sm:text-3xl md:text-5xl font-bold">{days}</span>
                <span className="text-[10px] sm:text-xs uppercase text-muted-foreground md:text-sm">Days</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-background/50 rounded-lg border shadow-sm backdrop-blur-sm">
                <span className="text-2xl sm:text-3xl md:text-5xl font-bold">{hours}</span>
                <span className="text-[10px] sm:text-xs uppercase text-muted-foreground md:text-sm">Hours</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-background/50 rounded-lg border shadow-sm backdrop-blur-sm">
                <span className="text-2xl sm:text-3xl md:text-5xl font-bold">{minutes}</span>
                <span className="text-[10px] sm:text-xs uppercase text-muted-foreground md:text-sm">Mins</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-background/50 rounded-lg border shadow-sm backdrop-blur-sm">
                <span className="text-2xl sm:text-3xl md:text-5xl font-bold">{seconds}</span>
                <span className="text-[10px] sm:text-xs uppercase text-muted-foreground md:text-sm">Secs</span>
            </div>
        </div>
    )
}
