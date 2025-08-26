export function useScrollTo() {
  return (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };
}
