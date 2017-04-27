class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.valid?
      ContactMailer.contact_me(@contact).deliver_now
      respond_to do |format|
        format.js { render 'contacts/thank_you'}
      end
    end
  end

  private
   def contact_params
    params.require(:contact).permit(:name, :email, :message, :nickname)
   end
end
