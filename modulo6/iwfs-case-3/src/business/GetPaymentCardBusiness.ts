import { GetPaymentCard } from "../data/GetPaymentCardData";

export class GetPaymentCardBusiness {
  async getPayment(id: string) {
    try {
      if (!id) {
        return "Incorrect ID";
      }
      const getPaymentCard = new GetPaymentCard();
      const getPayment = await getPaymentCard.GetPaymentCardById(id);

      if (getPayment.length <= 0) {
        throw new Error(
          "Id does not exist"
        );
      }
      return getPayment;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
