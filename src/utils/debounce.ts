export default function debounce<
  F extends (...args: Parameters<F>) => ReturnType<F>,
>(func: F, ms: number): (...args: Parameters<F>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<F>): void => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), ms)
  }
}
