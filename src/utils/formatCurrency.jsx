const formatCurrency = (value, currency) => {
    const res = Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency
    })
    return res
};

export default formatCurrency;