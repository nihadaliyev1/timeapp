const API_URL = "https://quoteslate.vercel.app";

export async function fetchAdvice() {
  try {
    const response = await fetch(
      `${API_URL}/api/quotes/range?minLength=100&maxLength=200`
    );

    if (!response.ok) {
      throw new Error("There is an error ocurred while fetching a quote");
    }

    const data = await response.json();

    return data;
  } catch (e) {
    if (e.message === "Failed to fetch") {
      throw new Error(
        "An unexpected error ocurred during fetching quote, please try again later"
      );
    }
    throw new Error(e.message);
  }
}
