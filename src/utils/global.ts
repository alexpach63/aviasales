export const num2str = (n: number, text_forms: Array<string>) :string => {  
    n = Math.abs(n) % 100; 
    const n1 = n % 10;
    return (n > 10 && n < 20) ? text_forms[2]
        : (n1 > 1 && n1 < 5) ? text_forms[1]
        : (n1 == 1) ? text_forms[0]
        : text_forms[2];
}

export const genStopLabel = (count: string) => {
    return count === '0' ? 'Без пересадок'
        : count === 'all' ? 'Все'
        : `${count} ${num2str(+count, ['пересадка', 'пересадки', 'пересадок'])}`
}

export const currencyArr = ['rub', 'usd', 'eur']

export const curFormat = (currency: string, price: number) => {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency }).format(price)
}
