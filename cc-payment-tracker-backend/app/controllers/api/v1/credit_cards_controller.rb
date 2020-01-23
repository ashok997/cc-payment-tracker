class Api::V1::CreditCardsController < ApplicationController

    def index
        credit_cards = CreditCard.all
        render json: credit_cards, include: :transactions
    end

    def create
        credit_card = CreditCard.create(credit_card_params)
        render json: credit_card
    end

    def update
        credit_card = CreditCard.find(params[:id])
        credit_card.updat(credit_card_parms)
        render json: credit_card
    end

    def destroy
        credit_card = CreditCard.find(params[:id])
        credit_card.delete
    end

    private
        def credit_card_params
            params.require(:credit_card).permit(:card_name, :last_four, :exp_date, :balance)
        end

end
