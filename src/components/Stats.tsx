// Stats.tsx
import React from "react";
import { Clock, Users, Globe, MapPin } from "lucide-react";

type Stat = {
  icon: React.ElementType;
  value: string;
  label: string;
};

const stats: Stat[] = [
  { icon: Clock, value: "25+", label: "Years of Experience" },
  { icon: Users, value: "6", label: "Partners" },
  { icon: Globe, value: "100+", label: "Clients" },
  { icon: MapPin, value: "4", label: "Offices Nationwide" },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-[#0A1A44] py-12 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="relative bg-white rounded-xl p-6 pt-10 text-center shadow-md overflow-hidden"
                role="group"
                aria-label={s.label}
              >
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2">
                  <div className="w-11 h-11 rounded-full bg-[#0A2A57] flex items-center justify-center shadow-sm">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center min-h-[120px]">
                  <h3 className="text-3xl md:text-4xl font-semibold text-[#0A2A57]">{s.value}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
