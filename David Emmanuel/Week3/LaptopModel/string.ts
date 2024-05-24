export const alpha_lowercase = 'abcdefghijklmnopqrstuvwxyz'
export const alpha_uppercase = alpha_lowercase.toUpperCase()
export const alpha = alpha_lowercase + alpha_uppercase
export const numeric = '0123456789'
export const alphanumeric = alpha + numeric

export function generateRandomCharacters(length: number): string {
    let result = ''

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * alphanumeric.length)
        result += alphanumeric[randomIndex]
    }

    return result
}