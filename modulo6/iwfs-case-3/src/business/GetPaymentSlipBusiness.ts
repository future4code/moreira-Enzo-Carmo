import { GetPaymentSlip } from "../data/GetPaymentSlipData";
import { CustomError } from "../errors/customError";

export class GetPaymentSlipBusiness {
  async getPayment(id: string) {
    try {
      if (!id) {
        return "Incorrect ID";
      }
      const getPaymentSlip = new GetPaymentSlip();
      const getPayment = await getPaymentSlip.GetPaymentSlipById(id);

      if (getPayment.length <= 0) {
        throw new Error(
          "ID does not exist"
        );
      }
      return getPayment;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
