export function isDark(hour) {
  if (Number(hour) >= 5 && Number(hour) < 18) {
    return false;
  } else {
    return true;
  }
}
