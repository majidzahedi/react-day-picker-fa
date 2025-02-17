import { format, Locale } from 'date-fns-jalali';

/**
 * The default formatter for the Month caption.
 */
export function formatMonthCaption(
  month: Date,
  options?: { locale?: Locale }
): string {
  return format(month, 'LLLL', options);
}
