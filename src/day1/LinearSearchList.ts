export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    for (const h of haystack) {
        if (h === needle) {
            return true;
        }
    }
    return false;
}
