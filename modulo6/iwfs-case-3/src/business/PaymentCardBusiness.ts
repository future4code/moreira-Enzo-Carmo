import { PaymentCardData } from "../data/PaymentCardData";
import { buyerInfoCard, clientInfoCard, infoPayCard, inputCardDTO, paymentInfoCard,} from "../model/paymentCard";
import { GenerateID } from "../services/IdGenerator";
import { Validations } from "../services/Validations";

export class PaymentCardBusiness {
  async paymentCard(input: inputCardDTO) {
    try {
      const {
        nameBuyer,
        emailBuyer,
        cpfBuyer,
        typePayment,
        cardHolderName,
        cardNumber,
        cardExpirationDate,
        cardCvv,
      } = input;

      const validations = new Validations();

      const nameBuyerValidate = validations.nameBuyerValidate(nameBuyer);
      if (!nameBuyerValidate) {
        throw new Error(
          "Incorrect Buyer"
        );
      }
      const emailBuyerValidate = validations.emailBuyerValidate(emailBuyer);
      if (!emailBuyerValidate) {
        throw new Error(
          "Incorrect email"
        );
      }
      const cpfBuyerValidate = validations.cpfBuyerValidate(cpfBuyer);
      if (!cpfBuyerValidate) {
        throw new Error(
          "Incorrect cpf"
        );
      }
      const typePaymentValidateCard =
        validations.typePaymentValidateCard(typePayment);
      if (!typePaymentValidateCard) {
        throw new Error(
          "Incorrect payment method"
        );
      }
      const holderNameCardValidate =
        validations.holderNameValidate(cardHolderName);
      if (!holderNameCardValidate) {
        throw new Error(
          "Incorrect holder name"
        );
      }
      const numberCardValidate = validations.numberCardValidate(cardNumber);
      if (!numberCardValidate) {
        throw new Error(
          "Incorrect card number"
        );
      }
      const expirationDateCardValidate =
        validations.expirationDateValidate(cardExpirationDate);
      if (!expirationDateCardValidate) {
        throw new Error(
          "Card has expired"
        );
      }
      const cvvCardValidate = validations.cvvValidate(cardCvv.toString());
      if (!cvvCardValidate) {
        throw new Error(
          "Security number is incorrect"
        );
      }

      let amountExampleOne = Math.floor(Math.random() * 500);
      let amountExampleTwo = Math.floor(Math.random() * 1700);
      let amountFinished: number;

      const id = new GenerateID().newId();

      if (nameBuyer.length <= 8) {
        amountFinished = amountExampleOne;
      } else {
        amountFinished = amountExampleTwo;
      }

      const clientCard: clientInfoCard = {
        id,
        nameBuyer,
      };
      const buyerCard: buyerInfoCard = {
        id,
        nameBuyer,
        emailBuyer,
        cpfBuyer,
      };
      const paymentCard: paymentInfoCard = {
        idPayment: id,
        nameBuyer,
        emailBuyer,
        cpfBuyer,
        amountPayment: amountFinished,
        typePayment,
        cardHolderName,
        cardNumber,
        cardExpirationDate,
        cardCvv,
        status: "accepted",
      };

      const paymentCardData = new PaymentCardData();

      const insertClientCard = paymentCardData.InsertClientCard(clientCard);
      if (!insertClientCard) {
        throw new Error("Unable to register user");
      }
      const insertBuyerCard = paymentCardData.InsertBuyerCard(buyerCard);
      if (!insertBuyerCard) {
        throw new Error("Unable to register buyer");
      }
      const insertPaymentCard = paymentCardData.InsertPaymentCard(paymentCard);
      if (!insertPaymentCard) {
        throw new Error("Unable to process payment");
      }

      const infoPaymentCard: infoPayCard = {
        idPayment: paymentCard.idPayment,
        nameBuyer: paymentCard.nameBuyer,
        cpfBuyer: paymentCard.cpfBuyer,
        status: "accepted",
      };

      return infoPaymentCard;
    } catch (error: any) {
      return error.message;
    }
  }
}
