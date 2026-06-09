import { useEffect, useState } from "react";

// Defaults to a sweet recent anniversary; user can edit easily via prop
const DEFAULT_START = new Date("2024-10-12T00:00:00");

const diffParts = (start) => {
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();
  let hours = now.getHours() - start.getHours();
  let minutes = now.getMinutes() - start.getMinutes();
  let seconds = now.getSeconds() - start.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }
  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }
  if (hours < 0) {
    hours += 24;
    days -= 1;
  }
  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months -= 1;
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }
  const totalDays = Math.floor(
    (now - start) / (1000 * 60 * 60 * 24)
  );
  return { years, months, days, hours, minutes, seconds, totalDays };
};

const TimeCounter = ({ startDate = DEFAULT_START }) => {
  const [t, setT] = useState(() => diffParts(startDate));

  useEffect(() => {
    const id = setInterval(() => setT(diffParts(startDate)), 1000);
    return () => clearInterval(id);
  }, [startDate]);

  const Cell = ({ label, value, testid }) => (
    <div
      data-testid={testid}
      className="relative flex flex-col items-center justify-center bg-white/70 backdrop-blur-md border border-[#7A2021]/15 rounded-sm px-4 py-6 sm:px-6 sm:py-8 shadow-[0_20px_40px_-25px_rgba(122,32,33,0.35)]"
    >
      <span className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#7A2021] leading-none tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-3 text-[10px] sm:text-xs tracking-[0.35em] uppercase text-[#5C4A42]">
        {label}
      </span>
    </div>
  );

  return (
    <div
      data-testid="time-counter"
      className="w-full max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
        <Cell label="Anos" value={t.years} testid="counter-years" />
        <Cell label="Meses" value={t.months} testid="counter-months" />
        <Cell label="Dias" value={t.days} testid="counter-days" />
        <Cell label="Horas" value={t.hours} testid="counter-hours" />
        <Cell label="Minutos" value={t.minutes} testid="counter-minutes" />
        <Cell label="Segundos" value={t.seconds} testid="counter-seconds" />
      </div>
      <p
        className="mt-6 text-center font-script text-2xl sm:text-3xl text-[#7A2021]"
        data-testid="counter-total-days"
      >
        {t.totalDays.toLocaleString("pt-BR")} dias amando você
      </p>
    </div>
  );
};

export default TimeCounter;
