// Shared utility for smooth scrolling to an element by ID with an offset
export const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const offset = 80; 
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = el.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
