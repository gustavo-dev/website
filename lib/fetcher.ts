export default async function fetcher(
    input: RequestInfo,
    init?: RequestInit
): Promise<Record<string, string>> {
    const res = await fetch(input, init)
    return res.json()
}
