export const useDiscountOffer = (number, offer) => {
    const mohasebe = (offer * Number(number)) / 100
    return mohasebe
}