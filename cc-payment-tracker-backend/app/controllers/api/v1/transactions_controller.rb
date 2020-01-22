class Api::V1::TransactionsController < ApplicationController


    def index
        transactions = Transaction.all
        render json: transactions, include: [:credit_cards]
    end

    def create
        transaction= Transaction.create(transaction_params)
        render json: transacion
    end

    def update
        transacion = Transaction.find(params[:id])
        transacion.updat(transaction_parms)
        render json: transacion
    end


    def transaction_params
        params.require(:transacion).permit(:date, :amount, credit_card_id)
    end
end
