class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    @contact.request = request
    # if @contact.deliver
    if @contact.valid
      @submitted = true
    else
      flash.now[:error] = "Cannot send message."
    end
  end

  private
   def contact_params
    params.require(:contact).permit(:name, :email, :message, :nickname)
   end
end
