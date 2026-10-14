(() => {
  const resolvedPaths = new Map();

  window.loadLocalImage = (image, source, onFailure = () => {}) => {
    const base = source.replace(/\.(?:png|jpe?g|webp)$/i, "");
    const candidates = [...new Set([resolvedPaths.get(base), source, `${base}.png`, `${base}.jpg`, `${base}.jpeg`, `${base}.webp`].filter(Boolean))];
    let index = 0;
    image.onerror = () => {
      index += 1;
      if (index < candidates.length) {
        image.src = candidates[index];
      } else {
        onFailure();
      }
    };
    image.addEventListener("load", () => resolvedPaths.set(base, image.getAttribute("src")), { once: true });
    image.src = candidates[index];
  };
})();
