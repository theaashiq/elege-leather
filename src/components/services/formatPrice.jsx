export const FormatPrice = ({ price }) => {
    return Intl.NumberFormat('en-In', {
            style:'currency',
            currency: "INR",
            maximumFractionDigits: 0,
        }).format(price)
}
