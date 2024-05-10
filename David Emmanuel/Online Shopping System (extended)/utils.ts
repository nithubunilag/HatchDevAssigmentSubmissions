
export function getUserChoice(choices: string[], start: number = 1) {
  choices.forEach((choice, i) => {
    console.log(`${i + start}: ${choice}`);
  });
  const userInput = prompt("::") || "";
  try {
    const choice = parseInt(userInput);
    if (choice - start >= 0 && choice - 1 < choices.length) {
      return choice;
    }
    throw new Error("Invalid option");
  } catch (e) {
    console.error(e.message);
    return getUserChoice(choices);
  }
}

export function formatPrice(price: number) {
  return Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(price);
}
