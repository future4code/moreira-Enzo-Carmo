import { CustomError } from "../errors/customError";
import { PaymentSlipData } from "../data/PaymentSlipData";
import { buyerInfo, clientInfo, inputSlipDTO, PaymentDataSlip, paymentInfo, PaymentSlip,} from "../model/paymentSlip";
import { GenerateID } from "../services/IdGenerator";
import { Validations } from "../services/Validations";

export class PaymentSlipBusiness {
  async paymentSlip(input: inputSlipDTO) {
    let errorCode: number = 500;
    try {
      const { nameBuyer, emailBuyer, cpfBuyer, typePayment } = input;
      const id = new GenerateID().newId();
      const validations = new Validations();

      const nameBuyerValidation = validations.nameBuyerValidate(nameBuyer);
      if (nameBuyerValidation !== true) {
        throw new CustomError(
          400,
          "Incorrect Buyer name"
        );
      }
      const emailBuyerValidation = validations.emailBuyerValidate(emailBuyer);
      if (emailBuyerValidation !== true) {
        throw new CustomError(
          400,
          "Incorrect buyer email"
        );
      }
      const cpfBuyerValidation = validations.cpfBuyerValidate(cpfBuyer);
      if (cpfBuyerValidation !== true) {
        throw new CustomError(
          400,
          "Incorrect CPF"
        );
      }
      const typePaymentValidation =
        validations.typePaymentValidateSlip(typePayment);
      if (typePaymentValidation !== true) {
        throw new CustomError(
          400,
          "Incorrect payment method'"
        );
      }

      const numberSlip = Math.floor(Math.random() * 12536987452147859685);
      let amountExampleOne = Math.floor(Math.random() * 500);
      let amountExampleTwo = Math.floor(Math.random() * 1700);
      let amountFinished: number;

      if (nameBuyer.length <= 8) {
        amountFinished = amountExampleOne;
      } else {
        amountFinished = amountExampleTwo;
      }

      const client: clientInfo = {
        id,
      };

      const buyer: buyerInfo = {
        id,
        nameBuyer,
        emailBuyer,
        cpfBuyer,
      };
      const payment: paymentInfo = {
        idPayment: id,
        nameBuyer,
        emailBuyer,
        cpfBuyer,
        amountPayment: amountFinished,
        typePayment,
        numberSlip: numberSlip.toString(),
        status: "accepted",
      };

      

      const newPaymentSlipData = new PaymentSlipData();

      const clientSlipData = await newPaymentSlipData.client(client);
      if (!clientSlipData) {
        throw new Error("Unable to register user.");
      }
      const buyerSlipData = await newPaymentSlipData.buyer(buyer);
      if (!buyerSlipData) {
        throw new Error("Unable to register buyer.");
      }
      const paymentSlipData = await newPaymentSlipData.payment(payment);
      if (!paymentSlipData) {
        throw new Error("Unable to process payment");
      }

      const dataPayment: PaymentDataSlip = {
        status: "aceppted",
        slip: payment.numberSlip.toString(),
      };

      return dataPayment;
    } catch (error: any) {
      throw new CustomError(errorCode, error.message);
    }
  }
}
