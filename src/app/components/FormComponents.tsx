import { motion } from "motion/react";
import { Check } from "lucide-react";
import { useId } from "react";

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  highlight?: boolean;
}

export function InputField({
  label,
  placeholder,
  value,
  onChange,
  error,
  type = "text",
  highlight = false,
}: InputFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const borderColor = error
    ? "border-[#F87171]"
    : highlight
    ? "border-[rgba(160,133,103,0.4)]"
    : "border-[rgba(255,255,255,0.1)]";

  return (
    <div className="flex flex-col gap-2 w-full">
      <label
        htmlFor={id}
        className={`font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[2px] uppercase ${
          highlight ? "text-[#A08567]" : "text-[#878787]"
        }`}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={`w-full h-[46px] bg-[rgba(252,252,252,0.03)] rounded-[2px] border ${borderColor} px-4 font-['Inter',sans-serif] font-light text-[13px] text-[#fcfcfc] placeholder:text-[rgba(252,252,252,0.35)] outline-none focus-visible:border-[#A08567] focus-visible:ring-1 focus-visible:ring-[#A08567] transition-colors`}
      />
      {error && (
        <motion.p
          id={errorId}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          role="alert"
          className="font-['Inter',sans-serif] font-light text-[12px] leading-[18px] text-[#F87171]"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

interface CheckboxFieldProps {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  error?: string;
}

export function CheckboxField({
  checked,
  onChange,
  label,
  error,
}: CheckboxFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-start gap-3">
        <button
          type="button"
          id={id}
          role="checkbox"
          aria-checked={checked}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          onClick={() => onChange(!checked)}
          className={`mt-0.5 shrink-0 size-[16px] rounded-[2px] border flex items-center justify-center transition-all outline-none focus-visible:ring-1 focus-visible:ring-[#A08567] ${
            checked
              ? "bg-[#1e4d57] border-[#1e4d57]"
              : error
              ? "border-[#F87171] bg-transparent"
              : "border-[rgba(255,255,255,0.2)] bg-transparent hover:border-[rgba(255,255,255,0.4)]"
          }`}
        >
          {checked && <Check size={10} className="text-[#fcfcfc]" />}
        </button>
        <label
          htmlFor={id}
          className="font-['Inter',sans-serif] font-light text-[12px] leading-[18px] text-[#878787] cursor-pointer"
        >
          {label}
        </label>
      </div>
      {error && (
        <motion.p
          id={errorId}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          role="alert"
          className="font-['Inter',sans-serif] font-light text-[12px] leading-[18px] text-[#F87171] ml-7"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

export function SubmitButton({
  label,
  loading,
  type = "submit",
}: {
  label: string;
  loading?: boolean;
  type?: "submit" | "button";
  onClick?: () => void;
}) {
  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      disabled={loading}
      aria-busy={loading}
      aria-disabled={loading}
      className="w-full h-[54px] bg-[#1e4d57] border border-[#1e4d57] rounded-[2px] flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-60 outline-none focus-visible:ring-2 focus-visible:ring-[#A08567]"
    >
      {loading ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="size-5 border-2 border-[rgba(252,252,252,0.3)] border-t-[#fcfcfc] rounded-full"
          role="status"
          aria-label="Submitting"
        />
      ) : (
        <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[18px] tracking-[1.65px] uppercase text-[#fcfcfc]">
          {label}
        </span>
      )}
    </motion.button>
  );
}

export function ThankYouState({
  title,
  subtitle,
  message,
}: {
  title: string;
  subtitle: string;
  message: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex flex-col items-center justify-center text-center py-16 px-8"
      role="status"
      aria-live="polite"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
        className="size-16 rounded-full bg-[rgba(2,167,60,0.15)] border border-[rgba(2,167,60,0.3)] flex items-center justify-center mb-8"
      >
        <Check size={28} className="text-[#02A73C]" />
      </motion.div>
      <p className="font-['Cormorant_Garamond',serif] font-light text-[28px] md:text-[32px] leading-[38px] text-[#fcfcfc] mb-1">
        {title}
      </p>
      <p className="font-['Cormorant_Garamond',serif] italic font-light text-[28px] md:text-[32px] leading-[38px] text-[#A08567] mb-6">
        {subtitle}
      </p>
      <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc] max-w-[400px]">
        {message}
      </p>
    </motion.div>
  );
}