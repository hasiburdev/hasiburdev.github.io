// Generate a deterministic gradient color based on a string
// This ensures the same string always produces the same color
export function generateGradientFromString(str: string): {
  from: string;
  to: string;
} {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }

  // Generate HSL colors for better gradients
  const hue1 = Math.abs(hash) % 360;
  const hue2 = (hue1 + 60) % 360;

  return {
    from: `hsl(${hue1}, 70%, 60%)`,
    to: `hsl(${hue2}, 70%, 50%)`,
  };
}
