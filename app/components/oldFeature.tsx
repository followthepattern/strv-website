import { Zap, Trophy, Target, Brain } from "lucide-react";

export default function OldFeature() {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
                {
                    icon: <Zap className="w-8 h-8" />,
                    title: "Voice & Check-in Intelligence",
                    description: "Turn voice messages into text, generate meeting notes from check-in calls, and keep everything documented without extra effort."
                },
                {
                    icon: <Trophy className="w-8 h-8" />,
                    title: "Connected Coaching",
                    description: "Get notified on client updates, seamless calendar and WhatsApp integrations help you stay organized and keep clients on track."
                },
                {
                    icon: <Target className="w-8 h-8" />,
                    title: "Smarter Tracking, Simplified",
                    description: "Your clients log calories, workouts, sleep, and notes in one place — clear reports keep you both aligned on progress."
                },
                {
                    icon: <Brain className="w-8 h-8" />,
                    title: "AI-Powered Nutrition & Insights",
                    description: "Clients snap photos of meals for instant calorie estimates. Get personalized insights that adapt to each client's training goals."
                }
            ].map((feature, index) => (
                <div
                    key={index}
                    className="text-left p-6 rounded-lg bg-gray-50 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-800 to-teal-950 rounded-full flex items-center justify-center mx-auto mb-8 text-white">
                        {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-heading">
                        {feature.title}
                    </h3>
                    <p className="font-light text-gray-900/80">
                        {feature.description}
                    </p>
                </div>
            ))}
        </div>
    )
}