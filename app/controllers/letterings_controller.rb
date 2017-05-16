class LetteringsController < ApplicationController
  before_action :authenticate_user!

  def new
    @lettering = Lettering.new
  end

  def create
    @lettering = Lettering.new(lettering_params)
    if @lettering.save
      flash[:alert] = "Lettering created!"
      redirect_to new_lettering_path
    else
      render "new"
    end
  end

  def edit
    @lettering = Lettering.find(params[:id])
  end

  def update
    @lettering = Lettering.find(params[:id])
    if @lettering.update_attributes(lettering_params)
      flash[:alert] = "Lettering has been successfully updated."
      redirect_to root_path
    else
      render 'edit'
    end
  end

  def destroy
    Lettering.find(params[:id]).destroy
    flash[:alert] = "Lettering has been successfully deleted."
    redirect_to root_path
  end

  private

    def lettering_params
      params.require(:lettering).permit(:id, :name, :image)
    end

end
