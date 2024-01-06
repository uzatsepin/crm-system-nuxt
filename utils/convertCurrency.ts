export const convertCurrency = (amount: string | number) => {
    return Intl.NumberFormat('ua-UA', {
        style: 'currency',
        currency: 'UAH',
    }).format(+amount)
}